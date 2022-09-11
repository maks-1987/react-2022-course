import React, { useState } from 'react';

export default function Content() {
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
    <main>
      {items.length ? (
        <ul>
          {items.map((el) => (
            <li className="listItem" key={el.id + Date.now()}>
              <input type="checkbox" onChange={() => handleCheck(el.id)} checked={el.checked} />
              <label style={el.checked ? { textDecoration: 'line-through' } : { textDecoration: 'initial' }}>
                {el.item}
              </label>
              <button onClick={() => handleDelete(el.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ margin: '2rem' }}>List is empty!</p>
      )}
    </main>
  );
}
