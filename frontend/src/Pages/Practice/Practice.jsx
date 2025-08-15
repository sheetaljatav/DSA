import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Practice.css';

const Practice = () => {
  const location = useLocation();
  const isRoot = location.pathname === '/practice';

  return (
    <div className="arrays-page">
      <aside className="sidebar">
        <h3>Practice</h3>
        <ul>
          <li><Link to="Arrays-Practice">Arrays</Link></li>
          <li><Link to="2DArrays-Practice">2D Arrays</Link></li>
          <li><Link to="Strings-Practice">Strings</Link></li>
          <li><Link to="LinkedList-Practice">Linked List</Link></li>
          <li><Link to="Stacks-Practice">Stacks</Link></li>
          <li><Link to="Queues-Practice">Queues</Link></li>
          <li><Link to="Graph-Practice">Graph</Link></li>
          <li><Link to="Greedy-Practice">Greedy</Link></li>
          <li><Link to="BackTracking-Practice">BackTracking</Link></li>
          <li><Link to="BinaryTrees-Practice">Binary Trees</Link></li>
          <li><Link to="Heaps & Hashing-Practice">Heaps & Hashing</Link></li>
          <li><Link to="Dynamic Programming-Practice">Dynamic Programming</Link></li>
          <li><Link to="Bit Manupulation-Practice">Bit Manipulation</Link></li>
          <li><Link to="Searching & Sorting -Practice">Searching & Sorting</Link></li>
          <li><Link to="Tries-Practice">Tries</Link></li>
        </ul>
      </aside>

      <main className="array-content">
        {isRoot ? (
          <>
            <div className="practice-intro">
              <h1 className="practice-title">🧠 DSA Practice Hub</h1>
              <p>
                We believe <strong>practice makes progress</strong> — and that’s exactly why this space exists.
              </p>
              <p>
                For every DSA topic you've explored, you’ll find <strong>curated practice problems</strong> right here — designed to reinforce your understanding and build confidence.
              </p>

              <div className="practice-topics-link" style={{ marginTop: '1.5rem' }}>
                <h2 style={{ fontSize: '1.4rem' }}>📚 Topics</h2>
                <p>
                  Before jumping into the problems, take a moment to explore the{' '}
                  <Link to="/" className="topics-link">Topics</Link> first — it will lead you back to the main topic explanations.
                </p>
              </div>

              <div className="practice-mentors" style={{ marginTop: '2rem' }}>
                <h3>💡 Need More Guidance?</h3>
                <ul>
                  <li>
                    <a href="https://www.youtube.com/channel/UCQHLxxBFrbfdrk1jF0moTpw" target="_blank" rel="noopener noreferrer">
                      Love Babbar – Clear and structured roadmap
                    </a>
                  </li>
                  <li>
                    <a href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" target="_blank" rel="noopener noreferrer">
                      Strivers A2Z DSA Course 
                    </a>
                  </li>
                </ul>
              </div>

              <div className="practice-contact" style={{ marginTop: '2rem' }}>
                <h3>🤝 Questions or Suggestions?</h3>
                <p>📧 Email: <a href="mailto:sheetal4444jatav@gmail.com">sheetal4444jatav@gmail.com</a></p>
                <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/sheetal-jatav-14817720a/" target="_blank" rel="noopener noreferrer">Sheetal Jatav</a></p>
              </div>
            </div>
          </>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
};

export default Practice;
