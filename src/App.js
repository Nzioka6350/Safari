import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import FeaturesSection from './components/features/Features';
function App() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <Home/>
        <About/>
        <FeaturesSection/>
        <Footer/>
      </>
    
    </div>
  );
}

export default App;
