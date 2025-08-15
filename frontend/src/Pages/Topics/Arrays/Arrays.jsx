import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Arrays.css';

const Arrays = () => {
    const location = useLocation();
  // Show main content only on /topics/arrays, otherwise show nested route
  const isRoot = location.pathname === '/topics/arrays';

  return (
    <div className="arrays-page">
      <aside className="sidebar">
        <h3>Sorting & Searching</h3>
        <ul>
          <li><Link to="Bubble-Sort">Bubble Sort</Link></li>
          <li><Link to="Selection-Sort">Selection Sort</Link></li>
          <li><Link to="Insertion-Sort">Insertion Sort</Link></li>
          <li><Link to="Quick-Sort">Quick Sort</Link></li>
          <li><Link to="Counting-Sort">Counting Sort</Link></li>
          <li><Link to="Radix-Sort">Radix Sort</Link></li>
          <li><Link to="Merge-Sort">Merge Sort</Link></li>
          <li><Link to="Linear-Search">Linear Search</Link></li>
          <li><Link to="Binary-Search">Binary Search</Link></li>
        </ul>
      </aside>

      <main className="array-content">
        {isRoot ? (
          <>
        <h1>📌 Arrays: Complete Guide</h1>

        <p>
          Arrays are one of the most fundamental and widely used data structures in programming. They store elements of the same data type at contiguous memory locations and are indexed starting from <code>0</code>.
        </p>

        <h2>🔍 Characteristics:</h2>
        <ul>
          <li>Linear and static data structure</li>
          <li>Fixed size (in languages like C/C++)</li>
          <li>Indexed access – constant time <strong>O(1)</strong></li>
          <li>Efficient for storing and accessing data</li>
        </ul>

        <h2>💡 Memory Layout:</h2>
        <p>
          Memory in arrays is allocated in a contiguous block. This makes accessing elements faster because addresses can be calculated directly using:
        </p>
        <pre>{`address = base_address + (index * size_of_element)`}</pre>

        <h3>🔸 C++ Example:</h3>
        <pre>
{`int arr[4] = {10, 20, 30, 40};
cout << arr[2]; // Output: 30`}
        </pre>

        <h3>🔹 Python Example:</h3>
        <pre>
{`arr = [10, 20, 30, 40]
print(arr[2])  # Output: 30`}
        </pre>

        <h2>🧠 Common Use-Cases:</h2>
        <ul>
          <li>Storing collections like marks, scores, prices</li>
          <li>Implementing other data structures (heap, stack, etc.)</li>
          <li>Dynamic Programming tables</li>
          <li>Sorting and searching problems</li>
        </ul>

        <h2>⚠️ Limitations:</h2>
        <ul>
          <li>Fixed size once declared (unless using dynamic arrays or lists)</li>
          <li>Insertion and deletion at the beginning or middle is costly</li>
        </ul>

        <h2>🏁 When to Use Arrays?</h2>
        <ul>
          <li>You know the number of elements in advance</li>
          <li>Need fast access via index</li>
          <li>Memory is not a concern</li>
        </ul>

        <h2>📘 Real-World Time Complexity Tips:</h2>
        <ul>
          <li><strong>O(1):</strong> Instant access (e.g., get element at index)</li>
          <li><strong>O(n):</strong> Traverse or linear search</li>
          <li><strong>O(n²):</strong> Nested loops (e.g., bubble sort)</li>
          <li><strong>O(log n):</strong> Binary search in sorted arrays</li>
        </ul>

        <h2>💻 Practice Questions:</h2>

        <h3>🔹 Question 1: Find the Maximum Element</h3>
        <p><strong>Input:</strong> [5, 1, 8, 3, 9] <br /><strong>Output:</strong> 9</p>

        <h4>Python</h4>
        <pre>
{`arr = [5, 1, 8, 3, 9]
print(max(arr))`}
        </pre>

        <h4>C++</h4>
        <pre>
{`int arr[] = {5, 1, 8, 3, 9};
int maxVal = arr[0];
for (int i = 1; i < 5; i++) {
  if (arr[i] > maxVal) maxVal = arr[i];
}
cout << maxVal;`}
        </pre>

        <h3>🔹 Question 2: Reverse the Array</h3>
        <p><strong>Input:</strong> [1, 2, 3, 4] <br /><strong>Output:</strong> [4, 3, 2, 1]</p>

        <h4>Python</h4>
        <pre>
{`arr = [1, 2, 3, 4]
print(arr[::-1])`}
        </pre>

        <h4>C++</h4>
        <pre>
{`int arr[] = {1, 2, 3, 4};
int n = 4;
for (int i = 0; i < n / 2; i++) {
  swap(arr[i], arr[n - i - 1]);
}
for (int i = 0; i < n; i++) cout << arr[i] << " ";`}
        </pre>

        <h3>🔹 Question 3: Check if Array is Sorted</h3>
        <p><strong>Input:</strong> [1, 2, 3, 4] <br /><strong>Output:</strong> True</p>

        <h4>Python</h4>
        <pre>
{`arr = [1, 2, 3, 4]
print(all(arr[i] <= arr[i+1] for i in range(len(arr)-1)))`}
        </pre>

        <h4>C++</h4>
        <pre>
{`int arr[] = {1, 2, 3, 4};
bool isSorted = true;
for (int i = 0; i < 3; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    break;
  }
}
cout << (isSorted ? "True" : "False");`}
        </pre>

        <p>
          Now explore different sorting and searching techniques implemented using arrays via the sidebar. Each algorithm includes a step-by-step example and explanation to help you master it!
        </p>
          </>
        ) : (
        <Outlet />
        )}
      </main>
    </div>
  );
};

export default Arrays;
