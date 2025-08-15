// src/Components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Chatbot from './Chatbot';
import ExplainSelectionButton from './ExplainSelectionButton';

const Layout = ({ children, user, setUser, onAuthClick, handleExplain }) => {
  const chatbotRef = React.useRef();

  return (
    <>
      <Navbar user={user} setUser={setUser} onAuthClick={onAuthClick} />
      <main className="main-container">{children}</main>
      <Chatbot ref={chatbotRef} />
      <ExplainSelectionButton onExplain={handleExplain} />
    </>
  );
};

export default Layout;
