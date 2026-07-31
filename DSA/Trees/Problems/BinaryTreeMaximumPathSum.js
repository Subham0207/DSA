function btMaxPathSum(root)
{
    let currentMax = 0;
    function dfs(node)
    {
        if(node === null) return 0;

        const leftMax = Math.max(0, dfs(node.left));
        const rightMax = Math.max(0, dfs(node.right));

        const currentPath = leftMax + node.val + rightMax;

        currentMax = Math.max(currentMax, currentPath);

        // need to return max of left and right child to parent to form a valid path.
        return node.val + Math.max(
            leftMax, rightMax
        );
    }

    dfs(root);
    return currentMax;
}