import React from "react";
import "./Graphs.css";

const Graphs = () => {
  return (
    <div className="arrays-page">
      <aside className="sidebar">
        <h3>📌 Graph Types</h3>
        <ul>
          <li><a href="#undirected">Undirected Graph</a></li>
          <li><a href="#directed">Directed Graph</a></li>
          <li><a href="#weighted">Weighted Graph</a></li>
          <li><a href="#unweighted">Unweighted Graph</a></li>
          <li><a href="#cyclic">Cyclic Graph</a></li>
          <li><a href="#acyclic">Acyclic Graph</a></li>
          <li><a href="#connected">Connected Graph</a></li>
          <li><a href="#disconnected">Disconnected Graph</a></li>
        </ul>
      </aside>
      <main className="array-content">
        <h1>📘 Graphs in Data Structures</h1>
        <p>
          A <b>Graph</b> is a non-linear data structure consisting of nodes (also called <b>vertices</b>) connected by edges. It's used to represent relationships or connections between pairs of elements.
        </p>

        <h2>✅ Real-Life Examples:</h2>
        <ul>
          <li><b>Google Maps:</b> Locations are nodes, roads are edges.</li>
          <li><b>Social Media:</b> People are nodes, friendships/follows are edges.</li>
          <li><b>Web Crawlers:</b> Web pages are nodes, links are edges.</li>
        </ul>

        <h2>🌐 Key Graph Concepts</h2>
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

        <h2>🧭 Types of Graphs</h2>
        <h3 id="undirected">🔸 Undirected Graph</h3>
        <p>Edges don’t have a direction.<br />Example: A friendship connection – if A is a friend of B, B is also a friend of A.</p>
        <pre>{`A ----- B
 \\     /
   \\ /
    C`}</pre>

        <h3 id="directed">🔸 Directed Graph (Digraph)</h3>
        <p>Edges have a direction.<br />Example: A Twitter follow – if A follows B, B doesn’t necessarily follow A.</p>
        <pre>{`A → B → C
↑       ↓
← ← ← ← ←`}</pre>

        <h3 id="weighted">🔸 Weighted Graph</h3>
        <p>Each edge has a weight (cost, distance, time, etc.).<br />Example: Roads between cities with distances as weights.</p>
        <pre>{`A --5--> B
B --3--> C
A --2--> C`}</pre>

        <h3 id="unweighted">🔸 Unweighted Graph</h3>
        <p>Edges have no weight. They just represent a connection.</p>

        <h3 id="cyclic">🔸 Cyclic Graph</h3>
        <p>Contains at least one cycle (a path that starts and ends at the same node).</p>

        <h3 id="acyclic">🔸 Acyclic Graph</h3>
        <p>Does not contain any cycles.</p>

        <h3 id="connected">🔸 Connected Graph</h3>
        <p>There is a path between every pair of vertices.</p>

        <h3 id="disconnected">🔸 Disconnected Graph</h3>
        <p>Some vertices are not connected by any path.</p>

        <h2>🧮 Graph Representations</h2>
        <ul>
          <li>
            <b>Adjacency Matrix:</b> A 2D array showing which nodes are connected.
          </li>
          <li>
            <b>Adjacency List:</b> A list where each node stores its connected neighbors.
          </li>
        </ul>

        <h2>🧠 Common Graph Algorithms</h2>
        <ul>
          <li>Breadth-First Search (BFS)</li>
          <li>Depth-First Search (DFS)</li>
          <li>Dijkstra’s Algorithm</li>
          <li>Kruskal’s / Prim’s Algorithm</li>
          <li>Topological Sorting</li>
        </ul>

        <h2>📌 Simple Example (Adjacency List)</h2>
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
      </main>
    </div>
  );
};

export default Graphs;