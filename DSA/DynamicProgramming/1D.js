// Ways to solve DP:
// 1. Recurrive solution
// 2. Memoize
// 3. Bottom up

// 1D: Fibonacci sequence

// 1,1,2,3,5,8...
function fib(n)
{
    let result;
    if(n === 1 ||  n === 2)
    {
        result = 1;
    }
    else
    {
        result = fib(n-1) + fib(n-2);
    }
    return result;
}


console.log(fib(5));