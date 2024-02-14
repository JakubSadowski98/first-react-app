// functionality: render & operate the form with input & button
import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const CardForm = props => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_CARD', payload: { columnId: props.columnId, title } });
    setTitle('');
  };

  return (
    <form className= {styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;