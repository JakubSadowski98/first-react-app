// functionality: add new column
import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useState } from 'react'; // zaimportowanie hooku (specjalnej funkcji pomocniczej)
//import { useEffect } from 'react';
import shortid from 'shortid'; // generowanie unikalnych id

const List = () => {
   // utworzenie w komponencie nowej tablicy oraz dodatkowo funkcji pomocniczej, która służy do modyfikowania tej tablicy i odświeżania widoku
  const [columns, setColumns] = useState([ // utworzenie stanu komponentu (zmiennej zawierającą dane, którą React zapisuje w swoim obiekcie) o wartości startowej równej tablicy z kolumnami, następnie:
    { id: 1, title: 'Books', icon: 'book' }, // przypisanie referencji do tej wartości pod stałą columns,
    { id: 2, title: 'Movies', icon: 'film' }, // przypisanie funkcji do zmiany tej wartości do stałej setColumns
    { id: 3, title: 'Games', icon: 'gamepad' } // (!) React towrzy stan komponentu tylko przy pierwszym uruchomienu tego komponentu (wywołaniu funkcji-komponentu), zatem odświeżenie widoku nie wpływa na stan komponentu - nie jest on zerowany
  ]);
  /*
  useEffect(() => { // arg1 - callback; arg2 - tablica ze zmiennymi/stałymi, które są obserwowane
    setTimeout(() => { // arg1 - funkcja callback; arg2 - czas, po którym callback się uruchomi
      setColumns([...columns, { id: 4, title: 'Test column'}]); // wstawienie, jako nowej wartości columns, nowej tablicy zawierającej elementy wyciągnięte z columns oraz nowego obiektu, następnie odświeżenie widoku -> wywołanie funkcji-komponentu od nowa
    }, 2000);
  }, []); // jeśli nie wskazano żadnych zmiennych/stałych do obserwacji, to callback włączy się tylko raz
  */
  const addColumn = newColumn => { // dodanie do columns nowego obiektu zawierającego otrzymany argument newColumn (obiekt z właściwościami title i icon)
    setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon }]); // wstawienie, jako nowej wartości columns, nowej tablicy zawierającej elementy wyciągnięte z columns oraz nowy obiekt, następnie odświeżenie widoku -> wywołanie funkcji-komponentu z nowo utworzonymi komponentami
  };

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do<span>soon!</span></h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <section className={styles.columns}>                                                          {/* w JSX wewnątrz nawiasów klamrowych możemy używać JS-a w całej jego okazałości */}
        {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)} {/* mapowanie po tablicy: metoda map przechodzi po tablicy columns z obiektami column i zwraca nową, gdzie każdy obiekt będzie zastąpiony elementem <Column> z odpowiednimi parametrami */}
      </section>                                                                                    {/* atrybut-parametr key (!) jest unikalną wartością, po której React będzie w stanie łatwiej identyfikować elementy w tablicy */}
      <ColumnForm action={addColumn} /> {/* przekazanie referencji do funkcji addColumn w formie atrybutu-parametru action */}
    </div>
  );
};

export default List;