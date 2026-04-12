function fourSum(array, target)
{
	array.sort((a,b)=> a - b);
	const res = [];
	const quad = [];

	function kSum(k, start, target) {
        // Base Case: Use two pointers for 2-Sum
        if (k === 2) {
            console.log("2 Sum Found...Starting...")
            let l = start;
            let r = array.length - 1;

            while (l < r) {
                const sum = array[l] + array[r];
                console.log(`(${l},${r})`,"sum: ", sum, " sum < target: ", sum < target);
                if (sum < target) {
                    console.log("increament l");
                    l++;
                } else if (sum > target) {
                    console.log("decreament r");
                    r--;
                } else {
                    res.push([...quad, array[l], array[r]]);
                    console.log("Res: ", res);

                    //Done with currently used number so moving to next...
                    l++;
                    //Don't report duplicate answers
                    //go on and stop when you a non repeating number.
                    while (l < r && array[l] === array[l - 1]) {
                        l++;
                    }
                }

                console.log("l < r: ", l < r);
            }
            return;
        }
        
        for (let i = start; i < array.length; i++) {
            //start checking from 1st index current number same as previous number skip it.
            if (i > start && array[i] === array[i - 1]) {
                continue;
            }
            
            quad.push(array[i]);
            console.log("quad: ", quad, " kSum:", k - 1, " start:", i + 1, " target: ", target - array[i]);
            kSum(k - 1, i + 1, target - array[i]);
            quad.pop();
        }
    }

	kSum(4, 0, target);
	return res;
}

const res = fourSum([7,6,4,-1,1,2], 16);
console.log(res);