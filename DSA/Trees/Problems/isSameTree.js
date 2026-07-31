function isSameTree(p, q) {
    if(p === null && q === null) return true;
    if(p !== null && q !== null 
        && p.val === q.val)
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    
    return false;
}