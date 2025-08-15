import React from "react";
import "./MF.css";

const MF = () => {
  return (
    <div className="mf-container">
      <section className="mf-section">
        <h2>🚰 Maximum Flow in a Flow Network</h2>

        <h3>💡 What is a Flow Network?</h3>
        <p>
          A flow network is a directed graph where each edge has a capacity, and we want to send as much "flow" as possible from a source node <b>s</b> to a sink node <b>t</b>.
        </p>

        <h3>🌊 Real-World Analogy</h3>
        <p>Imagine a network of water pipes:</p>
        <ul>
          <li>Each pipe (edge) can carry a certain maximum amount of water (capacity).</li>
          <li>Water must start at a source tank (node s) and end at a sink tank (node t).</li>
          <li>You want to maximize the amount of water that reaches the sink.</li>
        </ul>

        <h3>📘 Key Terms</h3>
        <table>
          <thead>
            <tr>
              <th>Term</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Capacity</td><td>Maximum flow allowed on an edge</td></tr>
            <tr><td>Flow</td><td>Actual flow sent along an edge (≤ capacity)</td></tr>
            <tr><td>Residual Graph</td><td>Shows remaining capacity after sending flow</td></tr>
            <tr><td>Augmenting Path</td><td>A path from s to t in the residual graph with available capacity</td></tr>
            <tr><td>Bottleneck</td><td>The edge with the minimum remaining capacity in an augmenting path</td></tr>
          </tbody>
        </table>

        <h3>📊 Problem Statement</h3>
        <p>
          Given a directed graph with capacities and a source <b>s</b> and sink <b>t</b>, find the maximum amount of flow that can be pushed from <b>s</b> to <b>t</b> without violating capacity constraints.
        </p>

        <h3>⚙️ Ford-Fulkerson Algorithm (Using BFS: Edmonds-Karp)</h3>
        <p>This is the most common and beginner-friendly way to compute maximum flow.</p>

        <h4>✅ Steps of the Ford-Fulkerson Method:</h4>
        <ol>
          <li>Initialize flow in all edges to 0.</li>
          <li>
            While there exists an augmenting path from s to t in the residual graph:
            <ul>
              <li>Find the minimum residual capacity (bottleneck).</li>
              <li>Add this flow to each edge along the path.</li>
              <li>Update the residual graph.</li>
            </ul>
          </li>
          <li>Repeat until no more augmenting paths exist.</li>
          <li>The total flow from s is the max flow.</li>
        </ol>

        <p><b>📌 Time Complexity:</b> O(VE²) using BFS</p>

        <h3>🔢 Example Graph</h3>
        <pre>{`Source (s)
   |
   v
[ 0 ] --10--> [ 1 ] --10--> [ 3 ] --> Sink (t)
   |                         ^
   \\----5----> [ 2 ] --------/
`}</pre>
        <ul>
          <li>Capacity from 0→1 = 10</li>
          <li>Capacity from 0→2 = 5</li>
          <li>Capacity from 1→3 = 10</li>
          <li>Capacity from 2→3 = 10</li>
        </ul>
        <p>✅ Max Flow = 15</p>

        <h3>💻 C++ Code: Edmonds-Karp</h3>
        <pre>{`#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

bool bfs(vector<vector<int>>& rGraph, int s, int t, vector<int>& parent) {
    int V = rGraph.size();
    vector<bool> visited(V, false);
    queue<int> q;

    q.push(s);
    visited[s] = true;
    parent[s] = -1;

    while (!q.empty()) {
        int u = q.front(); q.pop();

        for (int v = 0; v < V; v++) {
            if (!visited[v] && rGraph[u][v] > 0) {
                q.push(v);
                parent[v] = u;
                visited[v] = true;
            }
        }
    }

    return visited[t];
}

int fordFulkerson(vector<vector<int>>& graph, int s, int t) {
    int V = graph.size();
    vector<vector<int>> rGraph = graph;
    vector<int> parent(V);
    int maxFlow = 0;

    while (bfs(rGraph, s, t, parent)) {
        int pathFlow = INT_MAX;

        for (int v = t; v != s; v = parent[v]) {
            int u = parent[v];
            pathFlow = min(pathFlow, rGraph[u][v]);
        }

        for (int v = t; v != s; v = parent[v]) {
            int u = parent[v];
            rGraph[u][v] -= pathFlow;
            rGraph[v][u] += pathFlow;
        }

        maxFlow += pathFlow;
    }

    return maxFlow;
}`}</pre>

        <h3>🔍 Important Concepts</h3>
        <ul>
          <li>
            <b>🔁 Residual Capacity:</b> After augmentation:
            <ul>
              <li>Decrease forward edge capacity</li>
              <li>Increase reverse edge capacity</li>
            </ul>
          </li>
          <li>
            <b>🧩 Augmenting Paths:</b> As long as a path with positive capacity exists from s to t, we can push more flow.
          </li>
        </ul>

        <h3>💥 Applications</h3>
        <table>
          <thead>
            <tr><th>Field</th><th>Use Case</th></tr>
          </thead>
          <tbody>
            <tr><td>Network Routing</td><td>Internet data transmission</td></tr>
            <tr><td>Bipartite Matching</td><td>Job assignment problems</td></tr>
            <tr><td>Image Segmentation</td><td>Computer Vision</td></tr>
            <tr><td>Project Scheduling</td><td>Resource allocation</td></tr>
            <tr><td>Circulation with Demands</td><td>Supply chains</td></tr>
          </tbody>
        </table>

        <h3>🧠 Related Problems</h3>
        <table>
          <thead>
            <tr><th>Problem</th><th>Platform</th></tr>
          </thead>
          <tbody>
            <tr><td>Max Flow</td><td>CP-Algorithms</td></tr>
            <tr><td>Minimum Cut</td><td>Leetcode</td></tr>
            <tr><td>Bipartite Matching</td><td>GeeksforGeeks</td></tr>
            <tr><td>Push-Relabel</td><td>GFG</td></tr>
          </tbody>
        </table>

        <h3>📌 Summary</h3>
        <ul>
          <li>Maximum Flow measures the max "stuff" from source to sink.</li>
          <li>Ford-Fulkerson (BFS version) is simple and effective.</li>
          <li>Concepts include residual graphs, augmenting paths, and bottlenecks.</li>
          <li>Applications include networks, matching, and logistics.</li>
        </ul>
      </section>
    </div>
  );
};

export default MF;
