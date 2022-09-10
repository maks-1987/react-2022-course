import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <h2>Hello react!</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
