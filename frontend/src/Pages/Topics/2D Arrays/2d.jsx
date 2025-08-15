import React from "react";
import "./2d.css";

const TwoDArrays = () => (
  <div className="queue-container">
    <section className="queue-section">
      <h2>🔢 2D Arrays in DSA – Complete Guide</h2>

      <h3>📌 What is a 2D Array?</h3>
      <p>
        A 2D array (Two-Dimensional Array) is like a table or a matrix with rows and columns. It's essentially an array of arrays, where data is stored in a grid-like structure.
      </p>
      <p>
        <b>Syntax (C++):</b> <code>int arr[3][4];</code><br />
        This creates a 2D array with 3 rows and 4 columns.
      </p>

      <h3>🧠 Why Use 2D Arrays?</h3>
      <ul>
        <li>Matrix operations</li>
        <li>Grids in games</li>
        <li>Dynamic programming tables</li>
        <li>Graphs (Adjacency Matrix)</li>
        <li>Image processing</li>
        <li>Pathfinding algorithms</li>
      </ul>

      <h3>✅ Key Terminology</h3>
      <ul>
        <li><b>Row:</b> Horizontal group of elements</li>
        <li><b>Column:</b> Vertical group of elements</li>
        <li><b>Cell:</b> Each individual data point at <code>arr[i][j]</code> where <b>i</b> is the row index and <b>j</b> is the column index.</li>
      </ul>

      <h3>🛠️ Declaration & Initialization</h3>
      <b>👉 Static Declaration (Fixed Size):</b>
      <pre>{`int arr[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};`}</pre>
      <b>👉 Dynamic Input (User-defined size):</b>
      <pre>{`int rows = 3, cols = 4;
int arr[rows][cols]; // In C++ (with constant size or in main)
// Note: For truly dynamic size in C++, use vectors.`}</pre>

      <h3>🧮 Accessing and Modifying Elements</h3>
      <pre>{`arr[0][2] = 10;     // Sets the element at first row, third column to 10
int x = arr[1][1];  // Accesses element in second row, second column`}</pre>

      <h3>🔁 Traversing a 2D Array (Row-wise)</h3>
      <pre>{`for (int i = 0; i < rows; ++i) {
    for (int j = 0; j < cols; ++j) {
        cout << arr[i][j] << " ";
    }
    cout << endl;
}`}</pre>

      <h3>🔁 Column-wise Traversal</h3>
      <pre>{`for (int j = 0; j < cols; ++j) {
    for (int i = 0; i < rows; ++i) {
        cout << arr[i][j] << " ";
    }
    cout << endl;
}`}</pre>

      <h3>📘 Common Interview Problems Using 2D Arrays</h3>
      <table>
        <thead>
          <tr>
            <th>Problem Type</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matrix traversal</td>
            <td>Spiral Order, Zigzag, Diagonal</td>
          </tr>
          <tr>
            <td>Search problems</td>
            <td>Search in a sorted matrix</td>
          </tr>
          <tr>
            <td>Pathfinding</td>
            <td>Unique Paths, Maze Solving</td>
          </tr>
          <tr>
            <td>Dynamic Programming</td>
            <td>Longest Common Subsequence, 0/1 Knapsack</td>
          </tr>
          <tr>
            <td>Game/Grid problems</td>
            <td>Sudoku Solver, Minesweeper</td>
          </tr>
        </tbody>
      </table>

      <h3>💡 Tips to Master 2D Arrays</h3>
      <ul>
        <li>Visualize as a grid – Think of each element as a cell in a table.</li>
        <li>Use nested loops – Outer loop for rows, inner for columns.</li>
        <li>Boundary check – Always check <code>i &lt; rows &amp;&amp; j &lt; cols</code> to avoid runtime errors.</li>
        <li>Dry run on paper – Especially helpful for debugging grid problems.</li>
        <li>Use <code>vector&lt;vector&lt;int&gt;&gt;</code> in C++ for dynamic sizes.</li>
      </ul>

      <h3>📦 Using 2D Arrays with STL in C++</h3>
      <b>Declaration:</b>
      <pre>{`vector<vector<int>> matrix(3, vector<int>(4, 0)); // 3 rows, 4 cols initialized with 0`}</pre>
      <b>Traversal:</b>
      <pre>{`for (int i = 0; i < matrix.size(); ++i) {
    for (int j = 0; j < matrix[0].size(); ++j) {
        cout << matrix[i][j] << " ";
    }
    cout << endl;
}`}</pre>

      <h3>🧠 Difference Between 1D vs 2D Array</h3>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>1D Array</th>
            <th>2D Array</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Structure</td>
            <td>Linear</td>
            <td>Tabular (Grid)</td>
          </tr>
          <tr>
            <td>Syntax</td>
            <td>arr[i]</td>
            <td>arr[i][j]</td>
          </tr>
          <tr>
            <td>Use Cases</td>
            <td>Lists, stacks</td>
            <td>Matrices, DP tables</td>
          </tr>
        </tbody>
      </table>

      <h3>🔗 Real-life Applications</h3>
      <ul>
        <li>Game boards (like chess, tic-tac-toe)</li>
        <li>Maps/Grids in GPS systems</li>
        <li>Spreadsheet programs</li>
        <li>Image pixel data</li>
        <li>Maze solving</li>
      </ul>

      <h3>🧪 Practice Problems (2D Array Based)</h3>
      <ul>
        <li>
          <a href="https://leetcode.com/problems/spiral-matrix/" target="_blank" rel="noopener noreferrer">
            Spiral Matrix – Leetcode
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/problems/search-a-2d-matrix/" target="_blank" rel="noopener noreferrer">
            Search a 2D Matrix – Leetcode
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/problems/set-matrix-zeroes/" target="_blank" rel="noopener noreferrer">
            Set Matrix Zeroes – Leetcode
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/problems/flood-fill/" target="_blank" rel="noopener noreferrer">
            Flood Fill – Leetcode
          </a>
        </li>
      </ul>

      <h3>🧾 Summary</h3>
      <ul>
        <li>2D arrays are essential for solving problems that involve matrix or grid structures.</li>
        <li>Mastering nested loops and index handling is key.</li>
        <li>Understanding both row-wise and column-wise access will improve your problem-solving efficiency.</li>
      </ul>
    </section>
  </div>
);

export default TwoDArrays;