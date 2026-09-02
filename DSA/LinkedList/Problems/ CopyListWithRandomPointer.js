// Question: clone a linked list.

// Solution:
// 1. Use hashmap

class Node {
  constructor(val, next = null, random = null) {
      this.val = val;
      this.next = next;
      this.random = random;
  }
}

function CopyListWithRandomPointer(head)
{
    let curr = head;
    let oldToCopy = new Map();
    oldToCopy.set(null, null);

    while(curr)
    {
        oldToCopy.set(curr, new Node(curr.val));
        curr = curr.next;
    }

    curr = head;
    while(curr)
    {
        let copy = oldToCopy.get(curr);
        copy.next = oldToCopy.get(curr.next); // {curr.next: node}
        copy.random = oldToCopy.get(curr.random); // {curr.random: node}
        curr = curr.next;
    }

    return oldToCopy.get(head);
}