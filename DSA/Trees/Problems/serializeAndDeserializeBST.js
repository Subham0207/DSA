// Solution: Using Pre order traversal
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = [];
        function dfs(node)
        {
            if(node === null)
            {
                res.push('N')
                return;
            }

            res.push(node.val)
            dfs(node.left)
            dfs(node.right)
        }

        dfs(root);
        return res.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const vals = data.split(',');
        let i = 0; // not passing i and increamenting everytime we go through the vals`
        function dfs()
        {
            if(vals[i] === 'N')
            {
                i++;
                return null;
            }
            const node = new TreeNode(Number(vals[i]))
            i++;
            node.left = dfs();
            node.right = dfs();
            return node;
        }

        return dfs();
    }
}
