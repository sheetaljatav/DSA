import React from "react";
import "./LinearSearch.css";

const LinearSearch = () => (
  <div className="bubble-sort-container">
    <section className="bubble-sort-section">
      <h2>🧐 What is Linear Search?</h2>
      <p>
        Linear Search is a very simple way to find something in a list.
      </p>
      <ul>
        <li>👉 It starts from the beginning and checks one item at a time</li>
        <li>👉 If it finds the item, it says: “Here it is! Found at index X!”</li>
        <li>👉 If it doesn’t find it, it says: “Sorry, not found!” (-1)</li>
      </ul>

      <h3>🧠 Real-life Example:</h3>
      <p>
        You’re looking for your friend’s phone number in a handwritten contact list 📒<br />
        You start from the top and go line by line until you find the name.<br />
        That’s Linear Search!
      </p>

      <h3>👣 Step-by-step Example:</h3>
      <p>Let’s search for value 11 in this array:</p>
      <pre>[12, 8, 9, 11, 5, 11]</pre>
      <ul>
        <li>Check index 0 → 12 ❌</li>
        <li>Check index 1 → 8 ❌</li>
        <li>Check index 2 → 9 ❌</li>
        <li>Check index 3 → 11 ✅ 🎯</li>
      </ul>
      <p>✔️ Found! It’s at index 3</p>

      <h3>🧑‍💻 Code (Simple Python):</h3>
      <pre>
{`def linearSearch(arr, targetVal):
    for i in range(len(arr)):
        if arr[i] == targetVal:
            return i  # 🎯 Found, return index
    return -1  # ❌ Not found`}
      </pre>
      <b>How to Use:</b>
      <pre>
{`arr = [3, 7, 2, 9, 5]
target = 9

result = linearSearch(arr, target)

if result != -1:
    print("Found at index", result)
else:
    print("Not found")`}
      </pre>

      <h3>⏱️ Time Complexity</h3>
      <ul>
        <li>Best case (target is at the beginning): <b>O(1)</b></li>
        <li>Worst case (target is at the end or missing): <b>O(n)</b></li>
      </ul>
      <p>So overall, Time Complexity is: <b>O(n)</b></p>

      <h3>✅ Summary (One Line)</h3>
      <p>
        Linear Search goes from left to right, checking each item until it finds the one you're looking for — or not.
      </p>
    </section>
  </div>
);

export default LinearSearch;