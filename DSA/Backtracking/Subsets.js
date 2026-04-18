//create unique subets from a given array.

const nums = [1,2,3];
const res = [];
const subset = [];

function dfs(i)
{
    console.log(`Subset ${i}: `, subset);
    //Doing subset pop and then coming here with [1] and i as 4.
    // is how [1] gets added to result.
    if(i >= nums.length)
    {
        res.push([...subset]);
        return;
    }

    subset.push(nums[i]);
    dfs(i + 1);

    //Backtrack: undo the last choice.
    subset.pop();
    dfs(i + 1);
}

dfs(0);
console.log(res);