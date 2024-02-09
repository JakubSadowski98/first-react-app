// functionality: operate the form with input & button
import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
  const [title, setTitle] = useState(''); // utworzenie nowego stanu komponentu o startowej wartości pustego stringa (! React pozwala nam na tworzenie dowolnej ilości stanów w komponencie)
  const [icon, setIcon] = useState(''); // stała title/icon jest zsynchronizowana z odpowiednim inputem, zatem zmiana wartości w inpucie oznacza zmianę stanu komponentu

  const handleSubmit = e => { // włączenie funkcji callback po wykryciu eventu submit
    e.preventDefault();
    props.action({ title: title, icon: icon }); // wywołanie funkcji addColumn z komponentu List otrzymanej w argumencie props.action; przekazanie w parametrze do funkcji addColumn wartości stanów title i icon (informacje o tym, co wpisano w inputy)
    setTitle(''); // czyszczenie zawartości w input
    setIcon('');
  };

  return (
    <form className= {styles.columnForm} onSubmit={handleSubmit}> {/* dodanie do elementu nasłuchiwacza na event submit, po wykryciu którego włącza się callback */}
      {/* pola zawarte w formularzu */}
      <span className={styles.input}>Title:</span><TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} /> {/* dodanie do elementu nasłuchiwacza na event change, po wykryciu którego uruchamia się callback, która z kolei włącza setTitle z odpowiednią wartością */}
      <span className={styles.input}>Icon:</span><TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button> {/* kliknięcie w element powoduje wyemitowanie eventu submit */}
    </form>
	);
};

export default ColumnForm;