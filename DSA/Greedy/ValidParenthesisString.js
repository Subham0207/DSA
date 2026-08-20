// Solution: 
// 1. Create two stacks tracking open bracket positions and star positions.
// 2. To balance closing brackets; pop open stack else pop star stack.
// 3. To balance open brackets; pop star stack when openstack.top < startstack.top; (i.e. star should occur after open bracket for balancing to be possible)

function ValidParenthesisString(s)
{
    let star = [];
    let open = [];

    for(let i=0; i<s.length;i++)
    {
        let char = s[i];

        if(char === '(')
        {
            open.push(i);
        }
        else if (char === '*')
        {
            star.push(i);
        }
        else
        {
            // balance closing brackets
            if(open.length > 0)
            {
                open.pop();
            }
            else if(star.length > 0)
            {
                star.pop();
            }
            else
                return false;
        }
    }

    // balance open brackets
    while(open.length > 0)
    {
        if(star.length === 0)
            return false;
        else if(open[open.length - 1] < star[star.length - 1])
        {
            star.pop();
            open.pop();
        }
        else // open.top > star.top ( cannot balance)
            return false;
    }
    return true;
}

console.log(ValidParenthesisString('((**)'));
console.log(ValidParenthesisString('(((*)'));