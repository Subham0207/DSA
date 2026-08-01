# Question 1

The manager of Amazon's fulfillment center is responsible for maintaining the inventory of a product in two variants, A and B, represented as O and 1, respectively. There are n products, where the ith product is represented by the array product[] (if product[i] equals 1, the product is of type B. Otherwise, it is of type A
A positive integer k is also given, which specifies the length of the subarray that can be selected to convert a single element within that subarray to product A.
Since variant B is no longer in demand, Amazon wants to convert all type B products to type A. The task is to convert all products in the array to variant A at the minimum cost, using the following operation as many times as needed.
Choose two indices l, and r 0<=l<=r<n, such that r-l+1 = k (basically choose a subarray of length k)
The cost of this operation is product[l] + product[l+1]+..+product[r-1]+product[r]. (sum of that subarray)
Choose an index p such thatl<=p<=r and set it to 0 (choose a index in that subarray and flip it to 0)
Given an array products of length n , find the minumum cost to convert all the products in the array product to varaint A
Example
Given, product = [1, 1, 1, 0, 1] and k = 4
The sequence of operations can be defined as follows:
. Choose the subarray [l, r] = [1, 4] and set product[1] = 0 with cost = 1+1+0+1=3. Thus, the array becomes: product = [1, 0, 1, 0, 1]
. Choose the subarray [l, r] = [0,3] and set product[2] = 0 with cost =1+0+1+0=2. Thus, the array becomes: product = [1, 0, 0, 0, 1]
. Choose the subarray [l, r] = [1, 4] and set product[4] = 0 with cost =0+0+0+1=1. Thus, the array becomes: product = [1, 0, 0, 0,0]
choose subarray [l,r] = [0,3] set product[0] = 0 with cost 1+0+0+0 = 1
total cost = 3+2+1+1= 7

find the min cost to convert all 1 to 0.
constaints
1<=k<=n<=10e5


# Question 2