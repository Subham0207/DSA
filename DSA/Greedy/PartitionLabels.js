// partition a string where all duplicates of a character falls in the same substring.
// steps:
// 1. create a hashmap {char, lastIndex} lastIndex where this character occurs.
// 2. let size = 0, end = 0, res = []
// 3. Loop through string: for char[i], increment size++, 
// find lastIndex of char[i] from hashmap,
// if lastIndex > end then end = lastIndex, if we reach end value,
// push the size into res, and set size = 0;

function partitionLabels(str)
{
    let lastIndex = new Map();
    for(let i=0;i<str.length;i++)
    {
        let char = str[i];
        lastIndex[char] = i;
    }

    let size = 0;
    let end = 0;
    let res = [];


    for(let i=0;i<str.length;i++)
    {
        let char = str[i];
        size++;
        end = Math.max(end, lastIndex[char])
        if(i === end)
        {
            res.push(size);
            size = 0;
        }
    }

    return res;
}

console.log(partitionLabels("xyxxyzbzbbisl"))