const nums = [1, 2, 3];
const res = [];
const used = new Array(nums.length).fill(false); // Our "memory"

function backtrack(currentPerm) {
    // Base Case: If the current permutation is full size
    if (currentPerm.length === nums.length) {
        res.push([...currentPerm]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        // Skip if we already used this number in the current branch
        if (used[i]) continue;

        // 1. Choose
        used[i] = true;
        currentPerm.push(nums[i]);

        // 2. Explore
        backtrack(currentPerm);

        // 3. Backtrack (The Undo)
        currentPerm.pop();
        used[i] = false;
    }
}

backtrack([]);
console.log(res);