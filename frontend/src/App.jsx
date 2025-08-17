import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Chatbot from './Components/Chatbot';
import ExplainSelectionButton from './Components/ExplainSelectionButton';

// Auth Pages
import Register from './Pages/Register';
import Login from './Pages/Login';

// Practice Section
import Practice from './Pages/Practice/Practice';
import Blog from './Pages/Blog/Blog';

// Arrays Practice Pages
import ArraysPractice from './Pages/Practice/topics/Arrays/ArraysPractice';

// Topic Pages - Arrays and Sorting
import Arrays from './Pages/Topics/Arrays/Arrays';
import BubbleSort from './Pages/Topics/Arrays/BubbleSort';
import SelectionSort from './Pages/Topics/Arrays/SelectionSort';
import InsertionSort from './Pages/Topics/Arrays/InsertionSort';
import QuickSort from './Pages/Topics/Arrays/QuickSort';
import CountingSort from './Pages/Topics/Arrays/CountingSort';
import RadixSort from './Pages/Topics/Arrays/RadixSort';
import MergeSort from './Pages/Topics/Arrays/MergeSort';
import LinearSearch from './Pages/Topics/Arrays/LinearSearch';
import BinarySearch from './Pages/Topics/Arrays/BinarySearch';

// Topic Pages - Other Topics
import Stack from './Pages/Topics/Stacks/Stack';
import List from './Pages/Topics/LinkedList/List';
import Time from './Pages/Topics/Time Complexity/Time';
import Queues from './Pages/Topics/Queues/Queues';
import Hash from './Pages/Topics/HashTables/Hash';
import OOPS from './Pages/Topics/OOPS/OOPS';
import TwoDArraysPractice from './Pages/Practice/topics/2D Arrays/2DArrays';
import Trees from './Pages/Topics/Trees/Trees';
import Graphs from './Pages/Topics/Graphs/Graphs';
import BackTracking from './Pages/Topics/BackTracking/BackTracking';
import Greedy from './Pages/Topics/Greedy/Greedy';
import Pointers from './Pages/Topics/Pointers/Pointers';
import TwoPointers from './Pages/Topics/Two Pointers/TwoPinters';
import SP from './Pages/Topics/Shortest Path/SP';
import BM from './Pages/Topics/Bit Manupulation/BM';
import DP from './Pages/Topics/DP/DP';
import MS from './Pages/Topics/Minimum Spanning/MS';
import TwoDArrays from './Pages/Topics/2D Arrays/2d';
import MF from './Pages/Topics/Maximum Flow/MF';

// Practice Topics
import BackTrackingPractice from './Pages/Practice/topics/BackTracking/BackTracking';
import BinaryTreesPractice from './Pages/Practice/topics/Binary Trees/BinaryTrees';
import BitManupulationPractice from './Pages/Practice/topics/Bit Manupulation/BitManupulation';
import DPPractice from './Pages/Practice/topics/Dynamic Programming/DP';
import GraphPractice from './Pages/Practice/topics/Graph/Graph';
import GreedyPractice from './Pages/Practice/topics/Greedy/Greedy';
import HHPractice from './Pages/Practice/topics/Heaps & Hacking/HH';
import LinkedListPractice from './Pages/Practice/topics/Linked List/LinkedList';
import QueuesPractice from './Pages/Practice/topics/Queues/Queues';
import StacksPractice from './Pages/Practice/topics/Stacks/Stacks';
import StringsPractice from './Pages/Practice/topics/Strings/Strings';
import TriesPractice from './Pages/Practice/topics/Tries/Tries';
import SearchingSortingPractice from './Pages/Practice/topics/Searching & Sorting/SS';

