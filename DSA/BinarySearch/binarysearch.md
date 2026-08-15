# When to use while (l <= r) or while(l < r)
- Ask if l === r is a valid case ? when Searching an element in array.
    - in Search target in Sorted array
    - binary search
- While l < r, so exit when l >= r
    - find minimum in rotated sorted array.
    - search in 2D matrix

# Rotated sorted array
- In rotated sorted array, at least one half is always sorted.

# Sorting using l and r pointer and finding a target
- nums[l] <= target ( can be used to find a number smaller than the target)