// Implement Trie OR Prefix Tree

class TrieNode
{
    constructor()
    {
        this.children = {};
        this.endOfWord = false;
    }
}

class PrefixTree
{
    constructor()
    {
        this.root = new TrieNode();
    }

    insert(word)
    {
        let curr = this.root;
        for(let c of word)
        {
            if(!(c in curr.children))
            {
                curr.children[c] = new TrieNode();
            }
            curr = curr.children[c];
        }
    }

    search(word)
    {
        let curr = this.root;
        for(let c of word)
        {
            if(!(c in curr.children))
            {
                return false;
            }
            curr = curr.children[c];
        }
        return curr.endOfWord;
    }

    startsWith(prefix)
    {
        let curr = this.root;
        for(let c of prefix)
        {
            if(!(c in curr.children))
            {
                return false;
            }
            curr = curr.children[c];
        }
        return true;
    }
}

let prefixTree = new PrefixTree();
prefixTree.insert("dog");
prefixTree.search("dog");    // return true
prefixTree.search("do");     // return false
prefixTree.startsWith("do"); // return true
prefixTree.insert("do");
prefixTree.search("do"); 