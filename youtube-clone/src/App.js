import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import RecommendedVideos from './components/recommendedVideos/RecommendedVideos';
import SearchPage from './components/searchPage/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className='page'>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<RecommendedVideos />} />
            <Route exact path="/search/:searchTerm" element={<SearchPage />} />
            {/* <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

