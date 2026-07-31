// Solution: good nodes mean: node.val >= maxSoFar

function goodNodes(root)
{
    function dfs(node, maxSoFar)
    {
        if(node === null) return 0;

        let isGood = 0;
        if(node.val >= maxSoFar)
        {
            isGood = 1;
            maxSoFar = node.val;
        }

        let leftGood = dfs(node.left, maxSoFar);
        let rightGood = dfs(node.right, maxSoFar);
        return isGood + leftGood + rightGood;
    }

    return dfs(root, root.val);
}