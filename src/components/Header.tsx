import React from 'react';

export default function Header({ title }: { title: string }) {
  const headerStyle = {
    backgroundColor: 'greenyellow',
    fontWeight: 800,
    margin: '2rem',
  };

  return <header style={headerStyle}>{title}</header>;
}

Header.defaultProps = {
  title: 'Default list',
};
