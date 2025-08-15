import React from "react";
import "./Time.css";

const Time = () => (
  <div className="time-container">
    <section className="time-section">
      <h2>📊 Time Complexity in DSA (Data Structures and Algorithms)</h2>

      <h3>🔍 What is Time Complexity?</h3>
      <p>
        Time complexity tells us how much time an algorithm takes to run depending on the size of the input.<br />
        It helps us compare algorithms and choose the most efficient one—especially when working with large amounts of data.
      </p>

      <h3>🧠 Why is Time Complexity Important?</h3>
      <ul>
        <li>It predicts performance before running the code.</li>
        <li>It helps write scalable and faster programs.</li>
        <li>It’s a key concept in coding interviews.</li>
      </ul>

      <h3>📏 Big-O Notation</h3>
      <p>
        We use <b>Big-O</b> to describe time complexity. It gives the worst-case scenario of how long an algorithm might take.
      </p>
      <table>
        <thead>
          <tr>
            <th>Big-O Notation</th>
            <th>Name</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>O(1)</td>
            <td>Constant time</td>
            <td>Fastest. Takes same time no matter input size.</td>
            <td>Accessing array element</td>
          </tr>
          <tr>
            <td>O(log n)</td>
            <td>Logarithmic time</td>
            <td>Input size is halved each step. Very efficient.</td>
            <td>Binary Search</td>
          </tr>
          <tr>
            <td>O(n)</td>
            <td>Linear time</td>
            <td>Time increases with input size.</td>
            <td>Linear Search</td>
          </tr>
          <tr>
            <td>O(n log n)</td>
            <td>Linearithmic</td>
            <td>Efficient sorting. Slightly slower than linear, but still fast.</td>
            <td>Merge Sort, Quick Sort</td>
          </tr>
          <tr>
            <td>O(n²)</td>
            <td>Quadratic time</td>
            <td>Time increases rapidly. Slow for big inputs.</td>
            <td>Bubble Sort, Insertion Sort</td>
          </tr>
          <tr>
            <td>O(2ⁿ)</td>
            <td>Exponential time</td>
            <td>Extremely slow. Time doubles with each new element.</td>
            <td>Recursion-heavy problems like Fibonacci</td>
          </tr>
          <tr>
            <td>O(n!)</td>
            <td>Factorial time</td>
            <td>Extremely slow. Used in brute-force solutions.</td>
            <td>Traveling Salesman Problem</td>
          </tr>
        </tbody>
      </table>

      <h3>🧪 Real-Life Analogy</h3>
      <ul>
        <li><b>O(1):</b> Looking at the first page of a book.</li>
        <li><b>O(n):</b> Reading the entire book.</li>
        <li><b>O(log n):</b> Guessing a number between 1 and 100 by cutting the range in half every time.</li>
        <li><b>O(n²):</b> Comparing every student with every other student in a class.</li>
      </ul>

      <h3>⏱ Example in Python</h3>
      <pre>
{`# O(n) Linear Time
def print_all_items(arr):
    for item in arr:
        print(item)`}
      </pre>

      <h3>⏱ Example in C++</h3>
      <pre>
{`// O(n^2) Quadratic Time
void printPairs(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cout << arr[i] << ", " << arr[j] << endl;
        }
    }
}`}
      </pre>

      <h3>💡 How to Optimize Time Complexity?</h3>
      <ul>
        <li>Use Hash Tables for fast lookups.</li>
        <li>Use efficient algorithms (Binary Search &gt; Linear Search).</li>
        <li>Avoid nested loops unless necessary.</li>
        <li>Use divide and conquer strategies like Merge Sort.</li>
      </ul>

      <h3>🚀 Summary</h3>
      <p>
        Time complexity is a measure of how efficient your code is. It’s the key to writing code that runs fast—even with millions of inputs.<br />
        Understanding Big-O and optimizing your time complexity can take your problem-solving and coding skills to the next level!
      </p>
    </section>
  </div>
);

export default Time;