// Solution
// After each iteration of j; 1 more last item (i.e. dsc order) gets sorted in its correct place.

function bubbleSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        // -1 prevents arr[j + 1] from going past the array.
        // -i avoids checking elements at the end that have already been sorted.
        for(let j=0;j<arr.length - 1 - i;j++)
        {
            if(arr[j] > arr[j+1])
            {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }

    return arr;
}

console.log(bubbleSort([5,4,3,2,1]))