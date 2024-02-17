// functionality: render & operate the form with input & button
import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
  const [title, setTitle] = useState(''); // dodanie dwóch informacji do stanu komponentu o startowej wartości pustego stringa (! React pozwala na dodawanie dowolnej ilości informacji do stanu komponentu)
  const [icon, setIcon] = useState(''); // ! stała title jest zsynchronizowana z odpowiednim inputem ( value={title} ), zatem zmiana wartości w inpucie oznacza zmianę stanu komponentu
  const dispatch = useDispatch(); // ! funkcja, która jest pośrednikiem do włączenia funkcji reduce

  const handleSubmit = e => { // włączenie funkcji callback po wykryciu eventu submit
    e.preventDefault();
    dispatch(addColumn({title, icon, listId: props.listId})); // wysłanie polecenia do Reduxa: uruchom akcję ADD_COLUMN (w funkcji reduce, argument action), przy czym nowa kolumna
                                                              // powinna przyjąć jako wartość obiekt payload = {title, icon, listId} z informacjami o tym, co wpisano w inputy i id listy
    setTitle(''); // czyszczenie zawartości w inputach
    setIcon('');
  };

  return (
    <form className= {styles.columnForm} onSubmit={handleSubmit}> {/* dodanie do elementu nasłuchiwacza na event submit, po wykryciu którego włącza się callback */}
      {/* pola zawarte w formularzu */}
      <span className={styles.input}>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} /> {/* dodanie do elementu nasłuchiwacza na event change, po wykryciu którego uruchamia się callback, która z kolei włącza setTitle z odpowiednią wartością */}
      <span className={styles.input}>Icon:</span><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button> {/* kliknięcie w element powoduje wyemitowanie eventu submit */}
    </form>
	);
};

export default ColumnForm;