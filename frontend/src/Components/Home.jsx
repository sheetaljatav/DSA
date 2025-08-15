import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const motivationalQuotes = [
  "Success is the sum of small efforts, repeated day in and day out.",
  "The secret of getting ahead is getting started.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Dream big and dare to fail.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Push yourself, because no one else is going to do it for you.",
  "Believe you can and you’re halfway there.",
];

const Home = ({ user }) => {
  const topics = [
    "Time Complexity",
    "Arrays",
    "2D Arrays",
    "LinkedList",
    "Stacks",
    "Queues",
    "HashTables",
    "Trees",
    "Graphs",
    "BackTracking",
    "Greedy",
    "Pointers",
    "Two Pointers",
    "Shortest Path",
    "Bit Manupulation",
    "DP",
    "Minimum Spanning",
    "Maximum Flow",
    "OOPS",
  ];

  // Motivational quote popup state
  const [showQuote, setShowQuote] = useState(true);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);
  }, []);

  // Scroll to topics section
  const handleScrollToTopics = () => {
    const topicsSection = document.getElementById('topics');
    if (topicsSection) {
      topicsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* MOTIVATIONAL QUOTE POPUP */}
    
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>
            {user ? (
              <>Welcome, <span style={{ color: "#2563eb" }}>{user.name}</span>! 🚀</>
            ) : (
              <>DSA Mastery Hub 🚀</>
            )}
          </h1>
          <p>
            {user
              ? "Level up your coding with structured DSA lessons & challenges."
              : "Level up your coding with structured DSA lessons & challenges."}
          </p>
          <div className="hero-buttons">
            <Link to="/practice"><button className="btn-primary">Start Practicing</button></Link>
            <button className="btn-secondary" onClick={handleScrollToTopics}>Start Learning</button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-box">📚 Beginner-Friendly Lessons</div>
          <div className="feature-box">💻 Real Coding Challenges</div>
          <div className="feature-box">🧠 Interview Prep Focus</div>
          <div className="feature-box">🏆 Leaderboard & Motivation</div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="topics" id="topics">
        <h2>Explore DSA Topics</h2>
        <div className="topics-grid">
          {topics.map(topic => (
            <Link to={`/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`} key={topic}>
              <div className= "topic-card">{topic}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 DSA Mastery | Built with ❤️ by Sheetal</p>
      </footer>
    </div>
  );
};

export default Home;