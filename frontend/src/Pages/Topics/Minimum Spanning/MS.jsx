import React from "react";
import "./MS.css";

const MS = () => {
  return (
    <div className="queue-container">
      <section className="queue-section">
        <h2>🌲 Minimum Spanning Tree (MST) – Explained for DSA</h2>

        <h3>📌 What is a Minimum Spanning Tree?</h3>
        <p>
          A Minimum Spanning Tree (MST) is a subset of the edges in a connected, weighted, undirected graph that:
        </p>
        <ul>
          <li>Connects all the vertices together (no disconnected nodes)</li>
          <li>Uses the minimum possible total edge weight</li>
          <li>Has no cycles (it forms a tree)</li>
        </ul>
        <p>
          If there are V vertices, then the MST will have exactly V - 1 edges.
        </p>

        <h3>✅ Real-World Analogy</h3>
        <p>
          Imagine you're an engineer laying cables to connect multiple cities. Each road between cities has a cost. You want to connect all cities with the least amount of cable (cost), and without forming loops. That’s exactly what a Minimum Spanning Tree helps you solve.
        </p>

        <h3>🧠 Properties of MST</h3>
        <ul>
          <li>
            <b>Unique MST?</b> An MST is not always unique. If multiple edges have the same weight, there can be multiple MSTs with the same total cost.
          </li>
          <li>Graph must be: <b>Connected</b>, <b>Undirected</b>, <b>Weighted</b></li>
          <li>
            <b>Cycle-Free:</b> MST is always a tree → it has no cycles and V-1 edges.
          </li>
        </ul>

        <h3>🔧 Algorithms to Find MST</h3>
        <p>There are two main algorithms to find the Minimum Spanning Tree:</p>

        <h4>1. Kruskal’s Algorithm – Greedy Approach</h4>
        <b>💡 Idea:</b>
        <ul>
          <li>Sort all edges by increasing weight.</li>
          <li>Pick the smallest edge.</li>
          <li>Add it to the MST only if it doesn’t form a cycle.</li>
          <li>Use Disjoint Set Union (DSU) or Union-Find to detect cycles.</li>
        </ul>
        <p>📦 Time Complexity: O(E log E), where E = number of edges</p>
        <pre>{`struct Edge {
    int u, v, wt;
};

bool cmp(Edge a, Edge b) {
    return a.wt < b.wt;
}

int find(int u, vector<int>& parent) {
    if (u == parent[u]) return u;
    return parent[u] = find(parent[u], parent);
}

void unionSet(int u, int v, vector<int>& parent) {
    parent[find(u, parent)] = find(v, parent);
}

int kruskal(int V, vector<Edge>& edges) {
    sort(edges.begin(), edges.end(), cmp);
    vector<int> parent(V);
    for (int i = 0; i < V; ++i) parent[i] = i;

    int mstWeight = 0;
    for (Edge e : edges) {
        if (find(e.u, parent) != find(e.v, parent)) {
            mstWeight += e.wt;
            unionSet(e.u, e.v, parent);
        }
    }
    return mstWeight;
}`}</pre>

        <h4>2. Prim’s Algorithm – Greedy with Priority Queue</h4>
        <b>💡 Idea:</b>
        <ul>
          <li>Start from any node.</li>
          <li>Always pick the minimum weight edge that connects a visited node to an unvisited node.</li>
          <li>Use a min-heap (priority queue) for efficiency.</li>
        </ul>
        <p>📦 Time Complexity: O(E log V)</p>
        <pre>{`int prim(int V, vector<vector<pair<int, int>>>& adj) {
    vector<bool> inMST(V, false);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;

    pq.push({0, 0}); // {weight, node}
    int mstWeight = 0;

    while (!pq.empty()) {
        auto [wt, u] = pq.top(); pq.pop();
        if (inMST[u]) continue;

        inMST[u] = true;
        mstWeight += wt;

        for (auto [v, weight] : adj[u]) {
            if (!inMST[v]) {
                pq.push({weight, v});
            }
        }
    }

    return mstWeight;
}`}</pre>

        <h3>🔍 Kruskal vs Prim: When to Use What?</h3>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Kruskal’s Algorithm</th>
              <th>Prim’s Algorithm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Approach</td>
              <td>Edge-based</td>
              <td>Vertex-based</td>
            </tr>
            <tr>
              <td>Data Structure</td>
              <td>Disjoint Set (Union-Find)</td>
              <td>Priority Queue (Min Heap)</td>
            </tr>
            <tr>
              <td>Best for</td>
              <td>Sparse graphs</td>
              <td>Dense graphs</td>
            </tr>
            <tr>
              <td>Time Complexity</td>
              <td>O(E log E)</td>
              <td>O(E log V)</td>
            </tr>
          </tbody>
        </table>

        <h3>💡 Real-Life Applications of MST</h3>
        <ul>
          <li>Designing network connections (like computer networks, pipelines)</li>
          <li>Electrical wiring systems in buildings</li>
          <li>Transportation planning</li>
          <li>Clustering in Machine Learning</li>
          <li>Image segmentation in Computer Vision</li>
        </ul>

        <h3>📚 Practice Problems</h3>
        <ul>
          <li>
            <a href="https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/" target="_blank" rel="noopener noreferrer">
              Kruskal's Algorithm – GFG
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/problems/min-cost-to-connect-all-points/" target="_blank" rel="noopener noreferrer">
              Prim's Algorithm – Leetcode 1584
            </a>
          </li>
          <li>
            <a href="https://www.hackerrank.com/challenges/kruskalmstrsub/problem" target="_blank" rel="noopener noreferrer">
              MST Practice – HackerRank
            </a>
          </li>
        </ul>

        <h3>🧠 Summary</h3>
        <ul>
          <li>MST is used to connect all vertices in the cheapest possible way.</li>
          <li>Two main algorithms: Kruskal (edge-based) and Prim (vertex-based).</li>
          <li>Useful in real-world systems where minimum connection cost is required.</li>
          <li>Both algorithms are based on Greedy Strategy.</li>
        </ul>
      </section>
    </div>
  );
};

export default MS;