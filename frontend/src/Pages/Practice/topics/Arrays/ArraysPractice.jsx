import React from 'react';
import './ArrayPractice.css';

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
    title: "Permutations",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/permutations/description/?envType=problem-list-v2&envId=array"
  },
  {
    id: 5,
    title: "Maximum Subarray",
    difficulty: "Medium",
    link: "http://leetcode.com/problems/maximum-subarray/description/"
  },
  {
    id: 6,
    title: "Kth Smallest",
    difficulty: "Medium",
    link: "https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1"
  },
  {
    id: 7,
    title: "3Sum",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/3sum/description/"
  },
  {
    id: 8,
    title: "Contains Duplicate",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/contains-duplicate/description/"
  },
  {
    id: 9,
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/kth-largest-element-in-an-array/description/"
  },
  {
    id: 10,
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/"
  },

{
    id: 11,
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/"
  },
  {
    id: 12,
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/"
  },
  {
    id: 13,
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/"
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