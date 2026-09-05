// Solution: finding cycle in linked list

function findTheDuplicateNumber(nums)
{
    let slow = 0;
    let fast = 0;

    let slowRes = slow + '->';
    let fastRes = fast + '->';
    while(true)
    {
        slow = nums[slow];
        fast = nums[nums[fast]];

        slowRes += slow + '->';
        fastRes += fast + '->';

        if(slow === fast)
            break;
    }
    console.log('slow: ', slowRes)
    console.log('fast: ', fastRes)
    
    let slow2 = 0;
    let slow2Res = slow2 + '->';
    while(true)
    {
        slow = nums[slow];
        slow2 = nums[slow2];

        slowRes += slow + '->';
        slow2Res += slow2 + '->';

        if(slow === slow2)
        {
            break;
        }
    }

    console.log('slow: ', slowRes);
    console.log('slow2: ', slow2Res);

    return slow;
}

console.log(findTheDuplicateNumber([1,2,3,2,2]));