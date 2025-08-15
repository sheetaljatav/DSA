import React from "react";
import "./Hash.css";

const Hash = () => (
  <div className="hash-container">
    <section className="hash-section">
      <h2>🔐 Hash Table – Explained Simply</h2>

      <h3>📌 What is a Hash Table?</h3>
      <p>
        A Hash Table is a data structure used to store data in key-value pairs. It’s very fast for searching, inserting, and deleting data.
      </p>
      <p>
        Think of it like a real-life dictionary – you use a word (key) to quickly find its meaning (value).
      </p>

      <h3>⚙️ How Does a Hash Table Work?</h3>
      <ul>
        <li>You give it a key (like "name").</li>
        <li>A hash function converts the key into an index.</li>
        <li>The value is stored at that index in an array.</li>
        <li>
          If two keys get the same index (called a collision), the hash table handles it using methods like:
          <ul>
            <li>Chaining (using linked lists)</li>
            <li>Open Addressing (finding next empty space)</li>
          </ul>
        </li>
      </ul>

      <h3>🧠 Example</h3>
      <pre>
{`hash_table = {
    "name": "Sheetal",
    "age": 22,
    "city": "Delhi"
}`}
      </pre>
      <p>
        Here, "name", "age", and "city" are keys, and "Sheetal", 22, and "Delhi" are the values.
      </p>

      <h3>⚡ Why Use Hash Tables?</h3>
      <ul>
        <li>✅ Fast access: O(1) time on average.</li>
        <li>✅ Efficient for searching large data.</li>
        <li>✅ Useful in caching, database indexing, and more.</li>
      </ul>

      <h3>🧩 Hash Map vs Hash Table vs Hash Set</h3>
      <b>🔸 Hash Map</b>
      <p>
        A Hash Map is just another name for a Hash Table that stores key-value pairs.<br />
        <b>In Python:</b> dict<br />
        <b>In Java:</b> HashMap<br />
        <b>In C++:</b> unordered_map
      </p>
      <pre>
{`hash_map = {}
hash_map["fruit"] = "apple"
print(hash_map["fruit"])  # Output: apple`}
      </pre>
      <b>🔸 Hash Set</b>
      <p>
        A Hash Set only stores unique values, not key-value pairs.<br />
        <b>In Python:</b> set<br />
        <b>In Java:</b> HashSet<br />
        <b>In C++:</b> unordered_set
      </p>
      <pre>
{`hash_set = set()
hash_set.add(5)
hash_set.add(10)
hash_set.add(5)  # Duplicate; will not be added again
print(hash_set)  # Output: {10, 5}`}
      </pre>

      <h3>🧑‍💻 Code Examples</h3>
      <b>✅ Hash Table (Python dict)</b>
      <pre>
{`my_table = {}
my_table["name"] = "Sheetal"
my_table["age"] = 22

print("Name:", my_table["name"])`}
      </pre>
      <b>✅ Hash Map in C++</b>
      <pre>
{`#include <iostream>
#include <unordered_map>
using namespace std;

int main() {
    unordered_map<string, int> hashMap;
    hashMap["apple"] = 10;
    hashMap["banana"] = 20;

    cout << "Apple price: " << hashMap["apple"] << endl;
    return 0;
}`}
      </pre>
      <b>✅ Hash Set in Python</b>
      <pre>
{`my_set = set()
my_set.add(1)
my_set.add(2)
my_set.add(1)  # Duplicate will be ignored

print(my_set)  # Output: {1, 2}`}
      </pre>

      <h3>📈 Time Complexity (Average Case)</h3>
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Hash Table / Hash Map</th>
            <th>Hash Set</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Insert</td>
            <td>O(1)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Search (lookup)</td>
            <td>O(1)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Delete</td>
            <td>O(1)</td>
            <td>O(1)</td>
          </tr>
        </tbody>
      </table>
      <p>
        ⚠️ In worst cases (when many collisions happen), time can go up to O(n).
      </p>

      <h3>✅ Summary</h3>
      <ul>
        <li>Hash Table stores data in key-value format.</li>
        <li>Hash Map is just another name for hash table in many languages.</li>
        <li>Hash Set stores unique values only, without keys.</li>
        <li>Super fast and widely used in real-world apps (search engines, databases, compilers).</li>
      </ul>
    </section>
  </div>
);

export default Hash;