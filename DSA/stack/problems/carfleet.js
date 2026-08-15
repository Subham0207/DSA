function carFleet(target, position, speed)
{
    // car fleet sorted in dsc order by position.
    // so we can calculate if a faster car intersects a slower car, becoming a fleet.
    const cars = position.map((pos,i)=> [pos, speed[i]]).sort((a,b)=> b[0] - a[0]);

    let stack = [];
    for(let [pos, spd] of cars)
    {
        let time = (target - pos) / spd;
        stack.push(time);

        // time taken by car ahead <= time taken by car behind, that means the behind car catches up to front car.
        // after pop car - 2 is in stack which forms 1 fleet including car -1.
        if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2])
            stack.pop(); // after pop car - 2 is in stack which forms 1 fleet 
    
        return stack.length;

    }
}

console.log(carFleet(10, [1,4], [3,2]));