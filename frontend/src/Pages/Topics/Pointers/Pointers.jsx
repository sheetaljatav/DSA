import React from "react";
import "./Pointers.css";

const Pointers = () => {
  return (
    <div className="queue-container">
      <section className="queue-section">
        <h2>📍 Pointers in DSA (Data Structures and Algorithms)</h2>

        <h3>📌 What is a Pointer?</h3>
        <p>
          A pointer is a variable that stores the memory address of another variable.
        </p>
        <p>
          💡 Think of a pointer as a signpost that tells you where to find the actual data in memory.
        </p>

        <h3>🧠 Why Are Pointers Important?</h3>
        <ul>
          <li>Allow direct memory access and manipulation</li>
          <li>Enable dynamic memory allocation</li>
          <li>Useful in linked lists, trees, graphs, and recursion</li>
          <li>Improve performance by avoiding copying large data</li>
        </ul>

        <h3>🧪 How to Declare a Pointer in C++</h3>
        <pre>{`int a = 5;         // normal integer variable
int* ptr = &a;     // pointer to an integer storing the address of a`}</pre>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>*</td>
              <td>Declares a pointer OR dereferences it to get the value</td>
            </tr>
            <tr>
              <td>&amp;</td>
              <td>"Address of" operator — gets memory address of a variable</td>
            </tr>
          </tbody>
        </table>

        <h3>🔍 Example</h3>
        <pre>{`#include <iostream>
using namespace std;

int main() {
    int a = 10;
    int* ptr = &a;

    cout << "Value of a: " << a << endl;
    cout << "Address of a: " << &a << endl;
    cout << "Pointer ptr holds: " << ptr << endl;
    cout << "Value at pointer (dereference): " << *ptr << endl;

    return 0;
}`}</pre>
        <h4>🟢 Output:</h4>
        <pre>{`Value of a: 10
Address of a: 0x61ff08 (example)
Pointer ptr holds: 0x61ff08
Value at pointer (dereference): 10`}</pre>

        <h3>🔄 Changing Value Using Pointer</h3>
        <pre>{`*ptr = 20;
cout << a;  // Output will now be 20`}</pre>
        <p>You’re updating <b>a</b> by modifying the value at the pointer's address!</p>

        <h3>🧱 Pointer and Arrays</h3>
        <pre>{`int arr[] = {1, 2, 3};
int* ptr = arr;

cout << *ptr << endl;     // 1
cout << *(ptr + 1) << endl; // 2
arr[i] is same as *(arr + i)`}</pre>
        <ul>
          <li>Arrays and pointers are closely related</li>
        </ul>

        <h3>🧠 Pointers to Pointers</h3>
        <pre>{`int a = 5;
int* p = &a;
int** pp = &p; // pointer to a pointer

cout << **pp << endl; // Output: 5`}</pre>

        <h3>⚙️ Dynamic Memory Allocation</h3>
        <p>Using <code>new</code> and <code>delete</code> in C++:</p>
        <pre>{`int* ptr = new int;  // dynamically allocate memory
*ptr = 50;
cout << *ptr << endl;
delete ptr;          // free the memory`}</pre>
        <p>✅ Used in linked lists, trees, and graphs for creating nodes at runtime.</p>

        <h3>🧵 Common Mistakes with Pointers</h3>
        <ul>
          <li>
            ❌ Uninitialized pointers
            <pre>{`int* ptr; // bad practice`}</pre>
            ✅ Always initialize:
            <pre>{`int* ptr = nullptr; // good`}</pre>
          </li>
          <li>
            ❌ Memory leaks<br />
            Always <b>delete</b> memory after using <b>new</b>
          </li>
          <li>
            ❌ Dangling pointers<br />
            Don’t access memory after it’s been deleted
          </li>
        </ul>

        <h3>✨ Applications of Pointers in DSA</h3>
        <ul>
          <li>Linked Lists: Nodes point to next nodes</li>
          <li>Trees: Pointers represent child/parent relationships</li>
          <li>Graphs: Dynamic edge/node creation</li>
          <li>Recursion: Pointers are used under the hood via the call stack</li>
        </ul>

        <h3>🎯 Summary</h3>
        <table>
          <thead>
            <tr>
              <th>Concept</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Declare pointer</td>
              <td>int* p;</td>
            </tr>
            <tr>
              <td>Assign address</td>
              <td>p = &amp;a;</td>
            </tr>
            <tr>
              <td>Dereference pointer</td>
              <td>*p</td>
            </tr>
            <tr>
              <td>Dynamic allocation</td>
              <td>int* p = new int;</td>
            </tr>
            <tr>
              <td>Free memory</td>
              <td>delete p;</td>
            </tr>
            <tr>
              <td>Array access</td>
              <td>*(arr + i) or arr[i]</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Pointers;