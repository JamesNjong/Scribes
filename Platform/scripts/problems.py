'''
2. Dynamic Programming (Longest Common Subsequence):
Given two strings, find the longest common subsequence (LCS).
'''

def lcs(str1, str2):
    dp = [[0 for _ in range(len(str2) + 1)] for _ in range(len(str1) + 1)]

    for i in range(1, len(str1) + 1):
        for j in range(1, len(str2) + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    return dp[len(str1)][len(str2)]

str1 = "AGGTAB"
str2 = "GXTXAYB"

lcs_length = lcs(str1, str2)
print("LCS length:", lcs_length)
