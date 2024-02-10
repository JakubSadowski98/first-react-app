// functionality: render & operate the form with input & button
import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const CardForm = props => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title }, props.columnId); // wywołanie funkcji addCard (znajdującej się w komponencie List) z dwoma parametrami: tytuł karty & id kolumny (przekazane w parametrze props)
    setTitle('');                                   // referencja do addCart jest przekazana pośrednio przez komponent Column jako parametr action
  };

  return (
    <form className= {styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;