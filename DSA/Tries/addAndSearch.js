class TrieNode{
    constructor()
    {
        this.children = {};
        this.word = false; // end of word
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for(let c of word)
        {
            if(!(c in curr.children))
            {
                curr.children[c] = new TrieNode();
            }
            curr = curr.children[c];
        }
        curr.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(j, root)
        {
            let curr = root;
            for(let i=j;i<word.length;i++)
            {
                let c = word[i];
                if(c === '.')
                {
                    // {a: TrieNode() ,c: TrieNode()}
                    for(let child of Object.values(curr.children))
                    {
                        if(dfs(i+1, child)) // i+1 for matching the next character in the word
                            return true;
                    }
                    return false;
                }
                else
                {
                    if(!(c in curr.children))
                        return false;
                    curr = curr.children[c];
                }
            }
            return curr.word;
        }

        return dfs(0, this.root);
    }
}

let wordDictionary = new WordDictionary();
wordDictionary.addWord("day");
wordDictionary.addWord("bay");
wordDictionary.addWord("may");
wordDictionary.search("say"); // return false
wordDictionary.search("day"); // return true
wordDictionary.search(".ay"); // return true
wordDictionary.search("b..");