//Struggled: Yes

var topKFrequent = function(nums, k) {
    map = {}
    for( let num of nums)
    {
        if(map[num])
            map[num]+=1;
        else
            map[num]=1;
    }

    const values = Object.entries(map).sort((a,b)=> b[1]- a[1]);
    const result = []
    for(let i =0;i<k;i++)
    {
        result.push(values[i][0]);
    }

    return result;
};

const result = topKFrequent([1,2,1,2,1,2,3,1,3,2], 2);
console.log("Result: ", result);