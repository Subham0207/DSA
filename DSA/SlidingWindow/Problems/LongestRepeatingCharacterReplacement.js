// Problem: you are supposed to swap-out atmost any k characters, 
// and return the length of the longest repeating character.

// Solution: 
// 1. variable size window
// 2. hashmap to track counts

// Explaination for: (r - l + 1) - maxF; i.e. windowSize - maxFreqCharInThatWindow
// Number of characters we need to change to make a string all of same characters (i.e to max freq char).
// 1. window: "A A B A C", window length 5; k = 1; most frequencies: 3 ( A's )
// 2.Replacement needed = 5 - 3 = 2.
// 3. To make this entire window all 'A's, you'd have to replace both 'B' and 'C' (2 replacements).
// 4. 2 > 1. We can only change 1 character, So shrink window.

// params: {s,k}
// s: string
// k: number
function characterReplacement(s,k)
{
    let count = {}
    let res = 0;

    let l = 0;
    let maxF = 0;
    for(let r=0;r<s.length;r++)
    {
        // track how many times a character occurs in the window.
        if(!(s[r] in count)) count[s[r]] = 0;
        count[s[r]]++;

        maxF = Math.max(maxF, count[s[r]]);

        // if Number of characters we need to change to make a string all of same characters > k
        // then shrink window, as only K changes are allowed.
        while((r - l + 1) - maxF > k)
        {
            count[s[l]]--;
            l +=1;
        }

        // one of the variable window sizes is the answer, 
        // since we are working towards making all characters same in that window.
        res = Math.max(res, r-l+1);
    }
    return res;
}

console.log(characterReplacement('AAABABB', 1))