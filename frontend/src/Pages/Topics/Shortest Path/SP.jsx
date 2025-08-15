import React from "react";
import "./SP.css";

const SP = () => {
  return (
    <div className="queue-container">
      <section className="queue-section">
        <h2>🚀 Shortest Path in Graphs – DSA Explained</h2>

        <h3>📌 What is the Shortest Path?</h3>
        <p>
          In graph theory, the shortest path is the minimum distance or minimum number of steps required to travel from one node (or vertex) to another. It’s one of the most fundamental and widely-used problems in Data Structures and Algorithms (DSA).
        </p>
        <ul>
          <li>Navigation systems (Google Maps)</li>
          <li>Network routing</li>
          <li>Social networks (finding degrees of separation)</li>
          <li>Game development (pathfinding for characters)</li>
        </ul>

        <h3>🧠 Key Concepts Before Diving In</h3>
        <ul>
          <li>
            <b>Weighted vs Unweighted Graphs</b>
            <ul>
              <li><b>Unweighted Graph:</b> All edges have equal cost (typically 1).</li>
              <li><b>Weighted Graph:</b> Each edge has a specific weight or cost associated with it.</li>
            </ul>
          </li>
          <li>
            <b>Directed vs Undirected Graphs</b>
            <ul>
              <li><b>Directed Graph:</b> Edges have direction (A → B).</li>
              <li><b>Undirected Graph:</b> Edges are bidirectional (A — B).</li>
            </ul>
          </li>
        </ul>

        <h3>🔍 Popular Shortest Path Algorithms</h3>
        <h4>1. Breadth-First Search (BFS) – For Unweighted Graphs</h4>
        <p>
          <b>Use Case:</b> When all edges have equal weight (or no weights).<br />
          <b>Idea:</b> BFS explores all neighbors level-by-level, so the first time you reach a node, it’s through the shortest path.
        </p>
        <pre>{`// C++ Code for BFS Shortest Path
void bfsShortestPath(vector<vector<int>>& graph, int start) {
    queue<int> q;
    vector<bool> visited(graph.size(), false);
    vector<int> distance(graph.size(), -1);

    q.push(start);
    visited[start] = true;
    distance[start] = 0;

    while (!q.empty()) {
        int node = q.front(); q.pop();

        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                distance[neighbor] = distance[node] + 1;
                q.push(neighbor);
            }
        }
    }

    // Distance from start to each node
}`}</pre>

        <h4>2. Dijkstra’s Algorithm – For Weighted Graphs with Non-Negative Weights</h4>
        <p>
          <b>Use Case:</b> Graphs where all weights are ≥ 0 (positive or zero).<br />
          <b>Idea:</b> Use a min-heap (priority queue) to always pick the closest unvisited node.
        </p>
        <pre>{`// C++ Code for Dijkstra's Algorithm
priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;
vector<int> dist(n, INT_MAX);
dist[source] = 0;
pq.push({0, source});

while (!pq.empty()) {
    auto [d, u] = pq.top(); pq.pop();
    if (d > dist[u]) continue;

    for (auto [v, w] : adj[u]) {
        if (dist[u] + w < dist[v]) {
            dist[v] = dist[u] + w;
            pq.push({dist[v], v});
        }
    }
}
// Time Complexity: O((V + E) log V)
`}</pre>

        <h4>3. Bellman-Ford Algorithm – Handles Negative Weights</h4>
        <p>
          <b>Use Case:</b> Graphs with negative weights but no negative cycles.<br />
          <b>Idea:</b> Relax all edges V - 1 times, where V is the number of vertices.
        </p>
        <pre>{`vector<int> dist(V, INT_MAX);
dist[source] = 0;

for (int i = 0; i < V - 1; ++i) {
    for (auto [u, v, w] : edges) {
        if (dist[u] != INT_MAX && dist[u] + w < dist[v]) {
            dist[v] = dist[u] + w;
        }
    }
}
// Bonus: Can detect negative weight cycles.
`}</pre>

        <h4>4. Floyd-Warshall Algorithm – All Pairs Shortest Path</h4>
        <p>
          <b>Use Case:</b> When you need shortest paths between every pair of vertices.<br />
          <b>Idea:</b> Dynamic Programming approach.
        </p>
        <pre>{`for (int k = 0; k < V; ++k)
    for (int i = 0; i < V; ++i)
        for (int j = 0; j < V; ++j)
            if (dist[i][k] + dist[k][j] < dist[i][j])
                dist[i][j] = dist[i][k] + dist[k][j];
// Time Complexity: O(V³)
`}</pre>

        <h3>🎯 When to Use Which Algorithm?</h3>
        <table>
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Handles Negative Weights</th>
              <th>Best For</th>
              <th>Time Complexity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BFS</td>
              <td>❌</td>
              <td>Unweighted graphs</td>
              <td>O(V + E)</td>
            </tr>
            <tr>
              <td>Dijkstra</td>
              <td>❌</td>
              <td>Positive weights</td>
              <td>O((V + E) log V)</td>
            </tr>
            <tr>
              <td>Bellman-Ford</td>
              <td>✅</td>
              <td>Negative weights</td>
              <td>O(V × E)</td>
            </tr>
            <tr>
              <td>Floyd-Warshall</td>
              <td>✅</td>
              <td>All-pairs shortest path</td>
              <td>O(V³)</td>
            </tr>
          </tbody>
        </table>

        <h3>💡 Real-Life Example</h3>
        <p>
          Suppose you’re in a city and want to reach your destination using the least travel time. Roads are edges, intersections are nodes, and travel times are weights. A shortest path algorithm helps you find the fastest route!
        </p>

        <h3>🧠 Tips to Master Shortest Path Problems</h3>
        <ul>
          <li>Start with BFS for unweighted cases.</li>
          <li>Use Dijkstra with a priority queue and adjacency list.</li>
          <li>Understand edge relaxation in Bellman-Ford.</li>
          <li>Remember Floyd-Warshall is good for small dense graphs.</li>
        </ul>

        <h3>📚 Practice Problems</h3>
        <ul>
          <li>
            <a href="https://leetcode.com/problems/network-delay-time/" target="_blank" rel="noopener noreferrer">
              Dijkstra’s Algorithm – Leetcode 743. Network Delay Time
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/" target="_blank" rel="noopener noreferrer">
              Bellman-Ford – GFG
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/" target="_blank" rel="noopener noreferrer">
              Floyd-Warshall – Leetcode 1334
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SP;