import React from 'react';
import LineItem from './LineItem';

export default function ItemList({ items, handleCheck, handleDelete }: Props) {
  return (
    <ul>
      {items.map((el) => (
        <LineItem el={el} handleCheck={handleCheck} handleDelete={handleDelete} key={el.id + Date.now()} />
      ))}
    </ul>
  );
}

type Props = {
  items: items[];
  handleCheck: Function;
  handleDelete: Function;
};

type items = {
  id: number;
  checked: boolean;
  item: string;
};
