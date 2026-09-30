
function decodeString(s)
{
    let currentString = "";
    let currentNumber = 0;

    let stack = [];

    // s contains - number, square brackets, and characters.
    for(let char of s)
    {
        if(char === '[')
        {
            stack.push(currentString);
            stack.push(currentNumber);
            currentString = '';
            currentNumber = 0;
        }
        else if( char === ']')
        {
            // since we pushed num last. so we pop it first.
            let num = stack.pop();
            let prevString = stack.pop();
            currentString = prevString + currentString.repeat(num); // the string until now needs to repeat.
        }
        else if(/\d/.test(char))
        {
            // constructing double digit numbers. Needed since we are traversing character by character
            // Also we reset the currentNumber to 0 when char is [
            currentNumber = currentNumber * 10 + parseInt(char)
        }
        else
        {
            // valid characters
            currentString += char;
        }
    }
    
    return currentString;
}

console.log(decodeString('3[a2[c]]'));