import React, { useState, useEffect, forwardRef } from 'react';
import './Chatbot.css';

const Chatbot = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am your AI assistant. Select any content and click "Explain with AI" to get an explanation.' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Listen for custom event to receive selected text
  useEffect(() => {
    const handler = async (e) => {
      const selectedText = e.detail;
      setIsOpen(true);
      setMessages((msgs) => [
        ...msgs,
        { sender: 'user', text: `Explain this: ${selectedText}` }
      ]);
      setUserInput('');
      await handleSend(`Explain this: ${selectedText}`, true);
    };
    window.addEventListener('ai-explain', handler);
    return () => window.removeEventListener('ai-explain', handler);
    // eslint-disable-next-line
  }, []);

  // handleSend now takes an optional second argument to skip userInput clearing for selection
  const handleSend = async (overrideInput, fromSelection = false) => {
    const input = overrideInput !== undefined ? overrideInput : userInput;
    if (!input.trim()) return;
    const newMsgs = [...messages, { sender: 'user', text: input }];
    setMessages(newMsgs);
    if (!fromSelection) setUserInput('');
    setLoading(true);
    try {
      // Use a relative path for API endpoint
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      });
       let reply = 'Oopsie, something went wrong.';
    if (res.ok) {
      const data = await res.json();
      reply = data.reply || reply;
    }
    setMessages([...newMsgs, { sender: 'bot', text: reply }]);
  } catch (err) {
    setMessages([...newMsgs, { sender: 'bot', text: 'Oops, something went wrong.' }]);
    console.error(err);
  }
  setLoading(false);
};

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleSend();
    }
  };

  return (
    <div>
      {/* Modern Chatbot Floating Button */}
      <button
        className={`chatbot-button${isOpen ? ' active' : ''}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Open AI Chatbot"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="url(#chatbot-gradient)" />
          <g>
            <rect x="9" y="11" width="14" height="10" rx="5" fill="#fff" />
            <circle cx="13" cy="16" r="1.5" fill="#2563eb" />
            <circle cx="16" cy="16" r="1.5" fill="#2563eb" />
            <circle cx="19" cy="16" r="1.5" fill="#2563eb" />
          </g>
          <defs>
            <linearGradient id="chatbot-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366f1" />
              <stop offset="1" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            💬 DSA Chatbot
            <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Close">×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${msg.sender}`}
              >
                <span className="text">{msg.text}</span>
              </div>
            ))}
            {loading && (
              <div className="chat-message bot">
                <span className="text">Typing...</span>
              </div>
            )}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="Type your question..."
              disabled={loading}
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !userInput.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default Chatbot;