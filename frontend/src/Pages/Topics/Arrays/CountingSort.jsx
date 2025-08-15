import React from "react";
import "./CountingSort.css";

const CountingSort = () => (
  <div className="counting-sort-container">
    <section className="counting-sort-section">
      <h2>📊 Counting Sort – Efficient Sorting Without Comparison</h2>

      <h3>📌 What is Counting Sort?</h3>
      <p>
        Counting Sort is a non-comparison-based algorithm that sorts integers by counting their frequency. It’s highly efficient when the input contains non-negative integers within a limited range.
      </p>

      <h3>⚙️ How Counting Sort Works – Step-by-Step</h3>
      <ol>
        <li>Create a counting array to count how many times each value appears.</li>
        <li>Traverse the input array, incrementing the counting array at the index of each value.</li>
        <li>Rebuild the sorted array using the counting array.</li>
      </ol>
      <p>
        <b>Note:</b> Counting Sort works only for non-negative integers and is most effective when the range of values (k) is not much greater than the array length (n).
      </p>

      <h3>📋 Manual Example</h3>
      <p>Input:</p>
      <pre>
{`myArray = [2, 3, 0, 2, 3, 2]`}
      </pre>
      <table>
        <thead>
          <tr>
            <th>Step</th>
            <th>Action</th>
            <th>countArray</th>
            <th>myArray</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Create countArray of size 4</td>
            <td>[0, 0, 0, 0]</td>
            <td>[2, 3, 0, 2, 3, 2]</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Count each element</td>
            <td>[1, 0, 3, 2]</td>
            <td>[] (values removed)</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Rebuild the array</td>
            <td>[0, 2, 2, 2, 3, 3]</td>
            <td>[0, 2, 2, 2, 3, 3]</td>
          </tr>
        </tbody>
      </table>
      <p>✅ The array is now sorted!</p>

      <h3>💻 Python Code</h3>
      <pre>
{`def countingSort(arr):
    max_val = max(arr)
    count = [0] * (max_val + 1)

    while len(arr) > 0:
        num = arr.pop(0)
        count[num] += 1

    for i in range(len(count)):
        while count[i] > 0:
            arr.append(i)
            count[i] -= 1

    return arr

unsortedArr = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3]
sortedArr = countingSort(unsortedArr)
print("Sorted array:", sortedArr)`}
      </pre>
      <p>
        <b>🧠 Output:</b><br />
        <code>Sorted array: [1, 2, 2, 2, 3, 3, 3, 4, 5, 6, 6]</code>
      </p>

      <h3>⏱️ Time Complexity</h3>
      <table>
        <thead>
          <tr>
            <th>Case</th>
            <th>Time Complexity</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Best Case</td>
            <td>O(n)</td>
            <td>Small value range (k ≪ n)</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>O(n + k)</td>
            <td>k = range of input</td>
          </tr>
          <tr>
            <td>Worst Case</td>
            <td>O(n²) or worse</td>
            <td>k ≫ n (inefficient memory usage)</td>
          </tr>
        </tbody>
      </table>

      <h3>⚠️ Limitations of Counting Sort</h3>
      <ul>
        <li>❌ Does not work on negative numbers</li>
        <li>❌ Inefficient if range (k) is large</li>
        <li>✅ Great for dense, small-range integer sorting</li>
      </ul>

      <h3>🧪 DSA Practice Exercise</h3>
      <p>
        <b>🧩 Exercise:</b><br />
        Using Counting Sort, sort this array:
      </p>
      <pre>
{`[1, 0, 5, 3, 3, 1, 3, 3, 4, 4]`}
      </pre>
      <p>
        <b>What is the counting array?</b>
      </p>
      <pre>
{`[1, 2, 0, 4, 2, 1]  # index = number, value = frequency
✅ 1 value of 0
✅ 2 values of 1
✅ 0 values of 2
✅ 4 values of 3
✅ 2 values of 4
✅ 1 value of 5`}
      </pre>

      <h3>🎓 Summary</h3>
      <ul>
        <li>✅ Stable and fast for small k</li>
        <li>✅ No comparisons</li>
        <li>❌ Not general-purpose (non-integers, negatives, large range)</li>
        <li>🚀 When used in the right case, it's one of the fastest sorting algorithms</li>
      </ul>
    </section>
  </div>
);

export default CountingSort;