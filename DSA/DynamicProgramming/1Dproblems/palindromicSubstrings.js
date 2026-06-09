class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
        for(let i = 0;i < s.length;i++)
        {
            //odd length palindrome
            let l = i;
            let r = i;

            while(l >=0 && r < s.length && s[l] === s[r])
            {
                count++;
                l--;
                r++;
            }
            
            //Even length palindrome; character l and r matches.
            l = i;
            r = i + 1;
            while(l >=0 && r < s.length && s[l] === s[r])
            {
                count++;
                l--;
                r++;

            }
        }

        return count;
    }
}
