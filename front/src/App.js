import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Style
import './styles/App.scss';

// Components
import LocationUrl from './components/tools/Location'
import Header from './components/sections/Header'
import Footer from './components/sections/Footer'

// Tools Components
import Loader from './components/tools/Loader'
import Cursor from './components/tools/Cursor'

// Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'


export default function App() {
  const [location, setLocation] = useState('')
  const [loaded, setLoaded] = useState(false)


  // ----- Animation loader -----
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)

    }, 5000);
    // eslint-disable-next-line
  }, [])

  return (
    <Router>

      {!loaded ?
        <Loader /> :

        <div className="App">

          <Header />

          <Cursor />

          {/* ----- Get URL location ----- */}
          <LocationUrl setLocation={setLocation} />


          <Routes>
            {/* ----- 404 Not Found ----- */}
            <Route path="*" element={<NotFound />} />

            {/* ----- Homepage ----- */}
            <Route exact path="/" element={<Home />} />

          </Routes>


          <Footer />

        </div >
      }
    </Router>
  );
}
