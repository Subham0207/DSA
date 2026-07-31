// Solution: using BFS

function rightSideView(root) {
    if (!root) return [];
    const queue = [root];
    const res = [];
    while(queue.length > 0)
    {  
        let levelSize = queue.length;
        res.push(queue[levelSize - 1].val);
        for(let i=0;i<levelSize;i++)
        {
            const node = queue.shift();
            node.left !== null && queue.push(node.left);
            node.right !== null && queue.push(node.right);
        }
    }
    return res;
}