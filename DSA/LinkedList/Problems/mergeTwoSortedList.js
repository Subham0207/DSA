class Node{
    constructor(value, next)
    {
        this.value = value;
        this.next = next;
    }
}

var mergeTwoLists = function(list1, list2) {
    let p1 = list1;
    let p2 = list2;

    let outputs = new Node();
    let tail = outputs;

    while(p1 && p2)
    {
        if(p1.value < p2.value)
        {
            tail.next = p1;
            p1 = p1.next;
        }
        else
        {
            tail.next = p2;
            p2 = p2.next;
        }
        tail = tail.next;
    }

    if(p1)
    {
        tail.next = p1;
    }
    else if(p2)
    {
        tail.next = p2;
    }

    return outputs.next;
};

const list1 = new Node(1, new Node(2, new Node(4, null)));
const list2 = new Node(1, new Node(3, new Node(4, null)));

const result = mergeTwoLists(list1, list2);
console.log("Result: ", JSON.stringify(result));