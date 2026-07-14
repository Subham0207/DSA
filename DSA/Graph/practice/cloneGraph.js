function cloneGraph(node)
{
    const oldToNew = new Map();
    function dfs(node)
    {
        if(!node) return null;
        if(oldToNew.has(node)) return oldToNew.get(node);

        const copy = new Node(node.val);
        oldToNew.set(node, copy);
        
        node.neighbors.forEach( x => {
            copy.neighbors.push(dfs(x));
        })
    }

    return dfs(node);
}