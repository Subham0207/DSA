// unbounded napsack: multiple occurences of same item is possible.

const weight = [1, 50];
const value =  [1, 30];
const w = 100;


function unboundedKnapsack(w,n)
{
    if( w===0 || n < 0)
    {
        return 0;
    }

    if(weight[n] <= w)
    {
        return Math.max(value[n] + unboundedKnapsack(w-weight[n], n), unboundedKnapsack(w,n-1));
    }
    else if(weight[n] > w)
    {
        return unboundedKnapsack(w,n-1);
    }
}

console.log(unboundedKnapsack(w, weight.length - 1));