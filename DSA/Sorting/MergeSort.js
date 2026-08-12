function merge(left, right)
{
    let result = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length)
    {
        if(left[i] < right[j])
        {
            result.push(left[i]);
            i++;
        }
        else
        {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
    // return [...result, ...left.slice(i), ...right.slice(j)];
}

function mergeSort(arr)
{
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

// SOLID - single responsibility, Open and close ,Liskov substituion, Interface segratatoin, Dependency inversion,

console.log(mergeSort([5,4,3,2,1]));


// Complexity analysis: Worst case time complexity
// Say our array size is 8; How many times can we divide 8 by 2 before reaching 1? = 3 times; i.e. Log(8) = 3;
// Number of levels = log n
// Work per level = n -- there are n elements at every level.
// So, worst case time complexity becomes nlogn