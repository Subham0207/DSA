// Reverse a linked list K at a time
// the left out nodes should remain unchanged.

// Solution:
// 1. 

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function printList(head) {
    let curr = head;
    let res = '';
    while (curr) {
        res += curr.val + (curr.next ? ' -> ' : '');
        curr = curr.next;
    }
    console.log(res);
}

function getKthNode(curr, k)
{
    while(curr && k > 0)
    {
        curr = curr.next;
        k--;
    }
    return curr;
}

function reverseNodesInKGroup(head,k)
{
    let dummy = new ListNode(0, head);
    let groupPrev = dummy;

    // Example: 0,1,2,3,4,5,6
    // dummy -> 0
    // groupPrev -> 0
    
    printList(dummy);
    
    while(true)
    {
        // k = 2, 2nd node is 2
        let kthNode = getKthNode(groupPrev, k);
        if(!kthNode) // outside group
        {
            break;
        }

        // 3, i,e, 2 -> 3
        let groupNext = kthNode.next; // one node right after the group

        //reverse the group
        // prev = 3
        // curr = 1
        let prev = kthNode.next;
        let curr = groupPrev.next;

        console.log('--Before--');
        console.log('groupprev ',groupPrev?.val);
        console.log('groupprev.next ', groupPrev.next?.val);
        console.log('---------');
        
        // Dry run: for sample 0->1->2->3
        // curr = 1, prev = 3
        // 1->3, 2->1 => 2->1->3
        // note groupPrev.next = 1, And 1 is now at end of group.
        while(curr !== groupNext)
        {   
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        
        // 2->1->3
        // temp = 1
        // group.next assinment connects 0->2
        // groupPrev moves to 1, start of next gorup
        // => 0->2->1->3
        let temp = groupPrev.next; // This was start in previous group. After reversing, this is before end of previous group.`
        groupPrev.next = kthNode; // point groupPrev.next to the begining of the next group.
        groupPrev = temp // moved to start to next group
        
        printList(dummy);
        console.log('--After--');
        console.log('groupprev ',groupPrev?.val);
        console.log('groupprev.next ', groupPrev.next?.val);
        console.log('---------');
    }

    printList(dummy);

    return dummy.next;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));

reverseNodesInKGroup(head, 2);
