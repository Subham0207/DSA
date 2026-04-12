var isPalindrome = function(s) {
    const arr = s.toLowerCase().split('').filter(c => 
        (c.charCodeAt(0) >= 'a'.charCodeAt(0) && c.charCodeAt(0) <= 'z'.charCodeAt(0))
        ||
        (c.charCodeAt(0) >= '0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0))
    );
    
    console.log(arr);

    let l = 0;
    let r = arr.length -1;

    while(l<r)
    {
        if(arr[l] !== arr[r])
        {
            console.log("l: ",l, " r: ", r, "  ", arr[l], " ", arr[r]);
            return false;
        }
        l++;
        r--;
    }

    return true;
};

const result = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("0P");
console.log("Result: ", result);
console.log("Result2: ", result2);