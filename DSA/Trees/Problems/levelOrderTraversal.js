function levelOrder(root) {
    if (!root) return [];
    const queue = [root];
    const res = [];
    while(queue.length > 0)
    {  
        let levelSize = queue.length;
        res.push(queue.map(node => node.val));
        for(let i=0;i<levelSize;i++)
        {
            const node = queue.shift();
            node.left !== null && queue.push(node.left);
            node.right !== null && queue.push(node.right);
        }
    }
    return res;
}