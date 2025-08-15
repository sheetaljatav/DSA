import React from "react";
import "./MergeSort.css";

const MergeSort = () => (
  <div className="bubble-sort-container">
    <section className="bubble-sort-section">
      <h2>🧠 What is Merge Sort?</h2>
      <p>
        Merge Sort is a <b>"divide and conquer"</b> sorting algorithm.<br />
        It means:<br />
        👉 Break the array into smaller parts →<br />
        👉 Sort the small parts →<br />
        👉 Merge them back into a big, sorted array.
      </p>

      <h3>🧺 Imagine This:</h3>
      <p>
        You have a messy pile of clothes (array of numbers).<br />
        You split the pile into two smaller piles...<br />
        Then split each of those again...<br />
        Until each pile has only one item.<br /><br />
        Now you start putting them back together in a way that they are sorted from smallest to biggest.
      </p>

      <h3>🔁 Step-by-step Example</h3>
      <p>Let’s say you want to sort this array:</p>
      <pre>[12, 8, 9, 3, 11, 5, 4]</pre>
      <b>Step 1: Split the array into halves</b>
      <p>Split until each sub-array has only 1 element.</p>
      <pre>
[12, 8, 9, 3, 11, 5, 4]
↓
[12, 8, 9]    [3, 11, 5, 4]
↓
[12] [8, 9]   [3, 11] [5, 4]
↓
[12] [8] [9]  [3] [11] [5] [4]
      </pre>
      <b>Step 2: Merge them in sorted order</b>
      <p>Now you combine the small parts step-by-step:</p>
      <ul>
        <li>[8] and [9] → <b>[8, 9]</b></li>
        <li>[12] and [8, 9] → <b>[8, 9, 12]</b></li>
        <li>[3] and [11] → <b>[3, 11]</b></li>
        <li>[5] and [4] → <b>[4, 5]</b></li>
        <li>[3, 11] and [4, 5] → <b>[3, 4, 5, 11]</b></li>
        <li>Finally, merge [8, 9, 12] and [3, 4, 5, 11] → <b>[3, 4, 5, 8, 9, 11, 12]</b></li>
      </ul>
      <p>✅ Done! Array is sorted!</p>

      <h3>💡 What’s Happening Behind the Scenes?</h3>
      <ul>
        <li>The array is divided again and again — this is called <b>recursion</b>.</li>
        <li>When combining (merging), we compare elements from two parts and build a sorted list.</li>
      </ul>

      <h3>✅ Why Use Merge Sort?</h3>
      <ul>
        <li>It's fast and reliable.</li>
        <li>Works well even if the array is shuffled or already sorted.</li>
        <li>Has a consistent time complexity.</li>
      </ul>

      <h3>🧮 Time Complexity:</h3>
      <pre>O(n log n)</pre>
      <p>
        This is faster than Bubble Sort or Insertion Sort, especially for large arrays.
      </p>

      <h3>🧑‍💻 Python Code (Simple)</h3>
      <pre>
{`def mergeSort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = mergeSort(arr[:mid])
    right = mergeSort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result += left[i:]
    result += right[j:]

    return result

arr = [12, 8, 9, 3, 11, 5, 4]
sortedArr = mergeSort(arr)
print("Sorted array:", sortedArr)`}
      </pre>

      <h3>🔁 Summary in One Line:</h3>
      <p>
        <b>Merge Sort = Break the array → sort small pieces → merge them back in order.</b>
      </p>
    </section>
  </div>
);

export default MergeSort;