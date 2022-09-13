import ItemList from './ItemList';

export default function Content({ items, handleCheck, handleDelete }: Props) {
  return (
    <>
      {items.length ? (
        <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      ) : (
        <p style={{ margin: '2rem' }}>List is empty!</p>
      )}
    </>
  );
}

type Props = {
  items: items[];
  handleCheck: Function;
  handleDelete: Function;
};

type items = {
  id: number;
  checked: boolean;
  item: string;
};
