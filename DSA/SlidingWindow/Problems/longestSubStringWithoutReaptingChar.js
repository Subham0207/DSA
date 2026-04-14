function longestSubString(s)
{
    const strSet = new Set();
    let l = 0;
    let best = 0;

    for (let r = 0; r < s.length-1; r++) {

        while(strSet.has(s[r]))
        {
            strSet.delete(s[l]);
            l++;
        }
        strSet.add(s[r]);
        best = Math.max(best, r - l + 1); // Add 1 since at index 0 length is still 1.
    }

    return best;
}


const result = longestSubString("abcabcbb");
console.log("Result: ", result);