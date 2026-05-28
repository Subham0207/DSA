class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = "";
        let resLen = 0;
        for(let i = 0; i < s.length; i++)
        {
            let l = i;
            let r = i;

            //odd length string
            while(l >= 0 && r < s.length && s[l] === s[r])
            {
                const currLength = r - l + 1;
                if(currLength > resLen)
                {
                    res = s.slice(l,r+1);
                    resLen = currLength;
                }

                l--;
                r++;
            }

            l = i;
            r = i+1;

            // Even length string
            while(l >= 0 && r < s.length && s[l] === s[r])
            {
                const currLength = r - l + 1;
                if(currLength > resLen)
                {
                    res = s.slice(l,r+1);
                    resLen = currLength;
                }

                l--;
                r++
            }
        }

        return res;
    }
}
