import React from 'react';

export default function Footer({ length }: { length: number }) {
  const today = new Date();

  return (
    <footer style={{ margin: '2rem' }}>
      <p>Copyright &copy; {today.getFullYear()}</p>
      <p>{length === 1 ? 'Item' : 'Items'} in list: {length}</p>
    </footer>
  );
}
