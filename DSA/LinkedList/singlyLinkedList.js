// Operations
// 1. Inserting
// 2. traversing

class Node{
    constructor(value, next)
    {
        this.value = value;
        this.nextNode = next;   
    }
}

class LinkedList{
    constructor()
    {
        this.StartNode = null;
    }

    Add(value)
    {
        const node = new Node(value, null);
        if(!this.StartNode)
        {
            this.StartNode = node;
        }
        else
        {
            // 4->
            // 
            let nextNode = this.StartNode;
            while(nextNode.nextNode)
            {
                nextNode = nextNode.nextNode;
            }

            nextNode.nextNode = node;
        }
    }

    print()
    {
        let nextNode = this.StartNode;
        let str = '';
        while(nextNode)
        {
            str += `${nextNode.value}->`;
            nextNode = nextNode.nextNode;
        }

        console.log(str)
    }
}


const ll = new LinkedList();
ll.Add(4);
ll.Add(2);
ll.Add(5);

ll.print();