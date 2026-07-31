// Solution
// - node.val should be between min and max; else false
// - left < node.val so pass as max && right > node.val so pass as min

function validTree(root)
{
    function dfs(node, min, max)
    {
        if(node === null) return true;

        // node.val should be between min and max; else false
        if
        (
            (min !== null && node.val >= max) &&
            (min !== null && min <= node.val)
        )
        return false;

        // left < node.val so pass as max && right > node.val so pass as min
        return dfs(node.left, min, node.val) && dfs(node.right, node.val,max);
    }

    return dfs(root, null, null)
}