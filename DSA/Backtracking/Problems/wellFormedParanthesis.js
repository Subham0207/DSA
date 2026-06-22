class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const stack = [];
        const result = [];

        function backtrack(open, closed)
        {
            if( open === n && closed === n)
            {
                result.push(stack.join(""));
                return;
            }

            if(open < n)
            {
                stack.push("(");
                backtrack(open+1, closed);
                stack.pop();
            }
            if(open > closed)
            {
                stack.push(")");
                backtrack(open, closed+1);
                stack.pop();
            }
        }

        backtrack(0,0);
        return result;
    }
}
