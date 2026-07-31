// solution: using inorder traversal
// we reach the leaf nodes after doing left()...

function kthSmallest(root, k)
{
    function inorder(node)
    {
        if(node === null) return;

        inorder(node.left);

        k--;
        if(k === 0)
        {
            result = node.val;
            return;
        }

        inorder(node.right);
    }

    inorder(root);
    return result;
}