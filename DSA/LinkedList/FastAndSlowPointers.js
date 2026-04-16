// Operations
// 1. Inserting
// 2. traversing

class Node{
    constructor(value, next)
    {
        this.value = value;
        this.next = next;   
    }
}

const node1 = new Node(4,null);
const node2 = new Node(5,null);
const node3 = new Node(3,null);
const node4 = new Node(3,null);
const node5 = new Node(3,null);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2;


//detect cycle starting from node 1

let fast = node1;
let slow = node1;

let cycleFound = false;

while(fast && fast.next)
{
    fast = fast.next.next

    slow = slow.next;

    if(fast === slow)
    {
        cycleFound = true;
        break;
    }
}

console.log("Cycle found: ", cycleFound);