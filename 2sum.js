function twoSum(array, target)
{
    //sort the array in ascending order
	array.sort((a,b)=> a - b);
	const res = [];

    let l = 0;
    let r = array.length - 1;

    while (l < r) {
        const sum = array[l] + array[r];
        // if sum < target look at a larger number so move l to next position.
        // Since we know array is sorted.
        // In same way, if sum > target look at a smaller number for r so move r backwards.
        // else we have our case
        if (sum < target) {
            l++;
        } else if (sum > target) {
            r--;
        } else {
            res.push([array[l], array[r]]);
            
            //look at other position now.
            l++;
            r--;

            // handling duplicates. if previous and current are equal move l to next position.
            //same case for r
            while (l < r && array[l] === array[l - 1]) {
                l++;
            }
            while (l < r && array[r] === array[r + 1]) {
                r--;
            }
        }
    }
    
	return res;
}

const res = twoSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163);
console.log(res);