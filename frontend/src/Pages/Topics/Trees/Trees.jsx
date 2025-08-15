import React from "react";
import "./Trees.css";

const Trees = () => {
  return (
    <div className="arrays-page">
      <aside className="sidebar">
        <h3>📚 Types of Trees</h3>
        <ul>
          <li><a href="#binary-tree">Binary Tree</a></li>
          <li><a href="#bst">Binary Search Tree (BST)</a></li>
          <li><a href="#avl">AVL Tree</a></li>
          <li><a href="#heap">Heap</a></li>
          <li><a href="#b-tree">B-Tree</a></li>
          <li><a href="#trie">Trie</a></li>
          <li><a href="#segment-tree">Segment Tree</a></li>
          <li><a href="#n-ary">N-ary Tree</a></li>
        </ul>
      </aside>
      <main className="array-content">
        <h1>🌳 Trees in Data Structures</h1>
        <h2>🔷 What is a Tree?</h2>
        <p>
          A <b>Tree</b> is a non-linear hierarchical data structure made up of nodes connected by edges. Think of it like an upside-down family tree or a folder structure on your computer.
        </p>
        <ul>
          <li>It starts from a <b>Root</b> node.</li>
          <li>Each node can have children, and each child can have more children.</li>
          <li>It forms a parent-child relationship.</li>
        </ul>

        <h2>🎯 Why Use Trees?</h2>
        <ul>
          <li>Fast searching and sorting</li>
          <li>Hierarchical storage (like folder structures)</li>
          <li>Efficient decision making (like AI game trees)</li>
          <li>Representing structured data like XML, HTML, or JSON</li>
        </ul>

        <h2>📌 Real-World Example</h2>
        <pre>
Root (C:/)
├── Documents
│   ├── Resume.docx
│   └── Project
│       └── Report.docx
└── Music
    ├── Pop
    └── Rock
        </pre>
        <p>This structure is a tree. Every folder/file is a node, and the Root is C:/.</p>

        <h2>🧠 Important Terms</h2>
        <table>
          <thead>
            <tr>
              <th>Term</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Root</td><td>Top node (starting point)</td></tr>
            <tr><td>Child</td><td>Node connected below a parent</td></tr>
            <tr><td>Parent</td><td>Node with one or more children</td></tr>
            <tr><td>Leaf</td><td>Node with no children</td></tr>
            <tr><td>Edge</td><td>Link between parent and child</td></tr>
            <tr><td>Subtree</td><td>A smaller tree from any node</td></tr>
            <tr><td>Height of Tree</td><td>Longest path from root to a leaf node</td></tr>
            <tr><td>Depth of Node</td><td>Path from root to that node</td></tr>
          </tbody>
        </table>

        <h2>🔁 Tree Traversal (Visiting All Nodes)</h2>
        <p>Traversal means visiting all the nodes of a tree in a specific order.</p>
        <ul>
          <li><b>Inorder (Left → Root → Right):</b> <code>[20, 30, 40]</code></li>
          <li><b>Preorder (Root → Left → Right):</b> <code>[30, 20, 40]</code></li>
          <li><b>Postorder (Left → Right → Root):</b> <code>[20, 40, 30]</code></li>
          <li><b>Level Order (Breadth-First):</b> <code>[30, 20, 40]</code></li>
        </ul>

        <h2>🧱 Example of a Binary Tree</h2>
        <pre>
   30
  /  \
 20   40
        </pre>
        <ul>
          <li>30 is the root</li>
          <li>20 is the left child</li>
          <li>40 is the right child</li>
        </ul>

        <h2 id="binary-tree">1️⃣ Binary Tree</h2>
        <p>Each node can have at most two children (left and right).</p>
        <pre>
    A
   / \
  B   C
        </pre>
        <p><b>Use case:</b> basic tree structure</p>

        <h2 id="bst">2️⃣ Binary Search Tree (BST)</h2>
        <p>Each node follows: Left &lt; Root, Right &gt; Root</p>
        <pre>
    50
   /  \
  30   70
        </pre>
        <p><b>Use case:</b> Fast search, insertion, deletion in O(log n)</p>

        <h2 id="avl">3️⃣ AVL Tree</h2>
        <p>
          A self-balancing Binary Search Tree. The difference in height between left and right subtrees is always ≤ 1.
        </p>
        <p><b>Use case:</b> Balanced performance in dynamic BST operations</p>

        <h2 id="heap">4️⃣ Heap</h2>
        <p>
          A complete binary tree with the heap property:<br />
          <b>Max-Heap:</b> Parent ≥ Children<br />
          <b>Min-Heap:</b> Parent ≤ Children
        </p>
        <p><b>Use case:</b> Priority Queues, Heap Sort</p>

        <h2 id="b-tree">5️⃣ B-Tree</h2>
        <p>
          A generalization of BST, mainly used in databases and file systems. It stores data in sorted order and allows multi-child nodes.
        </p>
        <p><b>Use case:</b> Disk-based data access</p>

        <h2 id="trie">6️⃣ Trie (Prefix Tree)</h2>
        <p>
          Used to store strings, where each level represents a character.
        </p>
        <pre>
         (root)
         / 
        c
        |
        a
       / \
      t   r
        </pre>
        <p><b>Use case:</b> Dictionary word search, autocomplete</p>

        <h2 id="segment-tree">7️⃣ Segment Tree</h2>
        <p>
          Used for range queries and updates in logarithmic time.
        </p>
        <p><b>Use case:</b> Competitive programming problems</p>

        <h2 id="n-ary">8️⃣ N-ary Tree</h2>
        <p>
          Each node can have more than two children.
        </p>
        <pre>
    A
  / | \
 B  C  D
        </pre>
        <p><b>Use case:</b> Representing hierarchical data like a menu or DOM structure</p>
      </main>
    </div>
  );
};

export default Trees;