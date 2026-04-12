function isAnagram(s, t) {
    function characterCountMap(s)
    {
        const map1 = {}
        for(let c of s)
        {
            if(!map1[c])
            {
                map1[c] = 1;
            }
            else{
                map1[c]+=1;
            }
        }
        return map1;
    }

    const map1 = characterCountMap(s);
    const map2 = characterCountMap(t);

    for(let [key,val] of Object.entries(map1))
    {
        if(!(map2[key] && map2[key] === val)) 
            return false;
    }
    return true;
}

const result = isAnagram("racecar", "carrace")
const result2 = isAnagram("jar", "jam")
console.log("Result: ", result);
console.log("Result2: ", result2);