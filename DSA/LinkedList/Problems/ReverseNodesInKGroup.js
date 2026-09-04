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
    
    printList(dummy);
    
    while(true)
    {
        let kthNode = getKthNode(groupPrev, k);
        if(!kthNode) // outside group
        {
            break;
        }

        let groupNext = kthNode.next; // one node right after the group

        //reverse the group
        let prev = kthNode.next;
        let curr = groupPrev.next;

        console.log('--Before--');
        console.log('groupprev ',groupPrev?.val);
        console.log('groupprev.next ', groupPrev.next?.val);
        console.log('---------');
        
        while(curr !== groupNext)
        {   
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
    
        let temp = groupPrev.next; // Now this is end of previous group.
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
