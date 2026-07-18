// Solution:
// Frequency Map: Count frequencies of each task and store them in an array/heap.
// Cycle Window (n + 1): Process tasks in chunks of size n + 1 (the task slot + its n cooldown slots).
// Simulate Cooldown: Pull the highest frequency tasks out one by one, decrement them, and put them in a temp array. This makes them "invisible" for the rest of the current cycle.
// Time Calculation: Push valid temp tasks back and re-sort.
//  - If the heap is not empty: Add full cycle time (accounts for tasks + forced idles).
//  - If the heap is empty: Add only tasksExecuted (we are done; no trailing idles needed).

function taskSchedular(tasks, n)
{
    let frequency = new Array(26).fill(0);
    tasks.forEach(task => frequency[task.charCodeAt(0) - 'A'.charCodeAt(0)]++);
    let maxHeap = frequency.filter( x=> x>0).sort((a,b)=>b-a);
    let totalTime = 0;

    while(maxHeap.length > 0)
    {
        let cycle = n + 1;
        let temp = [];
        let taskExecuted = 0;
        for(let i =0;i<cycle;i++)
        {
            if(maxHeap.length > 0)
            {
                const task = maxHeap.shift();
                task - 1 > 0 && temp.push(task - 1);
                taskExecuted++;
            }
        }

        if(temp.length > 0)
        {
            temp.forEach(task => 
                maxHeap.push(task)
            )
        }

        maxHeap.sort((a,b)=>b-a);

        totalTime += maxHeap.length > 0 ? cycle: taskExecuted;
    }

    return totalTime;

}

console.log('Answer: ', taskSchedular(["X","X","Y","Y"], 2))