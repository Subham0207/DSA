// 1. check gas needs to be enough to cover the total cost
// 2. diff[i] = gas[i] - cost[i]
// 3. Loop on diff: total += diff[i]
// 4. if total < 0 we ran out of gas after i; reset total = 0, set start to next index.
// 5. if we reach the end of the arr and there is enough gas to cover the cost ( from condition 1), we can make a loop.
function GasStation(gas, cost)
{
    let gasTotal = gas.reduce((total,val)=>total+=val,0);
    let costTotal = cost.reduce((total,val)=>total+=val,0);

    if(gasTotal < costTotal)
        return -1;

    // now we know total gas >= total cost

    let total = 0;
    let start = 0;

    for(let i=0;i<gas.length;i++)
    {
        total += gas[i] - cost[i];
        if(total < 0)
        {
            total = 0;
            start = i + 1; 
        }
    }

    return start;
}

console.log(GasStation([1,2,3,4], [2,2,4,1]));