import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GoldenVisa from './pages/GoldenVisa';
import HomeValuation from './pages/HomeValuation';
import About from './pages/About';
import BuyersGuide from './pages/BuyersGuide';
import SellersGuide from './pages/SellersGuide';
import HomeSearch from './pages/HomeSearch';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="golden-visa" element={<GoldenVisa />} />
          <Route path="valuation" element={<HomeValuation />} />
          <Route path="dubai-real-estate" element={<GoldenVisa />} />
          <Route path="about" element={<About />} />
          <Route path="buy/guide" element={<BuyersGuide />} />
          <Route path="sell/guide" element={<SellersGuide />} />
          <Route path="search" element={<HomeSearch />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
