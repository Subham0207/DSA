  function hasDuplicate(nums) {
      const temp = [];
      for(let i = 0; i< nums.length; i++)
      {
          if(temp.includes(nums[i]))
              return true;
          temp.push(nums[i]);
      }

      return false;
  }

  const result = hasDuplicate([1, 2, 3, 3])
  console.log("Result: ", result);