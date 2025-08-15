import React from "react";
import "./QuickSort.css";

const QuickSort = () => (
  <div className="quick-sort-container">
    <section className="quick-sort-section">
      <h2>⚡ Quicksort – Fast & Powerful Sorting</h2>

      <h3>🧠 What is Quicksort?</h3>
      <p>
        Quicksort is one of the fastest sorting algorithms. It uses a divide-and-conquer approach by choosing a pivot and splitting the array into two sub-arrays:
      </p>
      <ul>
        <li>Elements less than the pivot → go to the left</li>
        <li>Elements greater than the pivot → go to the right</li>
      </ul>

      <h3>⚙️ How It Works – Step-by-Step</h3>
      <ol>
        <li>Choose a pivot (we’ll pick the last element here).</li>
        <li>Partition the array: values less than pivot to left, greater to right.</li>
        <li>Swap pivot to its correct position.</li>
        <li>Recursively apply Quicksort to the left and right sub-arrays.</li>
        <li>Done when all sub-arrays have 0 or 1 element.</li>
      </ol>

      <h3>🔍 Manual Example</h3>
      <p>Let’s sort this array: <code>[11, 9, 12, 7, 3]</code></p>
      <ul>
        <li>Choose 3 as pivot → all values are greater → swap with first → <code>[3, 9, 12, 7, 11]</code></li>
        <li>New pivot → 11, organize values → <code>[3, 9, 7, 12, 11]</code> → swap → <code>[3, 9, 7, 11, 12]</code></li>
        <li>Pivot → 7, swap with 9 → <code>[3, 7, 9, 11, 12]</code> ✅ Done!</li>
      </ul>

      <h3>🧾 Python Code – Recursive Implementation</h3>
      <pre>
{`def partition(array, low, high):
    pivot = array[high]
    i = low - 1

    for j in range(low, high):
        if array[j] <= pivot:
            i += 1
            array[i], array[j] = array[j], array[i]

    array[i+1], array[high] = array[high], array[i+1]
    return i+1

def quicksort(array, low=0, high=None):
    if high is None:
        high = len(array) - 1

    if low < high:
        pivot_index = partition(array, low, high)
        quicksort(array, low, pivot_index - 1)
        quicksort(array, pivot_index + 1, high)

arr = [64, 34, 25, 12, 22, 11, 90, 5]
quicksort(arr)
print("Sorted array:", arr)`}
      </pre>

      <h3>💻 C++ Implementation</h3>
      <pre>
{`#include <iostream>
using namespace std;

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
  
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }

    swap(arr[i+1], arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    quickSort(arr, 0, n - 1);

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
}`}
      </pre>

      <h3>⏱️ Time Complexity of Quicksort</h3>
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
            <td>Best</td>
            <td>O(n log n)</td>
            <td>Pivot divides array into equal halves</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>O(n log n)</td>
            <td>Most practical cases</td>
          </tr>
          <tr>
            <td>Worst</td>
            <td>O(n²)</td>
            <td>When pivot is always the largest or smallest element</td>
          </tr>
        </tbody>
      </table>
      <p>
        ✅ In practice, Quicksort performs better than Bubble, Insertion, and Selection Sort due to fewer operations and smarter partitioning.
      </p>

      <h3>🧪 DSA Practice Exercise</h3>
      <p>Fill in the missing recursive calls for this Quicksort template:</p>
      <pre>
{`def partition(array, low, high):
    pivot = array[high]
    i = low - 1

    for j in range(low, high):
        if array[j] <= pivot:
            i += 1
            array[i], array[j] = array[j], array[i]

    array[i+1], array[high] = array[high], array[i+1]
    return i+1

def quicksort(array, low=0, high=None):
    if high is None:
        high = len(array) - 1

    if low < high:
        pivot_index = partition(array, low, high)
        # Fill these:
        quicksort(array, low, pivot_index - 1)
        quicksort(array, pivot_index + 1, high)

arr = [64, 34, 25, 12, 22, 11, 90, 5]
quicksort(arr)
print("Sorted array:", arr)`}
      </pre>

      <h3>🚀 Why Use Quicksort?</h3>
      <ul>
        <li>✅ Very fast for large arrays</li>
        <li>✅ Efficient memory usage (in-place)</li>
        <li>❌ Can degrade to O(n²) in worst-case (can be improved using random pivot)</li>
      </ul>
    </section>
  </div>
);

export default QuickSort;