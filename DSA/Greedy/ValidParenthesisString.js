function ValidParenthesisString(s)
{
    let [leftMin, leftMax] = [0,0];
    for(let c of s)
    {
        if(c === '(')
        {
            leftMin++;
            leftMax++;
        }
        else if (c === ')')
        {
            leftMin--;
            leftMax--;
        }
        else
        {
            leftMin--;
            leftMax++;
        }

        if(leftMax < 0)
            return false;
        if(leftMin < 0) // s (*)( -- this string returns false
            leftMin = 0;
    }
    return leftMin === 0;
}

console.log(ValidParenthesisString('((**)'));
console.log(ValidParenthesisString('(((*)'));