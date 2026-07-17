class Heap
{
    constructor(type = 'min')
    {
        this.data = [];
        this.compare = type === 'max' ? (a,b) => a > b: (a,b) => a < b; // parent, child
    }

    getLeftChild(i){return 2 * i + 1;}
    getRightChild(i){return 2 * i + 2;}
    getParentIndex(i){return Math.floor((i-1)/2);}

    swap(i1,i2)
    {
        [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
    }

    peek()
    {
        return this.data.length > 0 ? this.data[0]: null;
    }

    size()
    {
        return this.data.length;
    }

    // Add an element to heap
    // - add element to last
    // - heapify up
    heappush(value)
    {
        this.data.push(value);
        this.heapifyUp();
    }

    // Removes and returns element at 0th index.
    // - store the 0th index element
    // - assign last element to 0th index
    // - heapify down
    // - return the element
    heappop()
    {
        if(this.data.length === 0) return null;
        if(this.data.length === 1) return this.data.pop();

        const root = this.data[0]; // take the 0th index value
        this.data[0] = this.data.pop(); // assigne last element to 0th index;
        this.heapifyDown(0);
        return root;

    }

    // iterative approach
    // - start from last index as current index.
    // - if current index and parent index don't satisfy heap property, swap them.
    // - make parent as current index and repeat.
    heapifyUp()
    {
        let index = this.data.length -1;
        while(index > 0)
        {
            let parentIndex = this.getParentIndex(index);
            if(this.compare(this.data[parentIndex], this.data[index])) break;

            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    // recurssive approach
    // - start from 0th index as current index
    // - if left child and current index voilates heap property. It is the next target.
    // - if right child and current index vailates heap property. It is the next target.
    // - swap current index and target index
    // - make target index as current index and repeat.
    heapifyDown(index)
    {
        let targetIndex = index;
        const length = this.data.length;
        const left = this.getLeftChild(index);
        const right = this.getRightChild(index);

        if(left < length && this.compare(this.data[left], this.data[targetIndex])) //left and parent comparision
        {
            targetIndex = left;
        }

        if(right < length && this.compare(this.data[right], this.data[targetIndex]))
        {
            targetIndex = right;
        }

        if(targetIndex !== index)
        {
            this.swap(index, targetIndex);
            this.heapfiyDown(targetIndex);
        }
    }

}