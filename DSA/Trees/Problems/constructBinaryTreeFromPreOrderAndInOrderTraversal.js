// Solution
// - keep going one by one in preOrder, to find the next root element to construct the tree.
// - find the index of root value from preOrder in inOrder.
// - recurse on the left part of inorder for left subtree.
// - recurse on the right part of the inorder for right subtree.

class TreeNode
{
    constructor(val,left=null,right=null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(preOrder, inOrder)
{
    let preOrderIndex = 0;
    function dfs(left,right) // indexes for inorder
    {
        if(left > right) return 0;

        const rootVal = preOrder[preOrderIndex++];
        const node = new TreeNode(rootVal);

        const index = inOrder.findIndex((val) => val === rootVal);

        node.left = dfs(left,index-1); // left tree is in left part of inOrder
        node.right = dfs(index+1,right); // right tree is in right part of inOrder
        return node;
    }

    return dfs(0, inOrder.length -1);
}