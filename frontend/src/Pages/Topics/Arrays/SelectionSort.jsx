import React from "react";
import "./Selection.css";

const SelectionSort = () => (
  <div className="selection-sort-container">
    <section className="selection-sort-section">
      <h2>🧠 Selection Sort – Complete Guide</h2>

      <h3>📌 What is Selection Sort?</h3>
      <p>
        Selection Sort is a simple comparison-based sorting algorithm. It repeatedly finds the minimum element from the unsorted part and puts it at the beginning.
      </p>

      <h3>⚙️ How Selection Sort Works</h3>
      <p>
        Visualize an unsorted list:<br />
        <code>[7, 12, 9, 11, 3]</code>
      </p>
      <ol>
        <li>Find the minimum element in the array.</li>
        <li>Swap it with the first element.</li>
        <li>Repeat the process for the remaining sub-array.</li>
      </ol>

      <h3>📉 Manual Example</h3>
      <p>Let’s sort this array:<br /><code>[7, 12, 9, 11, 3]</code></p>
      <ul>
        <li>🔍 <b>Pass 1:</b> Find min = 3 → Swap with 7 → <code>[3, 12, 9, 11, 7]</code></li>
        <li>🔍 <b>Pass 2:</b> Min = 7 → Swap with 12 → <code>[3, 7, 9, 11, 12]</code></li>
        <li>🔍 <b>Pass 3:</b> Min = 9 → Already in place</li>
        <li>🔍 <b>Pass 4:</b> Min = 11 → Already in place</li>
      </ul>
      <p>✅ <b>Sorted Array:</b> <code>[3, 7, 9, 11, 12]</code></p>

      <h3>🧾 Code Examples</h3>
      <div>
        <b>🐍 Python (Improved with Swap)</b>
        <pre>
{`arr = [64, 34, 25, 12, 22, 11, 90, 5]
n = len(arr)

for i in range(n):
    min_idx = i
    for j in range(i + 1, n):
        if arr[j] < arr[min_idx]:
            min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]

print("Sorted array:", arr)`}
        </pre>
      </div>
      <div>
        <b>💻 C++ (Improved with Swap)</b>
        <pre>
{`#include <iostream>
using namespace std;

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < n; i++) {
        int min_idx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        swap(arr[i], arr[min_idx]);
    }

    cout << "Sorted array: ";
    for (int x : arr) cout << x << " ";
}`}
        </pre>
      </div>

      <h3>⏱️ Time Complexity</h3>
      <table>
        <thead>
          <tr>
            <th>Case</th>
            <th>Comparisons</th>
            <th>Swaps</th>
            <th>Time Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Best</td>
            <td>𝑂(n²)</td>
            <td>𝑂(1)</td>
            <td>𝑂(n²)</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>𝑂(n²)</td>
            <td>𝑂(n)</td>
            <td>𝑂(n²)</td>
          </tr>
          <tr>
            <td>Worst</td>
            <td>𝑂(n²)</td>
            <td>𝑂(n)</td>
            <td>𝑂(n²)</td>
          </tr>
        </tbody>
      </table>
      <p>🧠 Unlike Bubble Sort, Selection Sort always makes n-1 comparisons even in the best case.</p>

      <h3>🧪 Sample Practice Questions</h3>
      <ul>
        <li>
          <b>✅ Q1: Find the Last Element After First Pass</b><br />
          Input: <code>[7, 12, 9, 11, 3]</code><br />
          After first pass, the smallest number 3 is placed at index 0.<br />
          🔍 Last element after first pass: <b>7</b>
        </li>
        <li>
          <b>✅ Q2: Sort Array Using Selection Sort (Write Code)</b><br />
          Input: <code>[5, 3, 8, 4, 2]</code><br />
          Expected Output: <code>[2, 3, 4, 5, 8]</code><br />
          🧠 Write the code using Selection Sort in your preferred language (Python/C++/JS).
        </li>
        <li>
          <b>✅ Q3: Count the Number of Swaps</b><br />
          Input: <code>[4, 3, 2, 1]</code><br />
          How many swaps are needed using Selection Sort?<br />
          💡 Tip: Selection Sort makes at most n-1 swaps. Try to track each step!
        </li>
      </ul>

      <h3>📌 When to Use Selection Sort?</h3>
      <ul>
        <li>Simple and easy to understand</li>
        <li>Best for small arrays</li>
        <li>Not suitable for large datasets</li>
      </ul>
    </section>
  </div>
);

export default SelectionSort;