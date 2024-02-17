// functionality: add new column
import styles from './List.module.scss';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router';
import { getListById, getColumnsByList } from '../../redux/store';
import SearchForm from "../SearchForm/SearchForm";
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';

const List = () => {
  const { listId } = useParams(); // zwrócenie obiektu z parametrem linku, będącym jednocześnie właściwością listId tego obiektu o wartości typu string (np. wpisując adres list/1, to useParams zwróci obiekt {listId: '1'})
  const listData = useSelector(state => getListById(state, listId));     // ! hook useSelector daje dostęp do danych (state) magazynu
  //const columns = useSelector(getAllColumns);                          // argumenten jest funkcja callback, która ma dostęp do całego stanu magazynu i decyduje co z tego stanu zwrócić
  const columns = useSelector(state => getColumnsByList(state, listId)); // to, co callback zwróci jest też zwracane przez useSelector

  if(!listData)                 // sprawdzenie czy dana lista istnieje
    return <Navigate to="/" />  // jeśli nie to następuje przeniesienie do wybranego adresu
  else {
    return (
      <div className={styles.list}>
        <header className={styles.header}>
          <h2 className={styles.title}>{listData.title}</h2>
        </header>
        <p className={styles.description}>{listData.description}</p>
        <SearchForm />
        <section className={styles.columns}>
          {columns.map(column =>                   // mapowanie po tablicy: metoda map przechodzi po tablicy columns z obiektami column i zwraca nową, gdzie każdy obiekt będzie zastąpiony elementem <Column> z odpowiednimi parametrami
            <Column key={column.id} {...column} /> // ! atrybut-parametr key jest unikalną wartością, po której React będzie w stanie łatwiej identyfikować elementy w tablicy
          )}                                       {/* spread operator {...column} przekaże wszystkie właściwości obiektu column jako parametry */}
        </section>
        <ColumnForm listId={listId}/>
      </div>
    );
  }
};

export default List;