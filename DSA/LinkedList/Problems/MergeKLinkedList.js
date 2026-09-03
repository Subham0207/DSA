class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergelist(l1,l2)
{
    let dummy = new ListNode();
    let tail = dummy;

    while(l1 && l2)
    {
        if(l1.val < l2.val)
        {
            tail.next = l1;
            l1 = l1.next;
        }
        else
        {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next; // Note: Ensure tail advances on each turn
    }

    if(l1)
    {
        tail.next = l1;
    }
    else if(l2)
    {
        tail.next = l2;
    }

    return dummy.next;
}

function mergeKLL(lists){

    if (!lists || lists.length === 0) return null;

    while(lists.length > 1) // until there is one list left
    {
        let mergedList = [];

        for(let i=0;i<lists.length;i+=2) // merging two separate pairs
        {
            let l1 = lists[i]
            let l2 = i+1 < lists.length ? lists[i + 1]: null;
            mergedList.push(mergelist(l1,l2));
        }

        lists = mergedList;
    }
    
    return lists[0];
}

let lists = [
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(5))),
    new ListNode(3, new ListNode(6)),
]

let node = mergeKLL(lists);

let res = '';
while(node)
{
    res += node.val + '->';
    node = node.next;
}

console.log(res);