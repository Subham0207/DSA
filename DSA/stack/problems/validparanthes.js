function validParanthesis(s)
{
    const stack = [];
    const closeToOpen = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for(let char of s)
    {
        if(char in closeToOpen && stack[stack.length - 1] === closeToOpen[char])
            stack.pop();
        else
            stack.push(char);
    }

    return stack.length > 0 ? false: true;
}

console.log(validParanthesis("([{}])"));
console.log(validParanthesis("[(])"));