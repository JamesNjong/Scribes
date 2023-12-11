
  /**
   * 2. Dynamic Programming (Longest Common Subsequence):
   * Given two strings, find the longest common subsequence (LCS).
   */


func lcs(_ str1: String, _ str2: String) -> Int {
    var dp = Array(repeating: Array(repeating: 0, count: str2.count + 1), count: str1.count + 1)

    for i in 1..<str1.count + 1 {
        for j in 1..<str2.count + 1 {
            if str1[i - 1] == str2[j - 1] {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[str1.count][str2.count]
}

let str1 = "AGGTAB"
let str2 = "GXTXAYB"

let lcsLength = lcs(str1, str2)
print("LCS length: \(lcsLength)")
