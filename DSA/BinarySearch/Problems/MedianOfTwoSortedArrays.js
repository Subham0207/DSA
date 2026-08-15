function MedianOfTwoSortedArrays(arr1, arr2)
{
    let i = 0;
    let j = 0;
    let res = [];
    while( i <= arr1.length - 1 && j <= arr2.length - 1)
    {
        if(arr1[i] < arr2[j])
        {
            res.push(arr1[i]);
            i++;
        }
        else
        {
            res.push(arr2[j]);
            j++
        }
    }

    res = res.concat(arr1.slice(i)).concat(arr2.slice(j));

    let mid = Math.floor((res.length - 1)/2);
    if(res.length % 2 !== 0)
        return res[mid];
    else
        return (res[mid - 1] + res[mid])/2
}


console.log(MedianOfTwoSortedArrays([1,2],[3]));
