  /**
   * 2. Dynamic Programming (Longest Common Subsequence):
   * Given two strings, find the longest common subsequence (LCS).
   */

fun lcs(str1: String, str2: String): Int {
    val dp = Array(str1.length + 1) { IntArray(str2.length + 1) }

    for (i in 1 until str1.length + 1) {
        for (j in 1 until str2.length + 1) {
            if (str1[i - 1] == str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = maxOf(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[str1.length][str2.length]
}

val str1 = "AGGTAB"
val str2 = "GXTXAYB"

val lcsLength = lcs(str1, str2)
println("LCS length: $lcsLength")
