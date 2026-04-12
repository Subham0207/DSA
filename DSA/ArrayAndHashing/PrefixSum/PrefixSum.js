function prefixSum(array)
{
    const P = new Array(array.length);

    P[0] = array[0]
    for (let i = 1; i < array.length; i++) {
        P[i] = array[i] + P[i-1];
    }

    return P;
}

const result = prefixSum([10, 20, 30, 40, 50])
console.log("Result: ", result);