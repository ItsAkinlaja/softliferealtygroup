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
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';
import MortgageCalculator from './pages/MortgageCalculator';
import LifestyleQuiz from './pages/LifestyleQuiz';
import RelocationGuide from './pages/RelocationGuide';
import BuyerInquiry from './pages/BuyerInquiry';
import SellerInquiry from './pages/SellerInquiry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="golden-visa" element={<GoldenVisa />} />
          <Route path="valuation" element={<HomeValuation />} />
          <Route path="mortgage-calculator" element={<MortgageCalculator />} />
          <Route path="relocation-guide" element={<RelocationGuide />} />
          <Route path="buyer-inquiry" element={<BuyerInquiry />} />
          <Route path="seller-inquiry" element={<SellerInquiry />} />
          <Route path="lifestyle-quiz" element={<LifestyleQuiz />} />
          <Route path="dubai-real-estate" element={<GoldenVisa />} />
          <Route path="about" element={<About />} />
          <Route path="buy/guide" element={<BuyersGuide />} />
          <Route path="sell/guide" element={<SellersGuide />} />
          <Route path="search" element={<HomeSearch />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="sitemap" element={<Sitemap />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
