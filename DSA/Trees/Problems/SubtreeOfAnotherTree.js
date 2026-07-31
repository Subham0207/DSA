// Solution:
// - Use isSameTree to find if two trees are same.
// - recursively compare left and right subtrees of root.

function subTreeOfAnotherTree(root, subRoot)
{
    function isSameTree(s,t)
    {
        // empty tree is same as another empty tree
        if(s === null && t === null) return true;
        if
        (
            s !== null && t !== null && 
            s.val === t.val
        )
        return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);

        return false;
    }

    function isSubTree(s,t)
    {
        // empty subtree is part of non empty tree (t part of s)
        if(t === null) return true;
        // non empty tree is not part of empty tree; ( t not part of s)
        if(s === null) return false;

        if(isSameTree(s,t))
            return true;

        return isSubTree(s.left, t) || isSameTree(s.right, t);
    }

    return isSubTree(root,subRoot);
}