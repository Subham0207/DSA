function foo(digits)
{
    const comb = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };

    const result = [];
    const subset = [];

    function backtrack(i)
    {
        if(i === digits.length)
        {
            subset.length > 0 && result.push(subset.join(''));
            return; 
        }

        for(let c =0;c<comb[digits[i]].length;c++)
        {
            subset.push(comb[digits[i]][c]);
            backtrack(i+1);
            subset.pop(comb[digits[i]][c]);
        }
    }

    backtrack(0);
    return result;
}

console.log(foo('34'));