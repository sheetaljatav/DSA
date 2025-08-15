import React from 'react';
import './BubbleSort.css'; // Optional: for styling

const BubbleSort = () => {
  return (
    <div className="bubble-sort-container">
      <div className="bubble-sort-section">
        <h2>🔄 Bubble Sort</h2>
        <p>
          Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements,
          and swaps them if they are in the wrong order. This process is repeated until the array is completely sorted.
        </p>

        <h3>💡 Why is it called "Bubble" Sort?</h3>
        <p>
          Just like bubbles rising to the surface in water, the highest elements "bubble up" to the end of the array
          after each pass.
        </p>

        <h3>👣 How It Works:</h3>
        <ul>
          <li>Start at the beginning of the array.</li>
          <li>Compare the current element with the next one.</li>
          <li>If the current element is greater, swap them.</li>
          <li>Repeat this for the whole array.</li>
          <li>Repeat the process for <code>n-1</code> passes (where <code>n</code> is the array length).</li>
        </ul>

        <h3>📌 Manual Example:</h3>
        <p>Unsorted array: <code>[7, 12, 9, 11, 3]</code></p>
        <ol>
          <li>Compare 7 and 12 → ✅ No swap</li>
          <li>Compare 12 and 9 → ❌ Swap → <code>[7, 9, 12, 11, 3]</code></li>
          <li>Compare 12 and 11 → ❌ Swap → <code>[7, 9, 11, 12, 3]</code></li>
          <li>Compare 12 and 3 → ❌ Swap → <code>[7, 9, 11, 3, 12]</code></li>
        </ol>
        <p>➡ 12 is now in its final position.</p>

        <h3>💻 Basic Python Implementation:</h3>
        <pre>
{`arr = [64, 34, 25, 12, 22, 11, 90, 5]

n = len(arr)
for i in range(n-1):
    for j in range(n-i-1):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]

print("Sorted array:", arr)`}
        </pre>

        <h3>⚡ Optimized Version (Early Exit):</h3>
        <pre>
{`arr = [7, 3, 9, 12, 11]

n = len(arr)
for i in range(n-1):
    swapped = False
    for j in range(n-i-1):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
            swapped = True
    if not swapped:
        break

print("Sorted array:", arr)`}
        </pre>

        <h3>⏱️ Time Complexity:</h3>
        <ul>
          <li><strong>Best Case:</strong> O(n) — when the array is already sorted</li>
          <li><strong>Average Case:</strong> O(n²)</li>
          <li><strong>Worst Case:</strong> O(n²)</li>
        </ul>

        <h3>✅ When to Use:</h3>
        <ul>
          <li>Great for learning and visualization</li>
          <li>Works fine with small arrays</li>
          <li>Not suitable for large data sets due to poor performance</li>
        </ul>

        <h3>🎯 Example:</h3>
        <pre>
{`arr = [5, 3, 1, 4]
# Output: [1, 3, 4, 5]`}
        </pre>
      </div>
    </div>
  );
};

export default BubbleSort;
