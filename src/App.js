import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ----- Style -----
import './styles/App.scss';

// ----- Components -----
import LocationUrl from './components/tools/Location'
import Header from './components/sections/Header'
import Footer from './components/sections/Footer'

// ----- Tools Components -----
import Loader from './components/tools/Loader'
import Cursor from './components/tools/Cursor'
import Waves from './components/Waves'

// ----- Pages -----
import Home from './pages/Home'
import MyProject from './pages/MyProject'
import NotFound from './pages/NotFound'


export default function App() {

  // eslint-disable-next-line
  const [location, setLocation] = useState('')

  const wavesRef = useRef()
  const [isScrolledAboutUs, setIsScrolledAboutUs] = useState("load")

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
            <Route exact path="/" element={<Home location={location} setIsScrolledAboutUs={setIsScrolledAboutUs} />} />

            {/* ----- My Project ----- */}
            <Route exact path="/project/:id" element={<MyProject />} />

          </Routes>

          {/* ----- WAVES ----- */}
          <Waves wavesRef={wavesRef} isScrolledAboutUs={isScrolledAboutUs} />

          <Footer />

        </div >
      }
    </Router>
  );
}
