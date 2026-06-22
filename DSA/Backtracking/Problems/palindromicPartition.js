class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const partition = [];
        const result = [];
        function isPalindrome(s,l,r)
        {
            while(r > l)
            {
                if(s[l] !== s[r])
                    return false;
                l++;
                r--;
            }
            return true;
        }
        function backtrack(i)
        {
            if(i === s.length)
            {
                result.push([...partition]);
                return;
            }

            for(let j = i;j<s.length;j++)
            {
                if(isPalindrome(s,i,j))
                {
                    partition.push(s.slice(i,j+1));
                    backtrack(j+1);
                    partition.pop();
                }
            }
        }

        backtrack(0);
        return result;
    }
}
