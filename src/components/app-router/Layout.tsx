import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

type Props = {
  search: string;
  setSearch: Function;
};

export default function Layout({ search, setSearch }: Props) {
  return (
    <>
      <Header title={'React-TypeScript blog'} search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </>
  );
}
