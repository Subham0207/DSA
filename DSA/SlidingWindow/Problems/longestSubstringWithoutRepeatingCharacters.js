function longestSubStringWithoutRepeatingCharacters(s)
{
    let l = 0;
    const count = {};
    let maxLength = 0;
    for(let r=0;r<s.length;r++)
    {
        if(!(s[r] in count)) count[s[r]] = 0;
        count[s[r]]++;

        while(count[s[r]] > 1)
        {
            count[s[l]]--;
            l++;
        }

        maxLength = Math.max(maxLength, r-l+1);
    }

    return maxLength;
}

console.log(longestSubStringWithoutRepeatingCharacters('zxyzxyz'));