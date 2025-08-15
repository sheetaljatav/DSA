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
  const chatbotRef = React.useRef();

  // Load user from localStorage if logged in
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleExplain = (selectedText) => {
    if (window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('ai-explain', { detail: selectedText }));
    }
  };

  return (
    <Router>
      {/* ✅ Fixed: setUser now passed to Navbar */}
      <Navbar user={user} setUser={setUser} onAuthClick={() => setShowAuth(true)} />

      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />

        {/* Practice Section */}
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/Arrays-Practice" element={<ArraysPractice />} />
        <Route path="/practice/2DArrays-Practice" element={<TwoDArraysPractice />} />
        <Route path="/practice/BackTracking-Practice" element={<BackTrackingPractice />} />
        <Route path="/practice/BinaryTrees-Practice" element={<BinaryTreesPractice />} />
        <Route path="/practice/Bit Manupulation-Practice" element={<BitManupulationPractice />} />
        <Route path="/practice/Dynamic Programming-Practice" element={<DPPractice />} />
        <Route path="/practice/Graph-Practice" element={<GraphPractice />} />
        <Route path="/practice/Greedy-Practice" element={<GreedyPractice />} />
        <Route path="/practice/Heaps & Hashing-Practice" element={<HHPractice />} />
        <Route path="/practice/LinkedList-Practice" element={<LinkedListPractice />} />
        <Route path="/practice/Queues-Practice" element={<QueuesPractice />} />
        <Route path="/practice/Stacks-Practice" element={<StacksPractice />} />
        <Route path="/practice/Strings-Practice" element={<StringsPractice />} />
        <Route path="/practice/Tries-Practice" element={<TriesPractice />} />
        <Route path="/practice/Searching & Sorting -Practice" element={<SearchingSortingPractice />} />

        {/* Topic Pages */}
        <Route path="/topics/arrays" element={<Arrays />} />
        <Route path="/topics/arrays/Bubble-Sort" element={<BubbleSort />} />
        <Route path="/topics/arrays/Selection-Sort" element={<SelectionSort />} />
        <Route path="/topics/arrays/Insertion-Sort" element={<InsertionSort />} />
        <Route path="/topics/arrays/Quick-Sort" element={<QuickSort />} />
        <Route path="/topics/arrays/Counting-Sort" element={<CountingSort />} />
        <Route path="/topics/arrays/Radix-Sort" element={<RadixSort />} />
        <Route path="/topics/arrays/Merge-Sort" element={<MergeSort />} />
        <Route path="/topics/arrays/Linear-Search" element={<LinearSearch />} />
        <Route path="/topics/arrays/Binary-Search" element={<BinarySearch />} />

        <Route path="/topics/stacks" element={<Stack />} />
        <Route path="/topics/linkedlist" element={<List />} />
        <Route path="/topics/greedy" element={<Greedy />} />
        <Route path="/topics/pointers" element={<Pointers />} />
        <Route path="/topics/two-pointers" element={<TwoPointers />} />
        <Route path="/topics/trees" element={<Trees />} />
        <Route path="/topics/graphs" element={<Graphs />} />
        <Route path="/topics/backtracking" element={<BackTracking />} />
        <Route path="/topics/shortest-path" element={<SP />} />
        <Route path="/topics/bit-manupulation" element={<BM />} />
        <Route path="/topics/dp" element={<DP />} />
        <Route path="/topics/minimum-spanning" element={<MS />} />
        <Route path="/topics/oops" element={<OOPS />} />
        <Route path="/topics/2d-arrays" element={<TwoDArrays />} />
        <Route path="/topics/queues" element={<Queues />} />
        <Route path="/topics/hashtables" element={<Hash />} />
        <Route path="/topics/ObjectOrientedProgramming" element={<OOPS />} />
        <Route path="/topics/time-complexity" element={<Time />} />
        <Route path="/topics/maximum-flow" element={<MF />} />

        <Route path="/blog" element={<Blog />} />
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
