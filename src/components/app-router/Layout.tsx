import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

type Props = {};

export default function Layout({}: Props) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
