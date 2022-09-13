import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import AddItem from './components/AddItem';
import apiRequest from './components/apiRequest';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import SearchItem from './components/SearchItem';
import { ENDPOINTS } from './Endpoints/path';

function App() {
  // const [items, setItems] = useState(JSON.parse(localStorage.getItem('listItems')!) || []);
  const [items, setItems]: [dataItems[], Function] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(ENDPOINTS.JSON_Serv);
        if (!response.ok) throw Error('False load data');

        const listItems: dataItems[] = await response.json();
        setItems(listItems);
        setFetchError('');
      } catch (err: any) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    (async () => await fetchItems())();
  }, []);

  const addItem = async (item: string) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id: id, checked: false, item: item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myNewItem),
    };

    const response = await apiRequest(ENDPOINTS.JSON_Serv, postOptions);
    if (response) setFetchError(response);
  };

  const handleCheck = async (id: number) => {
    const listItems = items.map((el: dataItems) => (el.id === id ? { ...el, checked: !el.checked } : el));
    setItems(listItems);

    const myItem = listItems.filter((el) => el.id === id);
    const patchOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };

    const response = await apiRequest(`${ENDPOINTS.JSON_Serv}/${id}`, patchOptions);
    if (response) setFetchError(response);
  };

  const handleDelete = async (id: number) => {
    const listItems = items.filter((el: dataItems) => el.id !== id);
    setItems(listItems);

    const delOptions = { method: 'DELETE' };
    const response = await apiRequest(`${ENDPOINTS.JSON_Serv}/${id}`, delOptions);
    if (response) setFetchError(response);
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
      <main>
        {isLoading && (
          <p
            style={{
              height: '40px',
              width: '40px',
              border: '6px dotted gray',
              borderRadius: '50%',
              margin: '1rem auto',
            }}
          ></p>
        )}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((el: dataItems) => el.item.toLowerCase().includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;

type dataItems = {
  id: number;
  checked: boolean;
  item: string;
};
