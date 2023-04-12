
import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import "aos/dist/aos.css";

import AOS from 'aos'




function App() {
  React.useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

  

  return (
    
    <>
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </>
    
     
  )
}

export default App
