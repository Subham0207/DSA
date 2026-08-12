// s: string[]
function reverseString(s)
{
    let l = 0;
    let r = s.length - 1;
    while(l < r)
    {
        [s[l],s[r]] = [s[r],s[l]]   
        l++;
        r--;
    }
    return s;
}

console.log(reverseString(["n","e","e","t"]));