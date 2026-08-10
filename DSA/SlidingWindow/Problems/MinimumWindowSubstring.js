// Solution:
// using have and need count. And tCount and sCount map.
// need tracks no of unique characters.

function maxWindowSubString(s,t)
{
    let tCount = {};
    for(let char of t)
    {
        tCount[char] = (tCount[char] || 0) + 1;
    }
    let need = Object.keys(tCount).length;
    let have = 0;
    let sCount = {};
    let l = 0;
    let minLength = Infinity;
    let res = "";
    for(let r=0;r<s.length;r++)
    {
        let char = s[r];
        sCount[char] = (sCount[char] || 0) + 1;

        if(tCount[char] !== undefined && sCount[char] === tCount[char])
        {
            have++;
        }

        while(have === need)
        {
            let len = r - l + 1;
            if(len < minLength)
            {
                minLength = len;
                res = s.slice(l,r+1);
            }

            let charL = s[l];
            sCount[charL]--;
            if(tCount[charL] !== undefined  && sCount[charL] < tCount[charL])
            {
                have--;
            }
            l++;
        }
    }
    return res;
}

console.log('Output: ', maxWindowSubString('OUZODYXAZV', 'XYZ'));