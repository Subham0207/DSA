// solution: Two pointers
// 1. insert a dummy node before head, mark it as left pointer
// 2. start right pointer from head. Move it until gap b/w left and right is n.
// 3. then continue moving right and left pointer until right is null. Now left pointer is just before the nth node.
// 4. Now, delete nth node.

class ListNode
{
    constructor(val = 0, next = null)
    {
        this.val = val;
        this.next = next;
    }
}

function removeNthNodeFromEnd(head, n)
{
    let dummy = new ListNode(0, head);
    let left = dummy;

    //increament right until gap b/w left and right is n
    let right = head;
    while( n > 0 && right)
    {
        right = right.next;
        n--;
    }

    //move right until it reaches end
    while(right)
    {
        right = right.next;
        left = left.next;   
    }

    //node after left is the nth node
    left.next = left.next.next;

    return dummy.next;
}