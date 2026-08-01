function diameterOfBST(root)
{
    let diameter = 0;
    function dfs(node)
    {
        if(node === null) return 0;
        const [leftHeight, rightHeight] = [dfs(node.left), dfs(node.right)];

        diameter = Math.max(leftHeight + rightHeight, diameter);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    dfs(root);
    return diameter;
}