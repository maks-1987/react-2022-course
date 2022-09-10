import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <main>
        Home page
    </main>
    <nav>
        <Link to='/about'>About</Link>
    </nav>
    </>
  );
};
