// Solution:
// edge cases
//          1. Two numbers are of different length.
//          2. Add a node, if carry has value and there are no more nodes left.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1,l2)
{
    let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;

    while(l1 || l2 || carry)
    {
        let v1 = l1 ? l1.val: 0;
        let v2 = l2 ? l2.val: 0;

        // new digit
        let val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        val = val % 10;
        curr.next = new ListNode(val);

        // update pointers
        curr = curr.next;
        l1 = l1 ? l1.next: null;
        l2 = l2 ? l2.next: null;
    }

    return dummy.next;
}

l1 = new ListNode(1, new ListNode(2, new ListNode(3)))
l2 = new ListNode(4, new ListNode(5, new ListNode(6)))

console.log(addTwoNumbers(l1,l2))