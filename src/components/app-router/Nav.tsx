import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav>
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
        {/* <li>
          <Link to="/missing">Missing</Link>
        </li> */}
      </ul>
    </nav>
  );
}
