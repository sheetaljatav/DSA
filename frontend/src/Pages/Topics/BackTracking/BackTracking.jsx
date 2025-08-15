import React from "react";
import "./BackTracking.css";

const BackTracking = () => {
  return (
    <div className="queue-container">
      <section className="queue-section">
        <h2>🔁 Backtracking in DSA</h2>

        <h3>📌 What is Backtracking?</h3>
        <p>
          Backtracking is a smart problem-solving algorithm used to build solutions step-by-step and "backtrack" (go back) when a step leads to a dead end.
        </p>
        <p>
          🧠 It's like exploring a maze — you try one path, and if it doesn't lead to the exit, you go back and try a different one.
        </p>

        <h3>🧭 How Does Backtracking Work?</h3>
        <ul>
          <li><b>Choose:</b> Pick a possible option.</li>
          <li><b>Explore:</b> Go deeper with that choice.</li>
          <li><b>Un-choose (Backtrack):</b> If it doesn’t lead to a solution, undo the choice and try another.</li>
        </ul>
        <p>
          Backtracking is often used when:
          <ul>
            <li>You need all possible solutions.</li>
            <li>The solution must satisfy certain constraints.</li>
            <li>The problem involves decision-making at every step.</li>
          </ul>
        </p>

        <h3>🔍 Common Problems Using Backtracking</h3>
        <ul>
          <li>N-Queens Problem</li>
          <li>Sudoku Solver</li>
          <li>Subset Sum</li>
          <li>Permutations &amp; Combinations</li>
          <li>Rat in a Maze</li>
          <li>Word Search</li>
          <li>Knight’s Tour</li>
        </ul>

        <h3>⚙️ Backtracking vs Brute Force</h3>
        <table>
          <thead>
            <tr>
              <th>Brute Force</th>
              <th>Backtracking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tries all combinations</td>
              <td>Prunes bad paths early</td>
            </tr>
            <tr>
              <td>Inefficient</td>
              <td>More optimized</td>
            </tr>
            <tr>
              <td>No constraint checking</td>
              <td>Checks constraints on the go</td>
            </tr>
          </tbody>
        </table>

        <h3>🧠 Backtracking Strategy</h3>
        <p>A generic backtracking algorithm:</p>
        <pre>{`void backtrack(parameters) {
    if (solution is found) {
        // process the solution
        return;
    }

    for (each possible choice) {
        if (choice is valid) {
            make the choice;
            backtrack(next step);
            undo the choice; // backtrack
        }
    }
}`}</pre>

        <h3>📘 Example: Generating All Subsets</h3>
        <pre>{`#include <iostream>
#include <vector>
using namespace std;

void generateSubsets(vector<int>& nums, vector<int>& subset, int index) {
    if (index == nums.size()) {
        // Print current subset
        for (int val : subset) cout << val << " ";
        cout << endl;
        return;
    }

    // Include current element
    subset.push_back(nums[index]);
    generateSubsets(nums, subset, index + 1);

    // Exclude current element (backtrack)
    subset.pop_back();
    generateSubsets(nums, subset, index + 1);
}

int main() {
    vector<int> nums = {1, 2, 3};
    vector<int> subset;
    generateSubsets(nums, subset, 0);
    return 0;
}`}</pre>
        <h4>🟢 Output:</h4>
        <pre>{`1 2 3
1 2
1 3
1
2 3
2
3
`}</pre>

        <h3>✨ Benefits of Backtracking</h3>
        <ul>
          <li>Finds all feasible solutions</li>
          <li>Efficiently skips invalid paths</li>
          <li>Useful in constraint satisfaction problems</li>
        </ul>

        <h3>💡 Real-Life Analogy</h3>
        <p>
          Solving a jigsaw puzzle: Try a piece, if it doesn’t fit, remove it and try another.
        </p>
      </section>
    </div>
  );
};

export default BackTracking;