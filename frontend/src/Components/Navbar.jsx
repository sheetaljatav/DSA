import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBars, FaTimes, FaUserCircle, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ user, setUser }) => {
  const [showTopics, setShowTopics] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [theme, setTheme] = useState('dark');
  const userDropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setShowUserDropdown(false);
      }
    }
    if (showUserDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserDropdown]);

  // Apply theme to body
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // FIXED: was incorrectly removing 'user'
    setUser(null);
    setShowUserDropdown(false);
    setMobileOpen(false);
    navigate('/', { replace: true });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="navbar">
      <h2 className="logo">
        <span className="logo-icon">💻</span>
        <span className="logo-text">DSA</span>
      </h2>

      <button
        className="navbar-toggle"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      <div className={`nav-items${mobileOpen ? ' open' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" className="home-icon" title="Go to Home">
              <FaHome size={20} />
            </Link>
          </li>

          <li
            className="dropdown-wrapper"
            onMouseEnter={() => setShowTopics(true)}
            onMouseLeave={() => setShowTopics(false)}
            onClick={() => setShowTopics((prev) => !prev)}
          >
            Topics ▼
            {showTopics && (
              <ul className="dropdown-menu">
                <li><Link to="/topics/arrays">Arrays</Link></li>
                <li><Link to="/topics/2d-arrays">2D Arrays</Link></li>
                <li><Link to="/topics/linkedlist">LinkedList</Link></li>
                <li><Link to="/topics/stacks">Stacks</Link></li>
                <li><Link to="/topics/queues">Queues</Link></li>
                <li><Link to="/topics/hashtables">Hash Tables</Link></li>
                <li><Link to="/topics/trees">Trees</Link></li>
                <li><Link to="/topics/graphs">Graphs</Link></li>
                <li><Link to="/topics/greedy">Greedy</Link></li>
                <li><Link to="/topics/pointers">Pointers</Link></li>
                <li><Link to="/topics/two-pointers">Two Pointers</Link></li>
                <li><Link to="/topics/dp">DP</Link></li>
                <li><Link to="/topics/shortest-path">Shortest Path</Link></li>
                <li><Link to="/topics/minimum-spanning">Minimum Spanning</Link></li>
                <li><Link to="/topics/bit-manupulation">Bit Manupulation</Link></li>
                <li><Link to="/topics/backtracking">BackTracking</Link></li>
                <li><Link to="/topics/maximum-flow">Maximum Flow</Link></li>
                <li><Link to="/topics/oops">OOPS</Link></li>
                <li><Link to="/topics/time-complexity">Time Complexity</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/practice">Practice</Link></li>
          <li><Link to="/blog">Blog</Link></li>

          <li className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </li>
        </ul>

        <div className="nav-right">
          {user ? (
            <div
              className="user-dropdown-wrapper"
              ref={userDropdownRef}
              style={{ position: 'relative' }}
            >
              <button
                className="username user-dropdown-btn"
                onClick={() => setShowUserDropdown((prev) => !prev)}
              >
                <FaUserCircle size={22} />
                {user.name}
              </button>
              {showUserDropdown && (
                <ul className="user-dropdown-menu">
                  <li>
                    <button onClick={handleLogout} className="logout-btn">
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="login-btn">Login</button>
              </Link>
              <Link to="/register">
                <button className="register-btn">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
