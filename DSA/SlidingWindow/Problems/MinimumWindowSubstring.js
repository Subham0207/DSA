function maxWindowSubString(s,t)
{
    function matches(map1,map2)
    {
        for(let key in map1)
        {
            if((map2[key] || 0) < map1[key]) return false;
        }

        return true;
    }

    let tCount = {};
    for(let char of t)
    {
        tCount[char] = (tCount[char] || 0) + 1;
    }

    let l =0;
    let sCount = {};
    let minLength = Infinity;
    let res = "";
    for(let r=0;r<s.length;r++)
    {
        sCount[s[r]] = (sCount[s[r]] || 0) + 1;

        // shrink the window until matches since we need the minimum length
        while(matches(tCount, sCount))
        {
            let len = r - l + 1;
            if(len < minLength)
            {
                minLength = len;
                res = s.slice(l,r+1);
            }
            sCount[s[l]]--;
            l++;
        }        
    }

    return res;
}

console.log('Output: ', maxWindowSubString('OUZODYXAZV', 'XYZ'));