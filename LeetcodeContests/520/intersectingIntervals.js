// finding and returning every overlapping pair requires O(n²) time in the worst case, simply because there can be O(n²) pairs to return.

function fun(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    const [start1, end1] = intervals[i];

    for (let j = i + 1; j < intervals.length; j++) {
      const [start2, end2] = intervals[j];

      if (start2 > end1) {
        break;
      }

      result.push([intervals[i], intervals[j]]);
    }
  }

  return result.length;
};


console.log(fun([[1,2],[2,3],[3,4]]));
console.log(fun([[1,5],[2,4],[3,6]]));
console.log(fun([[1,2],[3,4],[5,6]]));
