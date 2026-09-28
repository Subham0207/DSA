// param: schedulenumber[][][]
function employeeFreeTime(schedule)
{
    let flattened = [];
    for(let intervals of schedule)
    {
        for(let interval of intervals)
        {
            flattened.push(interval);
        }
    }

    flattened.sort((a,b) => a[0] - b[0]); // sort by start time to calculate overlapping intervals. 

    let merged = [];
    for(let i=0;i<flattened.length;i++)
    {
        if(merged.length === 0 || merged[merged.length - 1][1] < flattened[i][0])
        {
            merged.push(flattened[i]);
        }
        else
        {
            merged[merged.length -1][1] = Math.max(merged[merged.length -1][1], flattened[i][1]);
        }
    }

    let freeTimes = [];
    for(let i=1;i<merged.length;i++)
    {
        let start = merged[i-1][1];
        let end = merged[i][0];

        if(start < end)
        {
            freeTimes.push([start,end]);
        }
    }

    return freeTimes;
}

console.log(employeeFreeTime([[[1,2],[5,6],[1,3],[4,10]]]));