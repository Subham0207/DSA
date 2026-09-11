// Choosing a delimiter that does not occur in the strings.

function encode(strs) {
    let res = '';
    for(let str of strs)
    {
        res += str.length + '#' + str;
    }

    return res;
}

function decode(str) {
    let index = 0;
    let res = [];
    while(index < str.length)
    {
        let hashIndex = str.indexOf('#', index);
        let len = parseInt(str.slice(index, hashIndex)); // len maybe > one digit
        res.push(str.slice(hashIndex+1, hashIndex+1+len)); // next character after #
        index = hashIndex+1+len;
    }

    return res;
}

const dummy_input = ["Hello","World"]
const result = decode(encode(dummy_input));
console.log("Result: ", result);