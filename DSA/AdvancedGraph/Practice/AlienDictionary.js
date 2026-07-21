// solution:
// - create adj list
// - detect cycle in directed graph: Post Order DFS topological sort with 3 state DAG cycle detection

function alienDictionary(words)
{
    const adj = {};
    for(let word of words)
    {
        for(let c of word)
        {
            if(!adj[c])
                adj[c] = new Set();
        }
    }
    for(let i =0;i<words.length-1;i++)
    {
        const [w1,w2] = [words[i], words[i+1]];
        const minLength = Math.min(w1.length, w2.length);
        // first word is greater than w2, And check w2 occurs in w1.
        // Example: [apple, app] is invalid sort order
        if(w1.length > w2.length && w1.slice(0,minLength) === w2.slice(0,minLength))
            return "";

        for(let j=0;j<minLength;j++)
        {
            if(w1[j] !== w2[j])
            {
                adj[w1[j]].add(w2[j]);
                break;
            }
        }
    }

    const visit = {} // src: true(visiting) | false(visited) | no src key(not visited)
    const res = [];
    function dfs(c)
    {
        if(c in visit)
            return visit[c];

        visit[c] = true;
        for(let nei of adj[c])
        {
            if(dfs(nei))
                return true;
        }
        visit[c] = false;
        res.push(c);
        return false;
    }

    for(let key of Object.keys(adj))
    {
        if(dfs(key))
            return ""
    }

    return res.reverse().join('');
}

console.log('Answer: ', alienDictionary(["hrn","hrf","er","enn","rfnn"]));