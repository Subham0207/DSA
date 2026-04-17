/*
Types of traversals:
    1. DFS:
        a. Inorder: left, root, right:  to get nodes in sorted order
        b. Preorder: root, left, right
        c. Postorder: left, right, root

    2. BFS:
        Level by level traversal
*/

class Node{
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

const bst = new Node(2);
insertNode(bst, 10)
insertNode(bst, 1)
console.log(bfs(bst));