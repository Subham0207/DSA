

function countOverlappingPairs(intervals) {
    const n = intervals.length;

    const starts = intervals
        .map(interval => interval[0])
        .sort((a, b) => a - b);

    const ends = intervals
        .map(interval => interval[1])
        .sort((a, b) => a - b);

    let j = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {

        // Remove intervals that ended before
        // the current interval starts.
        while (j < n && ends[j] < starts[i]) {
            j++;
        }

        // Count previously started intervals
        // that are still active.
        count += i - j;
    }

    return count;
}


console.log(countOverlappingPairs([[1,2],[2,3],[3,4]]));
console.log(countOverlappingPairs([[1,5],[2,4],[3,6]]));
console.log(countOverlappingPairs([[1,2],[3,4],[5,6]]));
console.log(countOverlappingPairs([[36,39],[49,52],[20,93]]));
