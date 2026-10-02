# left = 0, right = nums.length - 1

# 3 Sum and traingle number: fix i, and do two pointers.
- 3 sum: 
- Traingle number: sorting the arr, Means two of the three properties of trangle is satisfied.
    - Triangle properties: a+b > c; b+c > a; a+c > b
    - steps:
        - fix i at last index, left = 0 and right = i -1;
        - now if left + right > i element, we found one triplet. 
        - And that all elements from left to right satisfies this condition. 
        - So add right - left to count.
        - if left + right is short of i. then increament the shorter side i.e. left to increase the sum.

# Move zeros -- Move zeros to one end of the array without changing the relative ordering of elements.
- Start insertPtr and a forloop of i.
- When element at i is not 0; swap i and insertPtr element;
- after finished, all zeros are at the end. And insertPtr points at starting zero.
- Position of insert can be used to move other elements to end before zeros. Try `Sort colors problem`.

# Trapping rain water - using leftMax, rightMax, left and right pointers.