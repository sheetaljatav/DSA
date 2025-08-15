import React from 'react';
import './DP.css';

const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/two-sum/description/"
  },
  {
    id: 2,
    title: "Contains Duplicate",
    difficulty: "Easy",
    link: "http://leetcode.com/problems/contains-duplicate/description/"
  },
  {
    id: 3,
    title: "Largest Element",
    difficulty: "Easy",
    link: "https://takeuforward.org/plus/dsa/problems/largest-element"
  },
  {
    id: 4,
    title: "Product of Array Except Self",
    difficulty: "Medium",
    link: "#"
  },
  {
    id: 5,
    title: "Merge Intervals",
    difficulty: "Medium",
    link: "#"
  },
  {
    id: 6,
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    link: "#"
  },
  {
    id: 7,
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    link: "#"
  },
  {
    id: 8,
    title: "Contains Duplicate",
    difficulty: "Easy",
    link: "#"
  },
  {
    id: 9,
    title: "Set Matrix Zeroes",
    difficulty: "Medium",
    link: "#"
  },
  {
    id: 10,
    title: "Spiral Matrix",
    difficulty: "Medium",
    link: "#"
  }
];

const ArrayPractice = () => {
  return (
    <div className="bubble-sort-container">
      <section className="bubble-sort-section" style={{ padding: '32px' }}>
        <h2>Array Practice Problems</h2>
        <table>
          <thead>
            <tr>
              <th style={{ width: '60px' }}>#</th>
              <th>Title</th>
              <th style={{ width: '120px' }}>Difficulty</th>
              <th style={{ width: '100px' }}>Link</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem) => (
              <tr key={problem.id}>
                <td>{problem.id}</td>
                <td>{problem.title}</td>
                <td>
                  <span
                    style={{
                      color:
                        problem.difficulty === "Easy"
                          ? "#22c55e"
                          : problem.difficulty === "Medium"
                          ? "#eab308"
                          : "#ef4444",
                      fontWeight: 600
                    }}
                  >
                    {problem.difficulty}
                  </span>
                </td>
                <td>
                  <a
                    href={problem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#3b82f6",
                      textDecoration: "underline",
                      fontWeight: 500
                    }}
                  >
                    Solve
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ArrayPractice;