# Sliding window patterns and problems
1. Left and Right starting at 0th index
    a. fixed sliding window
        - Hashmap
    b. variable sliding window
        - Hashmap
    - if vs while to get min or max and incremenet left pointer.
        - with while loop re-calculate min or max inside it. Otherwise window size changes.
2. Left starts at 0th index and Right starts at arr.length - 1. Good when array is sorted.
    a. done using a while loop 
        - fixed Length: while( r - l + 1 > windowLength)
        - variable length: 
3. Sliding window with Deque ( double ended queue )

# Doubts
1. Find k closest Elements to x in a sorted array.