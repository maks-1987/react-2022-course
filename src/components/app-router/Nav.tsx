import { Link } from 'react-router-dom';

type Props = {
  search: string;
  setSearch: Function;
};

export default function Nav({ search, setSearch }: Props) {

  return (
    <nav className="nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Serch post</label>
        <input
          type="text"
          className="search"
          id="search"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/newpost">Newpost</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
