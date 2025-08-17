import React from "react";
import "./Graphs.css";

const Graphs = () => {
  return (
    <div className="queue-container">
      <section className="queue-section">
        <h2>📘 Graphs in Data Structures</h2>
        <p>
          A <b>Graph</b> is a non-linear data structure consisting of nodes (also called <b>vertices</b>) connected by edges. It's used to represent relationships or connections between pairs of elements.
        </p>

        <h3>✅ Real-Life Examples:</h3>
        <ul>
          <li><b>Google Maps:</b> Locations are nodes, roads are edges.</li>
          <li><b>Social Media:</b> People are nodes, friendships/follows are edges.</li>
          <li><b>Web Crawlers:</b> Web pages are nodes, links are edges.</li>
        </ul>

        <h3>🌐 Key Graph Concepts</h3>
        <ul>
          <li>
            <b>Vertex (Node):</b> An individual entity in a graph. <br />
            <i>Example:</i> A person in a social network.
          </li>
          <li>
            <b>Edge:</b> A connection between two vertices. <br />
            <i>Example:</i> A friendship or a road.
          </li>
        </ul>

        <h3>🧭 Types of Graphs</h3>
        <h4 id="undirected">🔸 Undirected Graph</h4>
        <p>Edges don't have a direction.<br />Example: A friendship connection – if A is a friend of B, B is also a friend of A.</p>
        <pre>{`A ----- B
 \\     /
   \\ /
    C`}</pre>

        <h4 id="directed">🔸 Directed Graph (Digraph)</h4>
        <p>Edges have a direction.<br />Example: A Twitter follow – if A follows B, B doesn't necessarily follow A.</p>
        <pre>{`A → B → C
↑       ↓
← ← ← ← ←`}</pre>

        <h4 id="weighted">🔸 Weighted Graph</h4>
        <p>Each edge has a weight (cost, distance, time, etc.).<br />Example: Roads between cities with distances as weights.</p>
        <pre>{`A --5--> B
B --3--> C
A --2--> C`}</pre>

        <h4 id="unweighted">🔸 Unweighted Graph</h4>
        <p>Edges have no weight. They just represent a connection.</p>

        <h4 id="cyclic">🔸 Cyclic Graph</h4>
        <p>Contains at least one cycle (a path that starts and ends at the same node).</p>

        <h4 id="acyclic">🔸 Acyclic Graph</h4>
        <p>Does not contain any cycles.</p>

        <h4 id="connected">🔸 Connected Graph</h4>
        <p>There is a path between every pair of vertices.</p>

        <h4 id="disconnected">🔸 Disconnected Graph</h4>
        <p>Some vertices are not connected by any path.</p>

        <h3>🧮 Graph Representations</h3>
        <ul>
          <li>
            <b>Adjacency Matrix:</b> A 2D array showing which nodes are connected.
          </li>
          <li>
            <b>Adjacency List:</b> A list where each node stores its connected neighbors.
          </li>
        </ul>

        <h3>🧠 Common Graph Algorithms</h3>
        <ul>
          <li>Breadth-First Search (BFS)</li>
          <li>Depth-First Search (DFS)</li>
          <li>Dijkstra's Algorithm</li>
          <li>Kruskal's / Prim's Algorithm</li>
          <li>Topological Sorting</li>
        </ul>

        <h3>📌 Simple Example (Adjacency List)</h3>
        <pre>{`# Graph with 3 nodes: A, B, C (Python)
graph = {
  'A': ['B', 'C'],
  'B': ['A'],
  'C': ['A']
}`}</pre>
        <pre>{`// C++ representation
unordered_map<char, vector<char>> graph;
graph['A'] = {'B', 'C'};
graph['B'] = {'A'};
graph['C'] = {'A'};`}</pre>

        <h2>✅ Use Cases in DSA and Real Life</h2>
        <ul>
          <li>Navigation systems</li>
          <li>Social networking</li>
          <li>Network packet routing</li>
          <li>Web crawling</li>
          <li>Recommendation systems</li>
        </ul>
      </section>
    </div>
  );
};

export default Graphs;