// Question: is asking to find the longest path b/w any nodes in the tree.

function diameterOfBST(root)
{
    let diameter = 0;
    function dfs(node)
    {
        if(node === null) return 0;
        const [leftHeight, rightHeight] = [dfs(node.left), dfs(node.right)];

        // leftHeight + rightHeight is the path, we don't need to add 1 for current node.
        diameter = Math.max(leftHeight + rightHeight, diameter);

        //when returning we add 1 for path b/w current node and parent.
        return Math.max(leftHeight, rightHeight) + 1;
    }

    dfs(root);
    return diameter;
}