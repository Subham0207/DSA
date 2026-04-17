class Node
{
    constructor(value, left = null, right = null)
    {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


function insertNode(curr, value)
{
    if(!curr)
        return new Node(value);

    if(value < curr.value)
    {
        curr.left = insertNode(curr.left, value);
    }
    if( value > curr.value)
    {
        curr.right = insertNode(curr.right, value);
    }

    return curr;
}


function bfs(bst)
{
    const res = [];
    const queue = [];
    queue.push(bst);

    while(queue.length > 0)
    {
        let qLen = queue.length;
        const level = [];
        for (let index = 0; index < qLen; index++) {
            let curr = queue.shift();

            if(curr)
            {
                level.push(curr.value);
                curr.left && queue.push(curr.left);
                curr.right && queue.push(curr.right);
            }
        }
        level && res.push(level);
    }

    return res;
}

function iterativeDFS(curr)
{
    if(!curr)
        return curr

    const stack = [curr];
    while(stack.length > 0)
    {
        const curr = stack.shift();
        console.log(curr.value)

        curr?.left && stack.push(curr.left);
        curr?.right && stack.push(curr.right);
    }
}

const bst = new Node(10);
insertNode(bst, 5);
insertNode(bst, 2);
insertNode(bst, 11);
insertNode(bst, 11);
insertNode(bst, 7);
insertNode(bst, 8);
insertNode(bst, 15);

iterativeDFS(bst);
console.log("BFS: ", bfs(bst))

