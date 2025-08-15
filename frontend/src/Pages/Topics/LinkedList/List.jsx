import React from "react";
import "./List.css";

const List = () => (
  <div className="list-page">
    <aside className="list-sidebar">
      <h3>Types of Linked List</h3>
      <ul>
        <li>Singly Linked List</li>
        <li>Doubly Linked List</li>
        <li>Circular Linked List</li>
      </ul>
    </aside>
    <main className="list-content">
      <h1>🔗 Linked List – A Beginner’s Guide</h1>

      <h2>📌 What is a Linked List?</h2>
      <p>
        A Linked List is a linear data structure where each element (called a node) contains:
      </p>
      <ul>
        <li><b>Data</b> — the value stored</li>
        <li><b>Next</b> — a pointer/reference to the next node in the sequence</li>
      </ul>
      <p>
        Unlike arrays, linked lists do not store elements in contiguous memory locations. Instead, each node is connected using pointers, forming a chain.
      </p>

      <h2>🧠 Real-Life Analogy</h2>
      <p>
        Think of a linked list as a chain of people, where each person holds:
      </p>
      <ul>
        <li>A number (data)</li>
        <li>The hand of the next person (pointer to the next node)</li>
      </ul>

      <h2>🎯 Why Use Linked Lists?</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Benefit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dynamic size</td>
            <td>Easily grow/shrink as needed</td>
          </tr>
          <tr>
            <td>Efficient insertion/deletion</td>
            <td>No shifting like arrays</td>
          </tr>
          <tr>
            <td>No pre-allocation</td>
            <td>Memory efficient</td>
          </tr>
        </tbody>
      </table>

      <h2>🔍 Types of Linked Lists</h2>
      <ul>
        <li><b>Singly Linked List</b>: Each node points to the next node. One-directional.</li>
        <li><b>Doubly Linked List</b>: Each node points to both the next and previous node. Bi-directional traversal.</li>
        <li><b>Circular Linked List</b>: Last node points back to the first node. Forms a circular chain.</li>
      </ul>

      <h2>🧱 Basic Structure of a Node</h2>
      <h3>🔧 Visual:</h3>
      <pre>
{`[ Data | Next ] → [ Data | Next ] → [ Data | NULL ]
      ^head`}
      </pre>
      <p>
        Each box is a node. The last node points to NULL, indicating the end.
      </p>

      <h2>🔁 Common Operations</h2>
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Insert</td>
            <td>Add a node (beginning, end, middle)</td>
          </tr>
          <tr>
            <td>Delete</td>
            <td>Remove a node</td>
          </tr>
          <tr>
            <td>Search</td>
            <td>Find a value</td>
          </tr>
          <tr>
            <td>Traverse</td>
            <td>Visit all nodes one-by-one</td>
          </tr>
        </tbody>
      </table>

      <h2>👨‍💻 Python Example</h2>
      <pre>
{`class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insertAtEnd(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        temp = self.head
        while temp.next:
            temp = temp.next
        temp.next = new_node

    def display(self):
        temp = self.head
        while temp:
            print(temp.data, end=" → ")
            temp = temp.next
        print("None")

# Example usage
ll = LinkedList()
ll.insertAtEnd(10)
ll.insertAtEnd(20)
ll.insertAtEnd(30)
ll.display()`}
      </pre>
      <b>✅ Output:</b>
      <pre>10 → 20 → 30 → None</pre>

      <h2>👨‍💻 C++ Example</h2>
      <pre>
{`#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = NULL;
    }
};

class LinkedList {
public:
    Node* head;

    LinkedList() {
        head = NULL;
    }

    void insertAtEnd(int value) {
        Node* newNode = new Node(value);
        if (!head) {
            head = newNode;
            return;
        }
        Node* temp = head;
        while (temp->next) {
            temp = temp->next;
        }
        temp->next = newNode;
    }

    void display() {
        Node* temp = head;
        while (temp) {
            cout << temp->data << " → ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }
};

int main() {
    LinkedList ll;
    ll.insertAtEnd(10);
    ll.insertAtEnd(20);
    ll.insertAtEnd(30);
    ll.display();
    return 0;
}`}
      </pre>
      <b>✅ Output:</b>
      <pre>10 → 20 → 30 → NULL</pre>

      <h2>🧠 Time Complexity of Operations</h2>
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Time Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Insertion at beginning</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Insertion at end</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Deletion</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Search</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Traversal</td>
            <td>O(n)</td>
          </tr>
        </tbody>
      </table>

      <h2>✅ Summary</h2>
      <ul>
        <li>A Linked List is a flexible and dynamic data structure.</li>
        <li>It stores data in nodes that are linked using pointers.</li>
        <li>Great for frequent insertions/deletions.</li>
        <li>Comes in three forms: Singly, Doubly, and Circular.</li>
      </ul>
    </main>
  </div>
);

export default List;