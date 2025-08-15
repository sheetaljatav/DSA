import React from "react";
import "./Queues.css";

const Queues = () => (
  <div className="queue-container">
    <section className="queue-section">
      <h2>📥 Queues – Simple Explanation</h2>

      <h3>📌 What is a Queue?</h3>
      <p>
        A Queue is a linear data structure that stores elements in the First In First Out (FIFO) order.
        Think of it like a line at a ticket counter – the first person in line is served first.
      </p>

      <h3>🧠 Basic Queue Operations</h3>
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>enqueue()</td><td>Add an element at the end (rear)</td></tr>
          <tr><td>dequeue()</td><td>Remove an element from the front</td></tr>
          <tr><td>peek()</td><td>View the front element without removing it</td></tr>
          <tr><td>isEmpty()</td><td>Check if the queue is empty</td></tr>
          <tr><td>size()</td><td>Return the number of elements in queue</td></tr>
        </tbody>
      </table>

      <h3>🧱 Visual Example</h3>
      <pre>
{`Front → [ 10 ][ 20 ][ 30 ] ← Rear`}
      </pre>
      <p>
        10 entered first, so it will be removed first.<br />
        New elements like 40 will be added at the rear.
      </p>

      <h3>🧑‍💻 Python Code Example</h3>
      <pre>
{`class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, val):
        self.queue.append(val)

    def dequeue(self):
        if not self.isEmpty():
            return self.queue.pop(0)
        return "Queue is empty"

    def peek(self):
        if not self.isEmpty():
            return self.queue[0]
        return "Queue is empty"

    def isEmpty(self):
        return len(self.queue) == 0

    def size(self):
        return len(self.queue)

# Example
q = Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
print("Front:", q.peek())
print("Removed:", q.dequeue())`}
      </pre>

      <h3>🧑‍💻 C++ Code Example</h3>
      <pre>
{`#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;

    q.push(10);  // enqueue
    q.push(20);
    q.push(30);

    cout << "Front: " << q.front() << endl;
    q.pop();     // dequeue
    cout << "New Front: " << q.front() << endl;

    return 0;
}`}
      </pre>

      <h3>🧩 Types of Queues</h3>
      <ul>
        <li>
          <b>Simple Queue:</b> Basic FIFO queue. Insertion at the rear, removal from the front.
        </li>
        <li>
          <b>Circular Queue:</b> The last position connects back to the first. Efficiently uses space by reusing emptied positions.
        </li>
        <li>
          <b>Priority Queue:</b> Elements are processed based on priority, not arrival time. The element with higher priority gets dequeued first.
        </li>
        <li>
          <b>Deque (Double-Ended Queue):</b> Insertion and deletion can be done from both ends (front and rear). Types: Input-restricted deque and Output-restricted deque.
        </li>
      </ul>

      <h3>📈 Time Complexity</h3>
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Enqueue</td><td>O(1)</td></tr>
          <tr><td>Dequeue</td><td>O(1)</td></tr>
          <tr><td>Peek / Front</td><td>O(1)</td></tr>
          <tr><td>isEmpty</td><td>O(1)</td></tr>
        </tbody>
      </table>

      <h3>✅ Summary</h3>
      <ul>
        <li>A Queue is a linear data structure that follows FIFO order.</li>
        <li>Common operations: enqueue, dequeue, peek, isEmpty, size.</li>
        <li>Useful in real-world situations like task scheduling, printers, and customer service.</li>
        <li>Types include: Simple Queue, Circular Queue, Priority Queue, and Deque.</li>
      </ul>
    </section>
  </div>
);

export default Queues;