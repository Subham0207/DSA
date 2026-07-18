// Optimal solution: Two Heap
// minHeap and maxHeap
// function add num:
// 1. push to minHeap
// 2. if minHeap[0] > maxHeap[0]; pop from min and push into maxHeap
// 3. diff b/w minHeap and maxHeap length more than 1 pop from larger and push into smaller one.
// find median
// 1. which ever heap is large only pop that and return
// 2. if heaps are of equal size return avg of both pops

function minHeapPush(heap, num)
{
    heap.push(num);
    heap.sort((a,b)=>a-b);
}

function maxHeapPush(heap, num)
{
    heap.push(num);
    heap.sort((a,b)=>b-a);
}

class MedianFinder{
    constructor()
    {
        this.minHeap = [];
        this.maxHeap = [];
    }

    addNum(num)
    {   
        minHeapPush(this.minHeap, num);

        if(this.minHeap[0] > this.maxHeap[0])
        {
            let val = this.minHeap.shift(); // min heap pop
            maxHeapPush(this.maxHeap, val);
        }

        if(this.minHeap.length > this.maxHeap.length + 1)
        {
            let val = this.minHeap.shift();
            maxHeapPush(this.maxHeap, val);
        }

        if(this.maxHeap.length > this.minHeap.length + 1)
        {
            let val = this.maxHeap.shift();
            minHeapPush(this.minHeap, val);
        }

        console.log('MIN_HEAP', this.minHeap);
        console.log('MAX_HEAP', this.maxHeap);
    }

    findMedian()
    {
        if(this.minHeap.length > this.maxHeap.length)
            return this.minHeap[0];
        if(this.maxHeap.length > this.minHeap.length)
            return this.maxHeap[0];
        return (this.minHeap[0] + this.maxHeap[0])/2
    }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(1);
console.log(medianFinder.findMedian());
medianFinder.addNum(3);
console.log(medianFinder.findMedian());
medianFinder.addNum(2);
console.log(medianFinder.findMedian());