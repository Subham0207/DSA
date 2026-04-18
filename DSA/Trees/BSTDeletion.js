class Node{
    constructor(value, left = null, right = null)
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

//Struggled: Yes
function deleteNode(curr, value)
{
    if(!curr)
        return curr;


    //we need to do curr.right = deleteNode(...) it returns to parent node
    //the same child that was already there, if nothing changed.
    //the new child if the old one was deleted
    //null if child was deleted and has no replacement
    if(value > curr.value)
    {
        curr.right = deleteNode(curr.right, value);
    }
    else if (value < curr.value)
    {
        curr.left = deleteNode(curr.left, value);
    }
    else
    {
        if(!curr.left)
        {
            return curr.right;
        }
        else if (!curr.right)
        {
            return curr.left;
        }

        //we found the node it has both left and right.
        //to next min node to replace it go to right tree.
        let pt = curr.right;
        //we go left in the right tree since left is min.
        while(pt.left)
        {
            pt = pt.left;
        }
        // we found the node to delete, replace its value with min i.e. pt.value
        curr.value = pt.value;
        //Now curr.value and pt.value are both same.
        //we need to delete that duplicate value. Since its already in its correct position
        curr.right = deleteNode(curr.right, curr.value);
    }
}


const bst = new Node(2);
insert(bst, 10)
insert(bst, 1)
insert(bst, 115)
insert(bst, 14)
insert(bst, 12)

deleteNode(bst, 14);