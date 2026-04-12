var groupAnagrams = function(strs) {
    function countKeys(str)
    {
        const arr = new Array(26).fill(0);
        for(let c of str)
        {
            arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] +=1;
        }

        return JSON.stringify(arr);
    }

    const map = {};
    for(let str of strs)
    {
        const key = countKeys(str);
        if(map[key])
        {
            map[key].push(str);
        }
        else
        {
            map[key] = [str];
        }
    }

    const values = []
    for( let [_, value] of Object.entries(map))
    {
        values.push(value);
    }

    return values;
};