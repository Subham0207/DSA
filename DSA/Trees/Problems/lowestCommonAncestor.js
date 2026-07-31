function lowestCommonAncestor(root, p, q)
{
    function dfs(node)
    {
        if(node === null || node === p || node === q)
            return node;

        const left = dfs(node.left);
        const right = dfs(node.right);

        if(left !== null && right !== null)
            return root;
        
        return left === null ? right: left;
    }
    
    return dfs(root);
}