class Node{
    constructor(value, left, right)
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

function iterativeDFS(curr)
{
    if(!curr)
        return curr

    const stack = [curr];
    while(stack.length > 0)
    {
        //use pop to get the most recently added node (LIFO) Stack
        const curr = stack.pop();
        console.log(curr.value)

        //Push right first so that left is on TOP of the stack.
        curr?.right && stack.push(curr.right);
        curr?.left && stack.push(curr.left);
    }
}

function invertBST(curr)
{
    if(!curr)
        return;

    if(curr.left)
    {
        invertBST(curr.left);
    }
    if(curr.right)
    {
        invertBST(curr.right);
    }

    let temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;

    return curr;
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

console.log("After inverting: ");
invertBST(bst);
iterativeDFS(bst);