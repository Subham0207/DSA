

function wordLadder(beginWord, endWord, wordList)
{
    const adj = {}; // pattern: [word1, word2]
    wordList.push(beginWord);

    for(let word of wordList)
    {
        for(let i =0;i<word.length;i++)
        {
            let pattern = word.slice(0,i) + "*" + word.slice(i+1,word.length);
            if(adj[pattern])
            {
                adj[pattern].push(word);
            }
            else
            {
                adj[pattern] = [];
                adj[pattern].push(word);
            }
        }
    }

    let visited = new Set();
    visited.add(beginWord);
    const queue = [beginWord];
    let queueLength = 1;
    let res = 0;
    while(queue.length > 0)
    {
        for(let i =0;i<queueLength;i++)
        {
            let word = queue.shift();
            if(word === endWord)
                return res;
            for(let i =0;i<word.length;i++)
            {
                let pattern = word.slice(0,i) + "*" + word.slice(i+1,word.length);
                for(let adjWord of adj[pattern])
                {
                    if(!visited.has(adjWord))
                    {
                        queue.push(adjWord);
                        visited.add(adjWord);
                    }
                }
                
            }            

        }
        queueLength = queue.length;
        res++;
    }
}

console.log("Answer: ", wordLadder("cat", "sag", ["bat","bag","sag","dag","dot"]))