import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
