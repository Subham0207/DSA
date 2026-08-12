var isPalindrome = function(s) {
    const arr = s.toLowerCase().split('').filter(c => 
        /[a-zA-Z0-9]/.test(c)
    );
    
    let l = 0;
    let r = arr.length -1;

    while(l<r)
    {
        if(arr[l] !== arr[r])
        {
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