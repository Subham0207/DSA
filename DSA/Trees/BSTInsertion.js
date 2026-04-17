//Binary search tree
// A 
// left - B
// right - C
// C < A <  B
// left < root < right

// operations
// 1. insertion
// 2. removal

class Node{
    constructor(value, left, right)
    {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function insert(curr, value)
{
    if(value < curr)
    {
        if(left)
            insert(curr.left, value)
        else
            curr.left = new Node(value, null, null)
    }
    
    if ( value > curr)
    {
        if(right)
            insert(curr.right, value)
        else
            curr.right = new Node(value, null, null);
    }

}

const bst = new Node(2);
insert(bst, 3)
insert(bst, 5)
insert(bst, 1)

