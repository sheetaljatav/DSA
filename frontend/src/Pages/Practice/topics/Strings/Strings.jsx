import React from 'react';
import './Strings.css';

const problems = [
  {
    id: 1,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=problem-list-v2&envId=string"
  },
  {
    id: 2,
    title: "Roman to Integer",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/roman-to-integer/description/?envType=problem-list-v2&envId=string"
  },
  {
    id: 3,
    title: "Valid Palindrome",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/valid-palindrome/description/"
  },
  {
    id: 4,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/longest-palindromic-substring/description/"
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    link: "https://leetcode.com/problems/longest-palindromic-substring/description/"
  },
  {
    id: 6,
    title: "Longest Valid Parentheses",
    difficulty: "Hard",
    link: "https://leetcode.com/problems/longest-valid-parentheses/description/?envType=problem-list-v2&envId=string"
  },
  {
    id: 7,
    title: "Next Permutation",
    difficulty: "Medium",
    link: "https://www.geeksforgeeks.org/problems/next-permutation5226/1"
  },
  {
    id: 8,
    title: "Minimum Window Substring",
    difficulty: "Easy",
    link: "https://leetcode.com/problems/minimum-window-fsubstring/description/"
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