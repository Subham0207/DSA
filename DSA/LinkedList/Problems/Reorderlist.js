// Solution:
//1. find middle ( using slow and fast pointer), That gives us first half and second half
//2. reverse the second half
    // curr = slow.next
    // prev = null
    // while(curr) => temp = curr.next, curr.next = prev, prev = curr, curr = temp. (cirle motion, anti clock wise)
//3. merge two halfs

function reorderList(head)
{
    //find middle ( using slow and fast pointer), That gives us first half and second half
    let slow = head;
    let fast = head;
    while(fast && fast.next)
    {
        fast = fast.next.next;
        slow = slow.next;
    }

    //reverse the second half
    let prev = null;
    let curr = slow.next;
    while(curr)
    {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    // 'prev' is now the head of the reversed second half

    // merge two halfs
    let first = head;
    let second = prev;

    while(second)
    {
        temp1 = first.next;
        temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }
}