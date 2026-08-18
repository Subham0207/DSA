// Using Hashmap and LinkedList
// Hashmap: key -> node, finding an item is O(1)
// Doubly linked List: head, tail.
// Get or Put on any node makes it Most recently used.

class Node
{
    constructor(key,value)
    {
        this.key = key;
        this.val = value;

        this.prev = null;
        this.next = null;
    }
}

class LRU
{
    constructor(capacity)
    {
        this.head = new Node(0,0);
        this.tail = new Node(0,0);
        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.map = new Map();
        this.capacity = capacity;
    }

    //remove a node
    remove(node)
    {
        // prevNode <-> node <-> nextNode;
        // prevNode <-> nextNode;

        const prevNode = node.prev;
        const nextNode = node.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    //insert at front
    insertAtFront(node)
    {
        // this.head <-> firstNode
        // this.head <-> node <-> firstNode
        const firstNode = this.head.next;

        this.head.next = node;
        node.prev = this.head;

        node.next = firstNode;
        firstNode.prev = node;
    }

    // returns {number}
    get(key)
    {
        if(!this.map.has(key)) return -1;

        let node = this.map.get(key);

        this.remove(node);
        this.insertAtFront(node);

        return node.val;
    }

    put(key,value)
    {
        //case 1 key present
        if(this.map.has(key))
        {
            let node = this.map.get(key);
            node.val = value;

            this.remove(node);
            this.insertAtFront(node);

            return;
        }

        //case 2 key not present
        const node = new Node(key,value);
        this.map.set(key, node);

        this.insertAtFront(node);
        
        // case 2 check capacity
        if(this.map.size > this.capacity)
        {
            const lru = this.tail.prev;
            this.remove(lru);
            this.map.delete(lru.key)
        }
    }
}