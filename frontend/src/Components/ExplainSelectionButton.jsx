// Add this anywhere in your main layout, e.g., App.jsx
import React, { useState } from 'react';

function ExplainSelectionButton({ onExplain }) {
  const [show, setShow] = useState(false);
  const [selection, setSelection] = useState('');

  React.useEffect(() => {
    const handleSelection = () => {
      const text = window.getSelection().toString();
      setSelection(text);
      setShow(!!text);
    };
    document.addEventListener('mouseup', handleSelection);
    return () => document.removeEventListener('mouseup', handleSelection);
  }, []);

  if (!show || !selection.trim()) return null;

  return (
    <button
      style={{
        position: 'fixed',
        bottom: 80,
        right: 80,
        zIndex: 2000,
        background: '#2563eb',
        color: 'white',
        padding: '10px 18px',
        borderRadius: 8,
        border: 'none',
        cursor: 'pointer'
      }}
      onClick={() => {
        onExplain(selection);
        setShow(false);
        window.getSelection().removeAllRanges();
      }}
    >
      Explain with AI
    </button>
  );
}

export default ExplainSelectionButton;