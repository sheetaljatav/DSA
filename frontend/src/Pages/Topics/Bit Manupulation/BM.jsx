import React from "react";
import "./BM.css";

const BM = () => {
  return (
    <div className="queue-container">
      <section className="queue-section">
        <h2>🧠 What is Bit Manipulation?</h2>
        <p>
          Bit Manipulation refers to the process of performing operations directly on the binary representation of integers. These operations are very fast, memory-efficient, and are commonly used in competitive programming and system-level coding.
        </p>
        <p>
          In simple terms, you're controlling and changing individual bits (0s and 1s) of a number using bitwise operators.
        </p>

        <h3>💡 Why Learn Bit Manipulation?</h3>
        <ul>
          <li>High-speed performance: Operations are faster than arithmetic.</li>
          <li>Low-level access: Allows direct memory access and control.</li>
          <li>Used in real-world systems: Cryptography, graphics, compression, hashing, etc.</li>
          <li>Handy for interviews: Many tricky problems use bit manipulation techniques.</li>
        </ul>

        <h3>⚙️ Bitwise Operators in C++ (and other languages)</h3>
        <table>
          <thead>
            <tr>
              <th>Operator</th>
              <th>Symbol</th>
              <th>Description</th>
              <th>Example (A=5, B=3)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AND</td>
              <td>&amp;</td>
              <td>Sets bit to 1 if both bits are 1</td>
              <td>5 &amp; 3 = 1</td>
            </tr>
            <tr>
              <td>OR</td>
              <td>|</td>
              <td>Sets bit to 1 if any bit is 1</td>
              <td>5 | 3 = 7</td>
            </tr>
            <tr>
              <td>XOR</td>
              <td>^</td>
              <td>Sets bit to 1 if bits are different</td>
              <td>5 ^ 3 = 6</td>
            </tr>
            <tr>
              <td>NOT</td>
              <td>~</td>
              <td>Inverts all bits</td>
              <td>~5 = -6</td>
            </tr>
            <tr>
              <td>Left Shift</td>
              <td>&lt;&lt;</td>
              <td>Shifts bits to the left</td>
              <td>5 &lt;&lt; 1 = 10</td>
            </tr>
            <tr>
              <td>Right Shift</td>
              <td>&gt;&gt;</td>
              <td>Shifts bits to the right</td>
              <td>5 &gt;&gt; 1 = 2</td>
            </tr>
          </tbody>
        </table>
        <p>Tip: In binary, 5 = 0101 and 3 = 0011.</p>

        <h3>🧪 Examples and Explanations</h3>
        <b>1. Check if a number is even or odd</b>
        <pre>{`bool isEven(int n) {
    return (n & 1) == 0;
}`}</pre>
        <p>✅ If the last bit is 0, the number is even.</p>

        <b>2. Check if the ith bit is set</b>
        <pre>{`bool checkBit(int n, int i) {
    return (n & (1 << i)) != 0;
}`}</pre>
        <p>📌 We're using 1 &lt;&lt; i to make a mask with the i-th bit as 1.</p>

        <b>3. Set the ith bit</b>
        <pre>{`int setBit(int n, int i) {
    return n | (1 << i);
}`}</pre>
        <p>✍️ We use OR to force the i-th bit to be 1.</p>

        <b>4. Clear the ith bit</b>
        <pre>{`int clearBit(int n, int i) {
    return n & ~(1 << i);
}`}</pre>
        <p>🚫 Use ~(1 &lt;&lt; i) to create a mask with 0 at the i-th bit and 1 elsewhere.</p>

        <b>5. Toggle the ith bit</b>
        <pre>{`int toggleBit(int n, int i) {
    return n ^ (1 << i);
}`}</pre>
        <p>🔄 Flip the bit: 0 becomes 1, and 1 becomes 0.</p>

        <h4>🔁 Count Number of 1's in Binary (Brian Kernighan’s Algorithm)</h4>
        <pre>{`int countOnes(int n) {
    int count = 0;
    while (n > 0) {
        n = n & (n - 1); // removes the rightmost set bit
        count++;
    }
    return count;
}`}</pre>
        <p>✅ This is faster than checking each bit individually.</p>

        <h3>🚩 Applications of Bit Manipulation</h3>
        <table>
          <thead>
            <tr>
              <th>Problem/Task</th>
              <th>Bit Trick Used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Check if a number is power of 2</td>
              <td>n &amp; (n-1) == 0 if n &gt; 0</td>
            </tr>
            <tr>
              <td>Find the only non-repeating element</td>
              <td>Use XOR across all elements</td>
            </tr>
            <tr>
              <td>Swap two numbers without temp var</td>
              <td>Use XOR</td>
            </tr>
            <tr>
              <td>Subset generation</td>
              <td>Loop from 0 to 2^n - 1</td>
            </tr>
            <tr>
              <td>Fast multiplication/division</td>
              <td>Use &lt;&lt; and &gt;&gt;</td>
            </tr>
          </tbody>
        </table>

        <h3>🔍 Interview Problem Examples</h3>
        <b>1. Single Number (Leetcode 136)</b>
        <pre>{`int singleNumber(vector<int>& nums) {
    int ans = 0;
    for (int num : nums) {
        ans ^= num;
    }
    return ans;
}`}</pre>
        <p>🔑 Idea: XOR of duplicates cancels out → only the unique one remains.</p>

        <b>2. Count Bits (Leetcode 338)</b>
        <pre>{`vector<int> countBits(int n) {
    vector<int> ans(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
}`}</pre>
        <p>📌 Using the idea that i/2 has similar bits as i, plus 1 if i is odd.</p>

        <h3>📘 Summary</h3>
        <ul>
          <li>Bit manipulation gives powerful control over data at the bit level.</li>
          <li>Operations are constant time and very useful in optimization.</li>
          <li>It’s highly applicable in DSA, interviews, and real-world systems.</li>
          <li>Mastering it requires practice, especially through problems on Leetcode or Codeforces.</li>
        </ul>

        <h3>✅ Recommended Practice Problems</h3>
        <table>
          <thead>
            <tr>
              <th>Problem</th>
              <th>Platform</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Single Number</td>
              <td>Leetcode</td>
              <td>XOR</td>
            </tr>
            <tr>
              <td>Counting Bits</td>
              <td>Leetcode</td>
              <td>Bit count</td>
            </tr>
            <tr>
              <td>Power of Two</td>
              <td>Leetcode</td>
              <td>Bit check</td>
            </tr>
            <tr>
              <td>Subsets</td>
              <td>Leetcode</td>
              <td>Bit masking</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default BM;