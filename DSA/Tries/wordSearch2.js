// Question: find words from a list of words that exists in a m * n board.

// Solution: 
// 1. store the words in a trie data structure
// 2. Trie allows us to see if a multiple character of different words at the same time.

class TrieNode{
    constructor()
    {
        this.children = {};
        this.endOfWord = false;
    }
    
    addWord(word)
    {
        let curr = this;
        for(let c of word)
        {
            if(!(c in curr.children))
            {
                curr.children[c] = new TrieNode();
            }
            curr = curr.children[c];
        }
        curr.endOfWord = true;
    }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(board, words) {
    //add word to trie
    let root = new TrieNode();
    for(let word of words)
    {
        root.addWord(word);
    }

    let rows = board.length;
    let columns = board[0].length;

    let res = new Set();
    let visit = new Set();

    function dfs(r,c, node, word)
    {
        if(r < 0 || c < 0 || r > rows - 1 || c > columns - 1 || 
        !(board[r][c] in node.children) || visit.has(`${r}-${c}`))
        return;

        // if current board character matches one of the children
        visit.add(`${r}-${c}`);

        node = node.children[board[r][c]];
        word += board[r][c];
        if(node.endOfWord)
        {
            res.add(word);
            //remove the word from the trie.
        }

        // see if we can form one of the word from the trie
        dfs(r+1,c,node,word);
        dfs(r-1,c,node,word);
        dfs(r,c+1,node,word);
        dfs(r,c-1,node,word);

        // back track, so this node can be visited again as part of another word.
        visit.delete(`${r}-${c}`);

    }

    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<columns;j++)
        {
            dfs(i,j,root, "");
        }
    }

    return [...res];
}

console.log(findWords(
    [
        ["a","b","c","d"],
        ["s","a","a","t"],
        ["a","c","k","e"],
        ["a","c","d","n"]
    ],
    ["bat","cat","back","backend","stack"]
))