function App() {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [theme, setTheme] = useState('light'); // Start with light theme
  const chatbotRef = React.useRef();

  // Load user from localStorage if logged in
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);


  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const handleExplain = (selectedText) => {
    if (window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('ai-explain', { detail: selectedText }));
    }
  };

  return (
    <Router>
      {/* ✅ Fixed: setUser now passed to Navbar */}
      <Navbar user={user} setUser={setUser} onAuthClick={() => setShowAuth(true)} theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Home user={user} theme={theme} />} />
        <Route path="/register" element={<Register theme={theme} />} />
        <Route path="/login" element={<Login setUser={setUser} theme={theme} />} />

        {/* Practice Section */}
        <Route path="/practice" element={<Practice theme={theme} />} />
        <Route path="/practice/Arrays-Practice" element={<ArraysPractice theme={theme} />} />
        <Route path="/practice/2DArrays-Practice" element={<TwoDArraysPractice theme={theme} />} />
        <Route path="/practice/BackTracking-Practice" element={<BackTrackingPractice theme={theme} />} />
        <Route path="/practice/BinaryTrees-Practice" element={<BinaryTreesPractice theme={theme} />} />
        <Route path="/practice/Bit Manupulation-Practice" element={<BitManupulationPractice theme={theme} />} />
        <Route path="/practice/Dynamic Programming-Practice" element={<DPPractice theme={theme} />} />
        <Route path="/practice/Graph-Practice" element={<GraphPractice theme={theme} />} />
        <Route path="/practice/Greedy-Practice" element={<GreedyPractice theme={theme} />} />
        <Route path="/practice/Heaps & Hashing-Practice" element={<HHPractice theme={theme} />} />
        <Route path="/practice/LinkedList-Practice" element={<LinkedListPractice theme={theme} />} />
        <Route path="/practice/Queues-Practice" element={<QueuesPractice theme={theme} />} />
        <Route path="/practice/Stacks-Practice" element={<StacksPractice theme={theme} />} />
        <Route path="/practice/Strings-Practice" element={<StringsPractice theme={theme} />} />
        <Route path="/practice/Tries-Practice" element={<TriesPractice theme={theme} />} />
        <Route path="/practice/Searching & Sorting -Practice" element={<SearchingSortingPractice theme={theme} />} />

        {/* Topic Pages */}
        <Route path="/topics/arrays" element={<Arrays theme={theme} />} />
        <Route path="/topics/arrays/Bubble-Sort" element={<BubbleSort theme={theme} />} />
        <Route path="/topics/arrays/Selection-Sort" element={<SelectionSort theme={theme} />} />
        <Route path="/topics/arrays/Insertion-Sort" element={<InsertionSort theme={theme} />} />
        <Route path="/topics/arrays/Quick-Sort" element={<QuickSort theme={theme} />} />
        <Route path="/topics/arrays/Counting-Sort" element={<CountingSort theme={theme} />} />
        <Route path="/topics/arrays/Radix-Sort" element={<RadixSort theme={theme} />} />
        <Route path="/topics/arrays/Merge-Sort" element={<MergeSort theme={theme} />} />
        <Route path="/topics/arrays/Linear-Search" element={<LinearSearch theme={theme} />} />
        <Route path="/topics/arrays/Binary-Search" element={<BinarySearch theme={theme} />} />

        <Route path="/topics/stacks" element={<Stack theme={theme} />} />
        <Route path="/topics/linkedlist" element={<List theme={theme} />} />
        <Route path="/topics/greedy" element={<Greedy theme={theme} />} />
        <Route path="/topics/pointers" element={<Pointers theme={theme} />} />
        <Route path="/topics/two-pointers" element={<TwoPointers theme={theme} />} />
        <Route path="/topics/trees" element={<Trees theme={theme} />} />
        <Route path="/topics/graphs" element={<Graphs theme={theme} />} />
        <Route path="/topics/backtracking" element={<BackTracking theme={theme} />} />
        <Route path="/topics/shortest-path" element={<SP theme={theme} />} />
        <Route path="/topics/bit-manupulation" element={<BM theme={theme} />} />
        <Route path="/topics/dp" element={<DP theme={theme} />} />
        <Route path="/topics/minimum-spanning" element={<MS theme={theme} />} />
        <Route path="/topics/oops" element={<OOPS theme={theme} />} />
        <Route path="/topics/2d-arrays" element={<TwoDArrays theme={theme} />} />
        <Route path="/topics/queues" element={<Queues theme={theme} />} />
        <Route path="/topics/hashtables" element={<Hash theme={theme} />} />
        <Route path="/topics/ObjectOrientedProgramming" element={<OOPS theme={theme} />} />
        <Route path="/topics/time-complexity" element={<Time theme={theme} />} />
        <Route path="/topics/maximum-flow" element={<MF theme={theme} />} />

        <Route path="/blog" element={<Blog theme={theme} />} />
      </Routes>

      <Chatbot ref={chatbotRef} />
      <ExplainSelectionButton onExplain={handleExplain} />

      {/* Optional Auth Modal — if used */}
      {showAuth && (
        <AuthModal
          setUser={setUser}
          closeModal={() => setShowAuth(false)}
        />
      )}
    </Router>
  );
}

export default App;
