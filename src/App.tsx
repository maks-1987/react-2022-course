import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import AddItem from './components/AddItem';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import SearchItem from './components/SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('listItems')!) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('listItems', JSON.stringify(items));
  }, [items]);

  const addItem = (item: string) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id: id, checked: false, item: item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id: number) => {
    const listItems = items.map((el: items) => (el.id === id ? { ...el, checked: !el.checked } : el));
    setItems(listItems);
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((el: items) => el.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem.length);
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Header />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((el: items) => el.item.toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;

type items = {
  id: number;
  checked: boolean;
  item: string;
};
