

let desc = "Constructing a heap from an existing array using the Heapify method takes x time.  In contrast, inserting n elements one by one into an empty heap takes x time."
let arr = desc.split(' ');
let invertedIndex = new Map();

for(let i =0;i<arr.length;i++)
{
    let word = arr[i];
    if(!invertedIndex.has(word)) invertedIndex.set(word, []);

    invertedIndex.get(word).push(i);
}

console.log(invertedIndex);

function find(word1, word2)
{
    let arr1 = invertedIndex.get(word1);
    let arr2 = invertedIndex.get(word2);
    
    if(!arr1 || !arr2) return "";

    let i =0;
    let j=0;
    let min = Infinity;
    let pair = [];
    while(i <arr1.length && j<arr2.length)
    {
        let diff = Math.abs(arr1[i] - arr2[j]);
        if(diff < min)
        {
            min = diff;
            pair = [arr1[i],arr2[j]];
        }

        if(arr1[i] < arr2[j])
        {
            i++;
        }
        else
        {
            j++;
        }
    }
    
    let start = Math.min(...pair);
    let end = Math.max(...pair);
    return arr.slice(start,end+1);
}

console.log(find('existing', 'Heapify'));