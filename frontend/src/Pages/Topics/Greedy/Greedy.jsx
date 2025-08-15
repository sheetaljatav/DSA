import React from "react";
import "./Greedy.css";

const Greedy = () => {
  return (
    <div className="queue-container">
      <section className="queue-section">
        <h2>💰 Greedy Algorithm in DSA</h2>

        <h3>📌 What is a Greedy Algorithm?</h3>
        <p>
          A Greedy Algorithm is a problem-solving approach where we make the best choice at each step, hoping that these local optimal choices will lead to a global optimal solution.
        </p>
        <p>
          🧠 Imagine you're picking coins to make change — you always grab the highest value coin first. That’s greedy!
        </p>

        <h3>🧠 Key Idea</h3>
        <ul>
          <li>At every decision point:</li>
          <ul>
            <li>Pick the locally optimal choice (best at the moment)</li>
            <li>Never reconsider the decisions you've already made</li>
          </ul>
          <li>
            <b>But remember:</b> Greedy algorithms don’t always work for every problem. They only work when local optimum = global optimum
          </li>
        </ul>

        <h3>🔍 Properties of Greedy Algorithms</h3>
        <ul>
          <li>
            <b>Greedy Choice Property:</b> A global solution can be arrived at by making locally optimal (greedy) choices.
          </li>
          <li>
            <b>Optimal Substructure:</b> A problem has an optimal solution that contains optimal solutions to its subproblems.
          </li>
        </ul>

        <h3>⚙️ How It Works</h3>
        <ul>
          <li>Sort or prioritize the data (if needed)</li>
          <li>Loop through choices</li>
          <li>Pick the best available option</li>
          <li>Repeat until done</li>
        </ul>

        <h3>💡 Common Greedy Algorithm Problems</h3>
        <ul>
          <li>Activity Selection Problem</li>
          <li>Fractional Knapsack</li>
          <li>Huffman Encoding</li>
          <li>Job Scheduling</li>
          <li>Minimum Spanning Tree (Prim’s &amp; Kruskal’s)</li>
          <li>Dijkstra’s Shortest Path Algorithm</li>
        </ul>

        <h3>📘 Example: Activity Selection Problem</h3>
        <p>Goal: Select the maximum number of non-overlapping activities.</p>
        <pre>{`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool compare(pair<int, int>& a, pair<int, int>& b) {
    return a.second < b.second;
}

int maxActivities(vector<pair<int, int>> activities) {
    sort(activities.begin(), activities.end(), compare);

    int count = 1;
    int endTime = activities[0].second;

    for (int i = 1; i < activities.size(); i++) {
        if (activities[i].first >= endTime) {
            count++;
            endTime = activities[i].second;
        }
    }
    return count;
}

int main() {
    vector<pair<int, int>> activities = {{1, 3}, {2, 5}, {4, 6}, {6, 7}, {5, 8}};
    cout << "Maximum Activities: " << maxActivities(activities);
    return 0;
}`}</pre>
        <h4>🟢 Output:</h4>
        <pre>{`Maximum Activities: 3`}</pre>

        <h3>✅ When to Use Greedy?</h3>
        <ul>
          <li>Problem involves optimization (e.g., max/min result)</li>
          <li>You can define a clear rule to choose the best at every step</li>
          <li>The problem has greedy-choice property and optimal substructure</li>
        </ul>

        <h3>❌ When Not to Use Greedy?</h3>
        <ul>
          <li>If choices depend on future decisions</li>
          <li>If the local best doesn't lead to global best</li>
          <li>
            <b>Example:</b> 0/1 Knapsack Problem → Use Dynamic Programming, not Greedy
          </li>
        </ul>

        <h3>✨ Real-Life Analogy</h3>
        <p>
          You're climbing stairs and always take the biggest possible step forward to reach the top fastest.
        </p>
      </section>
    </div>
  );
};

export default Greedy;