import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  search: string;
  setSearch: Function;
};

export default function SearchItem({ search, setSearch }: Props) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" style={{ position: 'absolute', left: '-100%' }}>
        Search
      </label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
