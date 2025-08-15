import React from "react";
import "./Stack.css";

const Stack = () => (
  <div className="stack-container">
    <section className="stack-section">
      <h2>🥞 Stacks – Simple DSA Guide</h2>

      <h3>🎯 What is a Stack?</h3>
      <p>
        A Stack is a linear data structure where elements are added and removed from the top only. It works like a pile of books or plates—the last item added is the first one to be removed.
      </p>
      <p><b>💡 LIFO – Last In, First Out</b></p>

      <h3>🛠️ Stack Basic Operations</h3>
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>push()</td><td>Add element on top of stack</td></tr>
          <tr><td>pop()</td><td>Remove and return top element</td></tr>
          <tr><td>peek() / top()</td><td>See top element without removing</td></tr>
          <tr><td>isEmpty()</td><td>Check if stack is empty</td></tr>
          <tr><td>size()</td><td>Return the number of elements</td></tr>
        </tbody>
      </table>

      <h3>✅ Real-Life Use Cases:</h3>
      <ul>
        <li>Undo/Redo in editors</li>
        <li>Call stack in recursion</li>
        <li>Backtracking in algorithms (DFS)</li>
        <li>Parentheses matching</li>
      </ul>

      <h3>🔸 Python Implementation (Class-Based)</h3>
      <pre>
{`class Stack:
    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item)

    def pop(self):
        if self.isEmpty():
            return "Stack is empty"
        return self.stack.pop()

    def peek(self):
        return "Stack is empty" if self.isEmpty() else self.stack[-1]

    def isEmpty(self):
        return len(self.stack) == 0

    def size(self):
        return len(self.stack)

# 💡 Demo
s = Stack()
s.push('A')
s.push('B')
s.push('C')
print("Peek:", s.peek())      # C
print("Pop:", s.pop())        # C
print("Peek after pop:", s.peek())  # B
print("Is Empty:", s.isEmpty())     # False
print("Size:", s.size())      # 2`}
      </pre>

      <h3>🔹 C++ Implementation</h3>
      <pre>
{`#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<string> myStack;

    // Push
    myStack.push("A");
    myStack.push("B");
    myStack.push("C");

    cout << "Peek (Top): " << myStack.top() << endl; // C

    // Pop
    myStack.pop();
    cout << "Peek after pop: " << myStack.top() << endl; // B

    // Check if empty
    cout << "Is Empty? " << (myStack.empty() ? "Yes" : "No") << endl;

    // Size
    cout << "Size: " << myStack.size() << endl;

    return 0;
}`}
      </pre>

      <h3>🔁 Stack Using Linked List (Python Advanced)</h3>
      <pre>
{`class Node:
    def __init__(self, val):
        self.value = val
        self.next = None

class Stack:
    def __init__(self):
        self.head = None
        self.size = 0

    def push(self, val):
        new_node = Node(val)
        new_node.next = self.head
        self.head = new_node
        self.size += 1

    def pop(self):
        if self.isEmpty():
            return "Stack is empty"
        popped = self.head.value
        self.head = self.head.next
        self.size -= 1
        return popped

    def peek(self):
        return "Stack is empty" if self.isEmpty() else self.head.value

    def isEmpty(self):
        return self.size == 0

    def stackSize(self):
        return self.size

# Demo
s = Stack()
s.push('A')
s.push('B')
s.push('C')
print("Pop:", s.pop())        # C
print("Peek:", s.peek())      # B
print("Is Empty:", s.isEmpty()) # False
print("Size:", s.stackSize())  # 2`}
      </pre>

      <h3>🧮 Time Complexity (All Implementations)</h3>
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Push</td><td>O(1)</td></tr>
          <tr><td>Pop</td><td>O(1)</td></tr>
          <tr><td>Peek</td><td>O(1)</td></tr>
          <tr><td>isEmpty</td><td>O(1)</td></tr>
          <tr><td>Size</td><td>O(1)</td></tr>
        </tbody>
      </table>

      <h3>🧠 Summary</h3>
      <ul>
        <li>Stacks follow LIFO.</li>
        <li>Use arrays or linked lists to implement.</li>
        <li>Useful in memory management, parsing, recursion, undo/redo, DFS, and more.</li>
      </ul>
    </section>
  </div>

  );

export default Stack;