function findKthLargest(nums, k) {
    let minHeap = [];
    function getLeftChildIndex(i) {return 2 * i + 1; }
    function getRightChildIndex(i) {return 2 * i + 2; }
    function getParentIndex(i) {return Math.floor((i -1)/2); }
    // start from last element as current
    // if current and parent break heap swap them
    // make parent current and repeat
    function heapifyUp()
    {
        let index = minHeap.length -1;
        while(index > 0)
        {
            let parentIndex = getParentIndex(index);
            if(minHeap[parentIndex] < minHeap[index]) break

            [minHeap[parentIndex], minHeap[index]] = [minHeap[index], minHeap[parentIndex]];
            index = parentIndex;
        }
    }
    function heapifyDown(index)
    {
        let target = index;
        let leftChild = getLeftChildIndex(index);
        let rightChild = getRightChildIndex(index);
        if(minHeap[target] > minHeap[leftChild])
            target = leftChild;
        if(minHeap[target] > minHeap[rightChild])
            target = rightChild;
        
        if(index !== target)
        {
            [minHeap[index], minHeap[target]] = [minHeap[target], minHeap[index]];
            heapifyDown(target)
        }
        
    }
    function push(n)
    {
        minHeap.push(n);
        heapifyUp();
        if(minHeap.length > k)
            pop();
    }
    function pop()
    {
        if (minHeap.length === 0) return;

        const lastElement = minHeap.pop();

        if (minHeap.length === 0) return;

        minHeap[0] = lastElement;
        heapifyDown(0);
    }
    for(let num of nums)
    {
        push(num);
        console.log(minHeap)
    }

    return minHeap[0];
}

// in a min heap of size k; 
// the kth largest element would be at index 0, 
// since kth index is the largest element
console.log("Answer: ", findKthLargest([2,3,1,5,4], 2));