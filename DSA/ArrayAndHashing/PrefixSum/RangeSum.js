// [10, 20, 30, 40, 50]
//   0,  1,  2,  3,  4
//P=[10, 30, 60, 100, 150]
// P(L,R) = P(R) - P(L - 1)
// P(1,3) = 100 - 10 = 90

function prefixSum(array)
{
    const P = new Array(array.length);

    P[0] = array[0]
    for (let i = 1; i < array.length; i++) {
        P[i] = array[i] + P[i-1];
    }

    return P;
}

function RangeSum(L,R, P)
{
    return P[R] - P[L-1];
}

const P = prefixSum([10, 20, 30, 40, 50]);
const result = RangeSum(1,3,P);

console.log("Result: ", result);