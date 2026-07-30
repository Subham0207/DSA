# Regular Expression matching
- match=exact and dot. For star: use * or don't use *.
# Burst Balloons
- [1,...nums,1] ; burst this balloon last;
# Edit distance
- return 1 + min(insert, delete, replace);
# Distinct Subsequence
- base case i exhausted &&  j didnot exhaust then return 0; j exhausted return 1;
- (i,j) => i === j ? matches += check if next i and next j match + compare next i to this j.
# Largest increasing path in matrix
- dfs(r,c,prevVal); res = Math.max(res, dfs(r -/+ 1, c -/+ 1, matrix[r][c])); return res;
# Interleaving string
- s1.length + s2.lenght !== s3.length return false
- baseCase: both strings are exhausted return true else false; s1[i] === s3[i+j] && dfs(i+1,j); s2[j] === s3[i+j] && dfs(i,j+1).

# Target sum
# Coin Change 2
# Best Time to buy and sell stock with cooldown
# Longest common Subsequence
# Unique Path