// functionality: add new column
import styles from './List.module.scss';
import { useSelector } from 'react-redux';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';

const List = () => {
  const columns = useSelector(state => state.columns); // ! hook useSelector daje dostęp do danych (stanu) magazynu
                                                       // argumenten jest funkcja callback, która ma dostęp do całego stanu magazynu i decyduje co z tego stanu zwrócić
  return (                                             // to, co callback zwróci jest też zwracane przez useSelector
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do<span>soon!</span></h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <section className={styles.columns}>
        {columns.map(column =>                   // mapowanie po tablicy: metoda map przechodzi po tablicy columns z obiektami column i zwraca nową, gdzie każdy obiekt będzie zastąpiony elementem <Column> z odpowiednimi parametrami
          <Column key={column.id} {...column} /> // ! atrybut-parametr key jest unikalną wartością, po której React będzie w stanie łatwiej identyfikować elementy w tablicy
        )}                                       {/* spread operator {...column} przekaże wszystkie właściwości obiektu column jako parametry */}
      </section>
      <ColumnForm /> 
    </div>
  );
};

export default List;