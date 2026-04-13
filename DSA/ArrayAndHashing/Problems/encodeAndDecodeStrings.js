// Choosing a delimiter that does not occur in the strings.

function encode(strs) {
    let encodedStr = '';
    for(let str of strs)
    {
        encodedStr += str.length + "#" + str;
    }
    console.log("Encoded String: ", encodedStr);
    return encodedStr;
}

function decode(str) {
    const arr = str.split('');
    const resultStrs = [];
    let nextIndex = 0
    while(nextIndex < arr.length)
    {
        const length = +arr[nextIndex]
        const startIndex = nextIndex + 2
        const endIndex =startIndex + length;

        const result = str.substring(startIndex, endIndex);
        console.log("str: ", result, " length: ", length, " startChar:", str[startIndex], " endIndex:", endIndex);
        resultStrs.push(result);
        nextIndex = endIndex;
    }
    return resultStrs
}

const dummy_input = ["Hello","World"]
const result = decode(encode(dummy_input));
console.log("Result: ", result);