function insertInterval(intervals, newInterval)
{
    let res = [];
    for(let i =0;i<intervals.length;i++)
    {
        // The three if conditions
        // 1. discover where new interval belongs,
        // 2. copy intervals that are definitely before new interval, or
        // 3. merge overlapping intervals into new interval.
        if(newInterval[1] < intervals[i][0]) // newinterval_end then start_interval[i]
        {
            // example - intervals = [[1,1], [5,7], [9,12]] and newInterval = [2,3]
            // at i = 1, newinterval then intervals[1]
            // intervals are sorted so newinterval also comes before rest of the intervals.
            res.push(newInterval);
            return res.concat(intervals.slice(i)); // [newinterval, interval[i], interval[i+1],...]
        }
        else if(intervals[i][1] < newInterval[0]) // interval[i] then newinterval
        {
            // example - intervals = [[1,2], [4,6], [8,10]] and newInterval = [5,9]
            // at i = 0, intervals[0] then newinterval so we push [1,2] to res
            res.push(intervals[i]);
            // we don't insert new interval yet, because maybe it overlaps something later.
        }
        else
        {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
        }
    }

    // Note this is the case when newInterval has not found its place. i.e. it did not come before any interval.
    // so it belongs to the end
    res.push(newInterval);

    return res;
}

console.log(insertInterval([[1,3],[4,6]], [2,5]))