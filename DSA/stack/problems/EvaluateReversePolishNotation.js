function evalRPN(tokens) {
    function op(a,b,op)
    {
        if(op === '+')
            return a + b;
        if(op === '-')
            return a - b;
        if(op === '*')
            return a * b;
        if(op === '/')
            return Math.trunc(a/b);
    }
    const stack = [];
    const operators = new Set(['+','-','*','/']);
    for(let char of tokens)
    {
        if(operators.has(char))
        {
            let elem2 = stack.pop();
            let elem1 = stack.pop();
            stack.push(op(elem1,elem2, char));
        }
        else
            stack.push(Number(char));
    }

    return stack.pop();
}

console.log(evalRPN(["1","2","+","3","*","4","-"]))