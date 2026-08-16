class Interval{
    constructor(start, end)
    {
        this.start = start;
        this.end = end;
    }
}

function canAttendMeetings(intervals) {
    intervals.sort((a,b) => a.end - b.end);
    let res = [];
    for(let i=0;i<intervals.length;i++)
    {
        if(res.length === 0 || res[res.length - 1].end <= intervals[i].start)
        {
            res.push(intervals[i]);
        }
        else
        {
            return false;
        }
    }
    return true;
}

console.log(canAttendMeetings([new Interval(0,30),new Interval(5,10),new Interval(15,20)]));
console.log(canAttendMeetings([new Interval(5,8),new Interval(9,15)]));
console.log(canAttendMeetings([new Interval(0,8),new Interval(8,10)]));