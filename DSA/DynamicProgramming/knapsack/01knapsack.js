// 7 questions on 0-1 knapsack
// 4 questions on unbounded knapsack

//Given items weight and value.
// put the items in the page of weight such that 
// the value is maximized.
const weight = [4, 5, 1];
const value =  [1, 2, 3];
const w = 4;


function knapsack(w, n)
{
    if( n === 0 || w === 0)
    {
        return 0;
    }

    if(weight[n] < w)
    {
        //we can include this or not. We need the value to be maximized. ( what is max by includeing this or not)
        // note since we don't process this item again we do n - 1.
        return Math.max(value[n] + knapsack(w - weight[n], n-1), knapsack(w, n-1));
    }
    else if(weight[n] > w)
    {
        return knapsack(w, n-1);
    }
}

console.log(knapsack(w, weight.length-1));