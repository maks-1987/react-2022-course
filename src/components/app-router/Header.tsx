import Nav from './Nav';

type Props = {
  title: string;
  search: string;
  setSearch: Function;
};

export default function Header({ title, search, setSearch }: Props) {

  return (
    <>
      <header className="header">
        <h2 className="container">{title}</h2>
        <Nav search={search} setSearch={setSearch} />
      </header>
    </>
  );
}
