// Question: if s1 exists in a permutations of s2.

// solution: fixed sliding window length of s1.length in s2. 
// if the characters match in s1 and s2 we have our ans.

function matches(map1,map2)
{
    for(let key in map1)
    {
        if(map2[key] !== map1[key]) return false;
    }
    return true;
}

function PermuatationOfString(s1,s2)
{
    let s1Count = {};
    for(let char of s1)
    {
        s1Count[char] = (s1Count[char] || 0) + 1;
    }

    let s2Count = {};
    let l = 0;
    for(let r=0;r<s2.length;r++)
    {
        s2Count[s2[r]] = (s2Count[s2[r]] || 0) + 1;

        if(r-l+1 > s1.length)
        {
            s2Count[s2[l]]--;
            if(s2Count[s2[l]] === 0) // this for matches to work.
            {
                delete s2Count[s2[l]];
            }
            l++;
        }

        if(r-l+1 === s1.length && matches(s1Count, s2Count))
            return true;
    }

    return false;
}

console.log(PermuatationOfString('abc', 'lecabee'));
console.log(PermuatationOfString('abc', 'lecaabee'));