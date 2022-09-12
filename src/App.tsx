import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'First item',
    },
    {
      id: 2,
      checked: false,
      item: 'Second item',
    },
    {
      id: 3,
      checked: false,
      item: 'Thirt item',
    },
  ]);

  const handleCheck = (id: number) => {
    const listItems = items.map((el) => (el.id === id ? { ...el, checked: !el.checked } : el));
    setItems(listItems);
    localStorage.setItem('listItems', JSON.stringify(listItems));
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((el) => el.id !== id);
    setItems(listItems);
    localStorage.setItem('listItems', JSON.stringify(listItems));
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Header />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
