const nums = [1, 2, 3];
const res = [];
const used = new Array(nums.length).fill(false); // Our "memory"

function backtrack(currentPerm) {
    if(currentPerm.length === nums.length)
    {
        res.push([...currentPerm]);
        return;
    }
    
    for(let i = 0;i<nums.length;i++)
    {
        if(used[i]) continue;

        currentPerm.push(nums[i]);
        used[i] = true;
        backtrack(currentPerm);

        currentPerm.pop(nums[i]);
        used[i] = false;
    }
}

backtrack([]);
console.log(res);