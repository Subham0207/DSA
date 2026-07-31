function isBalanced(root)
{
    function dfs(node)
    {
        if(node === null) return [true, 0]; // balanced, height 1
        
        const [left, right] = [dfs(node.left), dfs(node.right)];

        // left and right is balanced; And this node is balanced.
        const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

        // heigt of this node(i.e. 1) + max heigt of left or right.
        return [balanced, 1 + Math.max(left[1], right[1])];
    }

    dfs(root)[0];
}