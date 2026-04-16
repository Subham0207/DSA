// Operations
// 1. Insertion
// 2. tranversal


class Node
{
    constructor(value, prev, next)
    {
        this.value = value;
        this.prevNode = prev;
        this.nextNode = next;
    }
}

class DoublyLinkedlist
{
    constructor()
    {
        this.startNode = null;
    }

    Add(value)
    {
        if(this.startNode)
        {
            let nextNode = this.startNode;
            while(nextNode.nextNode)
            {
                nextNode = nextNode.nextNode;
            }
            nextNode.nextNode = new Node(value, nextNode, undefined);
        }
        else
        {
            this.startNode = new Node(value, undefined, undefined);
        }
    }

    printReverse()
    {
        // Go to last node
        let nextNode = this.startNode;
        while(nextNode.nextNode)
        {
            nextNode = nextNode.nextNode;
            console.log("DEBUG: ", nextNode.value , nextNode.prevNode, nextNode.nextNode);
        }

        let str = '';
        let prevNode = nextNode;
        while(prevNode.prevNode)
        {
            str += `${prevNode.value}->`;
            prevNode = prevNode.prevNode;
        }

        console.log("doubly linked list: ", str);
    }
}


const dl = new DoublyLinkedlist();
dl.Add(4)
dl.Add(5)
dl.Add(51)
dl.Add(510)

dl.printReverse();