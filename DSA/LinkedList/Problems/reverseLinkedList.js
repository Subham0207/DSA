class Node{
    constructor(value, next)
    {
        this.value = value;
        this.next = next;   
    }
}

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    
    while(curr)
    {
        let temp = curr.next;

        curr.next = prev;

        prev = curr;
        curr = temp;
    }
    // return prev since it will have reached the tail so, is head in reversed linkedlist.
    return prev;
};


const ll = new Node(4, new Node(5 , new Node(2, null)))

const result = reverseList(ll);
console.log("Result: ", result);
