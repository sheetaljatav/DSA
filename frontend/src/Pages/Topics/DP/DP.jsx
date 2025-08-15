import React from "react";
import "./DP.css";

const DP = () => {
  return (
    <div className="queue-container">
      <section className="queue-section">
        <h2>💡 Dynamic Programming (DP) in DSA</h2>

        <h3>🧠 What is Dynamic Programming?</h3>
        <p>
          Dynamic Programming (DP) is a powerful technique used to solve problems by breaking them down into smaller subproblems, solving each subproblem only once, and storing their results (usually in an array or table) to avoid redundant computations.
        </p>
        <p>
          It’s like solving a jigsaw puzzle by remembering the pieces you've already placed so you don’t try them again and again.
        </p>

        <h3>✅ When to Use DP?</h3>
        <ul>
          <li><b>Overlapping Subproblems</b> – The same subproblems are solved multiple times.</li>
          <li><b>Optimal Substructure</b> – The solution to the problem can be built from the solutions of its subproblems.</li>
        </ul>

        <h3>🔁 DP vs Recursion vs Memoization</h3>
        <table>
          <thead>
            <tr>
              <th>Concept</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Recursion</td>
              <td>Solves the problem by breaking it down, but may recompute subproblems.</td>
            </tr>
            <tr>
              <td>Memoization</td>
              <td>Top-down approach. Stores already computed results using recursion + caching.</td>
            </tr>
            <tr>
              <td>Tabulation</td>
              <td>Bottom-up approach. Builds the solution iteratively from base cases.</td>
            </tr>
          </tbody>
        </table>

        <h3>🧭 Analogy: Climbing Stairs</h3>
        <p>
          Imagine you’re climbing stairs and you can take either 1 or 2 steps. You want to count how many distinct ways you can reach the top.
        </p>
        <p>
          Let <b>dp[i]</b> represent the number of ways to reach the i-th stair.
        </p>
        <pre>{`dp[i] = dp[i - 1] + dp[i - 2]`}</pre>
        <p>
          Because you can reach step i either from step i-1 (1-step move) or i-2 (2-step move).
        </p>

        <h3>📚 Types of Dynamic Programming</h3>
        <ul>
          <li><b>0/1 Knapsack</b> – Include or exclude each item. <br />Example: Maximize profit with limited capacity.</li>
          <li><b>Unbounded Knapsack</b> – Items can be taken multiple times. <br />Example: Coin Change Problem.</li>
          <li><b>Subset Sum / Partition</b> – Check if a subset with a given sum exists.</li>
          <li><b>DP on Strings</b> – Examples: Longest Common Subsequence (LCS), Edit Distance, Longest Palindromic Substring.</li>
          <li><b>DP on Grids</b> – Used in pathfinding, like Minimum Path Sum, Unique Paths.</li>
          <li><b>DP on Trees / Graphs</b> – Advanced level. Used with DFS + memoization on trees.</li>
        </ul>

        <h3>🛠️ Approaches in DP</h3>
        <h4>🧪 1. Memoization (Top-Down)</h4>
        <pre>{`int fib(int n, vector<int>& dp) {
    if (n <= 1) return n;
    if (dp[n] != -1) return dp[n];

    return dp[n] = fib(n - 1, dp) + fib(n - 2, dp);
}`}</pre>
        <p><b>Pros:</b> Easy to write<br /><b>Cons:</b> Uses recursion (call stack overhead)</p>

        <h4>🧱 2. Tabulation (Bottom-Up)</h4>
        <pre>{`int fib(int n) {
    vector<int> dp(n + 1);
    dp[0] = 0, dp[1] = 1;

    for (int i = 2; i <= n; i++)
        dp[i] = dp[i - 1] + dp[i - 2];

    return dp[n];
}`}</pre>
        <p>
          <b>Pros:</b> No recursion, more space-efficient<br />
          Can be optimized further using two variables instead of an array.
        </p>

        <h4>🔄 Space Optimization in DP</h4>
        <pre>{`int fib(int n) {
    if (n <= 1) return n;
    int prev1 = 1, prev2 = 0;

    for (int i = 2; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}`}</pre>
        <p>
          When your recurrence only depends on dp[i-1] and dp[i-2], you don’t need an entire array. Use variables!
        </p>

        <h3>🚀 Steps to Solve Any DP Problem</h3>
        <ul>
          <li>Understand the problem clearly.</li>
          <li>Try recursive solution first.</li>
          <li>Identify subproblems and overlapping nature.</li>
          <li>Write the recurrence relation.</li>
          <li>Apply memoization (top-down) or tabulation (bottom-up).</li>
          <li>Optimize space if possible.</li>
        </ul>

        <h3>🧩 Popular DP Problems to Practice</h3>
        <table>
          <thead>
            <tr>
              <th>Problem</th>
              <th>Platform</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fibonacci Number</td>
              <td>LeetCode</td>
            </tr>
            <tr>
              <td>Climbing Stairs</td>
              <td>LeetCode</td>
            </tr>
            <tr>
              <td>0/1 Knapsack</td>
              <td>GFG</td>
            </tr>
            <tr>
              <td>Coin Change</td>
              <td>LeetCode</td>
            </tr>
            <tr>
              <td>Longest Increasing Subsequence</td>
              <td>LeetCode</td>
            </tr>
            <tr>
              <td>Edit Distance</td>
              <td>LeetCode</td>
            </tr>
            <tr>
              <td>Unique Paths</td>
              <td>LeetCode</td>
            </tr>
          </tbody>
        </table>

        <h3>🔍 Real-Life Applications of DP</h3>
        <ul>
          <li>Finance: Optimal stock trading decisions.</li>
          <li>Robotics: Pathfinding in grids.</li>
          <li>Gaming: Optimal strategy in turn-based games.</li>
          <li>AI: Decision making and planning (value iteration).</li>
        </ul>

        <h3>🧠 Final Thoughts</h3>
        <p>
          Dynamic Programming is not just a technique—it’s a mindset. Think of it as solving problems smarter, not harder. Once you get used to identifying overlapping subproblems and writing recurrence relations, DP problems become manageable and fun!
        </p>
      </section>
    </div>
  );
};

export default DP;