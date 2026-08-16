class Interval{
    constructor(start, end)
    {
        this.start = start;
        this.end = end;
    }
}

function canAttendMeetings(intervals) {
    let starts = intervals.map( i => i.start).sort((a,b) =>a - b);
    let ends = intervals.map(i => i.end).sort((a,b) => a -b);

    let count = 0;
    let endPtr = 0;
    for(let startPtr=0;startPtr<starts.length;startPtr++)
    {
        if(starts[startPtr] < ends[endPtr])
        {
            count++;
        }
        else
        {
            endPtr++
        }
    }

    return count;
}

console.log(canAttendMeetings([new Interval(0,40),new Interval(5,10),new Interval(15,20)]));