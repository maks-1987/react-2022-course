import React from 'react';
import Nav from './Nav';

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <header className="header">
        Header
        <Nav />
      </header>
    </>
  );
}
