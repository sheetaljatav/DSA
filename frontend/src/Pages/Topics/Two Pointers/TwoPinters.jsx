import React from "react";
import "./TwoPointers.css";

const TwoPointers = () => {
  return (
    <div className="queue-container">
      <section className="queue-section">
        <h2>👯 Two Pointers Technique in DSA</h2>

        <h3>📌 What is the Two Pointers Technique?</h3>
        <p>
          The Two Pointers technique uses two variables (pointers) that move through the data structure (like an array or string) from different directions or at different speeds to solve problems efficiently.
        </p>
        <p>
          🧠 It’s like two people walking toward or away from each other on a straight road to find something faster.
        </p>

        <h3>🧠 Why Use Two Pointers?</h3>
        <ul>
          <li>Reduces time complexity from O(n²) to O(n) in many problems</li>
          <li>Saves extra space</li>
          <li>Often used for sorted arrays, strings, and linked lists</li>
        </ul>

        <h3>📍 How Does It Work?</h3>
        <ul>
          <li>Start Pointers: One at the beginning, one at the end (or both at the beginning)</li>
          <li>Move: Based on conditions, move one or both pointers</li>
          <li>Stop: When a certain condition is met (e.g., they cross)</li>
        </ul>

        <h3>🔍 Common Use Cases</h3>
        <ul>
          <li>Pair sum in sorted array</li>
          <li>Reversing an array or string</li>
          <li>Removing duplicates</li>
          <li>Container with most water</li>
          <li>Sorting squares of sorted array</li>
          <li>Linked list cycle detection (slow-fast pointer variation)</li>
        </ul>

        <h3>📘 Example 1: Pair Sum in Sorted Array</h3>
        <p>
          <b>Problem:</b> Given a sorted array and a target sum, find if there exists a pair with the given sum.
        </p>
        <pre>{`#include <iostream>
#include <vector>
using namespace std;

bool hasPairWithSum(vector<int>& nums, int target) {
    int left = 0;
    int right = nums.size() - 1;

    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target)
            return true;
        else if (sum < target)
            left++;
        else
            right--;
    }
    return false;
}

int main() {
    vector<int> nums = {1, 2, 4, 7, 11, 15};
    int target = 15;

    cout << (hasPairWithSum(nums, target) ? "Yes" : "No");
    return 0;
}`}</pre>
        <h4>🟢 Output:</h4>
        <pre>{`Yes`}</pre>

        <h3>📘 Example 2: Reversing an Array Using Two Pointers</h3>
        <pre>{`void reverseArray(vector<int>& arr) {
    int left = 0, right = arr.size() - 1;
    while (left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
}`}</pre>

        <h3>⚡ Time and Space Complexity</h3>
        <table>
          <thead>
            <tr>
              <th>Operation</th>
              <th>Complexity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Time</td>
              <td>O(n)</td>
            </tr>
            <tr>
              <td>Space</td>
              <td>O(1) (in-place)</td>
            </tr>
          </tbody>
        </table>

        <h3>🧠 Slow and Fast Pointer Variation</h3>
        <p>
          Used in Linked List Cycle Detection:
          <ul>
            <li>Slow pointer moves 1 step</li>
            <li>Fast pointer moves 2 steps</li>
            <li>If they meet, a cycle exists</li>
          </ul>
        </p>

        <h3>✨ Real-Life Analogy</h3>
        <p>
          Two friends start from opposite ends of a shelf looking for a book. They meet in the middle where the book is — quicker than one person checking every book!
        </p>

        <h3>✅ Summary</h3>
        <table>
          <thead>
            <tr>
              <th>Use Case</th>
              <th>Pattern</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sum of pairs</td>
              <td>Start one at beginning, one at end</td>
            </tr>
            <tr>
              <td>Reverse array</td>
              <td>Swap elements from both ends</td>
            </tr>
            <tr>
              <td>Move zeros to end</td>
              <td>One pointer for zero, one for non-zero</td>
            </tr>
            <tr>
              <td>Remove duplicates (sorted array)</td>
              <td>Slow pointer marks valid index</td>
            </tr>
          </tbody>
        </table>

        <h3>🧪 Practice Problems</h3>
        <ul>
          <li>Two Sum II (LeetCode)</li>
          <li>Remove Duplicates from Sorted Array</li>
          <li>Container With Most Water</li>
          <li>Move Zeroes</li>
          <li>Merge Sorted Arrays (in-place)</li>
        </ul>
      </section>
    </div>
  );
};

export default TwoPointers;