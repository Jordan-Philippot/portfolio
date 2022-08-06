import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Style
import './styles/App.scss';

// Components
import LocationUrl from './components/Location'
import Header from './components/sections/Header'
import Footer from './components/sections/Footer'

// Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'


export default function App() {
  const [location, setLocation] = useState('')


  return (
    <Router>
      <div className="App">

        {/* ----- Get URL location ----- */}
        <LocationUrl setLocation={setLocation} />


        <Header />


        <Routes>
          {/* ----- 404 Not Found ----- */}
          <Route path="*" element={<NotFound />} />

          {/* ----- Homepage ----- */}
          <Route exact path="/" element={<Home />} />

        </Routes>



        <Footer />

      </div >
    </Router>
  );
}
