import React from 'react';

export default function LineItem({ el, handleCheck, handleDelete }: Props) {
  return (
    <li className="listItem">
      <input type="checkbox" onChange={() => handleCheck(el.id)} checked={el.checked} />
      <label style={el.checked ? { textDecoration: 'line-through' } : { textDecoration: 'initial' }}>
        {el.item}
      </label>
      <button onClick={() => handleDelete(el.id)}>Delete</button>
    </li>
  );
}

type Props = {
  el: items;
  handleCheck: Function;
  handleDelete: Function;
};

type items = {
  id: number;
  checked: boolean;
  item: string;
};
