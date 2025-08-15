import React from "react";
import "./InsertionSort.css";

const InsertionSort = () => (
  <div className="insertion-sort-container">
    <section className="insertion-sort-section">
      <h2>🧠 Insertion Sort – Complete Guide</h2>

      <h3>📌 What is Insertion Sort?</h3>
      <p>
        Insertion Sort builds the final sorted array one item at a time, just like how we sort cards in our hands.
      </p>

      <h3>⚙️ How Insertion Sort Works</h3>
      <p>
        Let's say we have this unsorted array:<br />
        <code>[7, 12, 9, 11, 3]</code>
      </p>
      <ol>
        <li>Consider the first element as sorted.</li>
        <li>Pick the next element and insert it into its correct position in the sorted part.</li>
        <li>Repeat for all elements.</li>
      </ol>

      <h3>🎯 Manual Walkthrough</h3>
      <p>Let’s manually sort: <code>[7, 12, 9, 11, 3]</code></p>
      <ul>
        <li>Step 1: [7] | 12 9 11 3 → 12 is greater → no change → <code>[7, 12]</code></li>
        <li>Step 2: Insert 9 → between 7 and 12 → <code>[7, 9, 12]</code></li>
        <li>Step 3: Insert 11 → between 9 and 12 → <code>[7, 9, 11, 12]</code></li>
        <li>Step 4: Insert 3 → at front → <code>[3, 7, 9, 11, 12]</code></li>
      </ul>
      <p>✅ Final Sorted Array: <code>[3, 7, 9, 11, 12]</code></p>

      <h3>🧾 Code Examples</h3>
      <div>
        <b>🐍 Python – Basic Version (With Pop & Insert)</b>
        <pre>
{`arr = [64, 34, 25, 12, 22, 11, 90, 5]

for i in range(1, len(arr)):
    insert_index = i
    current_value = arr.pop(i)
    for j in range(i - 1, -1, -1):
        if arr[j] > current_value:
            insert_index = j
    arr.insert(insert_index, current_value)

print("Sorted array:", arr)`}
        </pre>
      </div>
      <div>
        <b>🐍 Python – Optimized (No pop, Less Shifting)</b>
        <pre>
{`arr = [64, 34, 25, 12, 22, 11, 90, 5]

for i in range(1, len(arr)):
    current_value = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > current_value:
        arr[j + 1] = arr[j]
        j -= 1
    arr[j + 1] = current_value

print("Sorted array:", arr)`}
        </pre>
      </div>
      <div>
        <b>💻 C++ Version</b>
        <pre>
{`#include <iostream>
using namespace std;

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    for (int i = 1; i < n; i++) {
        int current = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
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
            <th>Shifts</th>
            <th>Time Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Best</td>
            <td>Few (Already Sorted)</td>
            <td>Minimal</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>Moderate</td>
            <td>Moderate</td>
            <td>O(n²)</td>
          </tr>
          <tr>
            <td>Worst</td>
            <td>Every element shifted</td>
            <td>Max Shifts</td>
            <td>O(n²)</td>
          </tr>
        </tbody>
      </table>
      <p>🧠 Best case occurs when the array is already sorted.</p>

      <h3>🚀 Why Optimize Insertion Sort?</h3>
      <p>
        In naive versions, elements are removed and inserted — which causes hidden memory shifts. In optimized versions, we simply shift values one-by-one and place the current element correctly. This significantly improves performance in practice.
      </p>

      <h3>🧪 Sample Practice Questions</h3>
      <ul>
        <li>
          <b>✅ Q1: Manual Pass Simulation</b><br />
          Array: <code>[7, 12, 9, 11, 3]</code><br />
          After 1st insertion (12), array becomes: <code>[7, 12, 9, 11, 3]</code><br />
          After 2nd insertion (9), array becomes: <code>[7, 9, 12, 11, 3]</code><br />
          ❓What will the array look like after inserting 11?<br />
          ✅ Answer: <code>[7, 9, 11, 12, 3]</code>
        </li>
        <li>
          <b>✅ Q2: Code Output Challenge</b><br />
          <pre>
{`arr = [5, 2, 4, 1]
# Apply Insertion Sort
# 💡 What is the final sorted array?
# ✅ Answer: [1, 2, 4, 5]`}
          </pre>
        </li>
        <li>
          <b>✅ Q3: Count Comparisons (Worst Case)</b><br />
          If we sort an array <code>[5, 4, 3, 2, 1]</code> using Insertion Sort, how many comparisons will be made?<br />
          ✅ Answer: 10 comparisons (n(n-1)/2 = 5×4/2)
        </li>
      </ul>

      <h3>🧠 When to Use Insertion Sort?</h3>
      <ul>
        <li>✅ Great for small datasets</li>
        <li>✅ Best when array is nearly sorted</li>
        <li>❌ Avoid for large unsorted arrays</li>
      </ul>
    </section>
  </div>
);

export default InsertionSort;