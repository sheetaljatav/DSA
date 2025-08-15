import React from "react";
import "./BinarySearch.css";

const BinarySearch = () => (
  <div className="bubble-sort-container">
    <section className="bubble-sort-section">
      <h2>🌟 What is Binary Search?</h2>
      <p>
        Binary Search is a fast way to search in a sorted array.<br />
        It doesn’t check every element like Linear Search. Instead, it checks the middle and keeps cutting the search in half.<br />
        That’s why it’s so fast!
      </p>

      <h3>🎯 Real-Life Example:</h3>
      <p>
        Imagine you're looking for page 11 in a sorted book 📖 with 100 pages:
        <ul>
          <li>First, open the middle (page 50).</li>
          <li>Is 11 before 50? Yes → Search the left half</li>
          <li>Now middle of left is page 25</li>
          <li>Is 11 before 25? Yes → Go left again</li>
          <li>Keep doing this until you reach page 11!</li>
        </ul>
        That’s Binary Search!
      </p>

      <h3>🧠 Key Rule:</h3>
      <ul>
        <li>🟡 Binary Search only works on a <b>sorted array!</b></li>
      </ul>

      <h3>👣 How it works (Step-by-step)</h3>
      <p>Let’s say we want to find 11 in this sorted array:</p>
      <pre>[2, 3, 7, 7, 11, 15, 25]</pre>
      <ul>
        <li>Start with: left = 0, right = 6 (last index)</li>
        <li>Middle index = (0 + 6) // 2 = 3, value = 7 → 7 is less than 11 → go right</li>
        <li>New search area = [11, 15, 25], left = 4, right = 6, middle = 5 → value = 15 → too big → go left</li>
        <li>New search area = [11], left = 4, right = 4, middle = 4 → value = 11 ✅ Found at index 4</li>
      </ul>

      <h3>💻 Python Code (Simple):</h3>
      <pre>
{`def binarySearch(arr, targetVal):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == targetVal:
            return mid  # ✅ Found!

        elif arr[mid] < targetVal:
            left = mid + 1  # 🔍 Go right
        else:
            right = mid - 1  # 🔍 Go left

    return -1  # ❌ Not found`}
      </pre>
      <b>Example:</b>
      <pre>
{`arr = [1, 3, 5, 7, 9, 11, 13]
target = 11

result = binarySearch(arr, target)

if result != -1:
    print("Found at index", result)
else:
    print("Not found")`}
      </pre>

      <h3>📊 Time Complexity</h3>
      <p>
        Each time it cuts the array in half 🔪<br />
        So even if array is big, it's fast!
      </p>
      <p>
        ⏱️ <b>Time Complexity = O(log₂ n)</b>
      </p>
      <p>
        Example:<br />
        1,000,000 values? Binary Search needs only about 20 steps!
      </p>

      <h3>✅ Summary (One Line):</h3>
      <p>
        Binary Search is a fast way to search in a sorted array by cutting the search area in half again and again until the value is found or not.
      </p>
    </section>
  </div>
);

export default BinarySearch;