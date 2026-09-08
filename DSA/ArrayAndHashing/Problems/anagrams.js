// Solutions 1: create two hashmaps and compare them
// Solutoin  2: create one hashmap from first string and decrement key values while looping through second string.
// Solution 3: Sort both strings, And then equality comparision

function isAnagram(s, t) {
    if(s.length !== t.length) return false;

    let sMap = {};
    for(let c of s)
    {
        sMap[c] = (sMap[c] || 0) + 1;
    }

    for(let c of t)
    {
        sMap[c]--;
    }

    for(let key in sMap)
    {
        if(sMap[key] > 0) return false;
    }

    return true;
}

const result = isAnagram("racecar", "carrace")
const result2 = isAnagram("jar", "jam")
console.log("Result: ", result);
console.log("Result2: ", result2);