import React, { FormEventHandler, useRef } from 'react';

export default function AddItem({ handleSubmit, newItem, setNewItem }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem" style={{ position: 'absolute', left: '-100%' }}>
        AddItem
      </label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required
        ref={inputRef}
      />
      <button type="submit" aria-label="Add item" onClick={() => inputRef.current?.focus()}>
        Adding item
      </button>
    </form>
  );
}

interface Props {
  newItem: string & items;
  setNewItem: Function;
  handleSubmit: FormEventHandler;
}

type items = {
  id?: number;
  checked?: boolean;
  item?: string;
};
