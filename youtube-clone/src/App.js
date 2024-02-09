import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import RecommendedVideos from './components/recommendedVideos/RecommendedVideos';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className='page'>
          <Sidebar />
          <RecommendedVideos />
        </div>

        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

