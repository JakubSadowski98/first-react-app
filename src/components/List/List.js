// functionality: add new column
import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useState } from 'react'; // zaimportowanie hooku (specjalnej funkcji pomocniczej)
import shortid from 'shortid'; // generowanie unikalnych id

const List = () => {
  const [columns, setColumns] = useState([ // utworzenie stanu komponentu (zmiennej zawierającą dane, którą React zapisuje w swoim obiekcie) o wartości startowej równej tablicy z obiektami, następnie:
    // przypisanie referencji do tej wartości pod stałą columns,
    // przypisanie referencji do funkcji (modyfikującej wartość w columns i odświeżającej widok) do stałej setColumns
    // (!) React towrzy stan komponentu tylko przy pierwszym uruchomienu tego komponentu (wywołaniu funkcji-komponentu), zatem odświeżenie widoku nie wpływa na stan komponentu - nie jest on zerowany
    {
      id: 1,
      title: 'Books',
      icon: 'book',
      cards: [
          { id: 1, title: 'This is Going to Hurt' },
          { id: 2, title: 'Interpreter of Maladies' }
      ]
    },
    {
      id: 2,
      title: 'Movies',
      icon: 'film',
      cards: [
          { id: 1, title: 'Harry Potter' },
          { id: 2, title: 'Star Wars' }
      ]
    },
    {
      id: 3,
      title: 'Games',
      icon: 'gamepad',
      cards: [
          { id: 1, title: 'The Witcher' },
          { id: 2, title: 'Skyrim' }
      ]
    }
  ]);

  const addColumn = newColumn => { // dodanie do columns nowego obiektu zawierającego otrzymany argument newColumn (obiekt z właściwościami title i icon)
    setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]); // wstawienie, jako nowej wartości columns, nowej tablicy zawierającej elementy wyciągnięte z columns oraz nowy obiekt, następnie odświeżenie widoku -> wywołanie funkcji-komponentu z nowo utworzonymi komponentami
  };

  const addCard = (newCard, columnId) => { // funkcja potrzebuje dwóch informacji: jaką kartę dodać (tytuł karty) & jaką kolumnę wybrać (id kolumny)
    const columnsUpdated = columns.map(column => { // utworzenie nowej tablicy columnsUpdated na podstawie columns (inaczej: utworzenie nowej wersji columns)
      if(column.id === columnId) // znalezienie kolumny o danym id
        return {...column, cards: [...column.cards, { id: shortid(), title: newCard.title }]} // dodanie nowej karty, o takim tytule, który został przekazany w argumencie
      else
        return column // w przypadku innych kolumn - zwrócenie ich bez zmian
    });

    setColumns(columnsUpdated); // przypisanie columnsUpdate jako nową wartość stanu komponentu
  };

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do<span>soon!</span></h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <section className={styles.columns}>                                                                                                                {/* w JSX wewnątrz nawiasów klamrowych możemy używać JS-a w całej jego okazałości */}
        {columns.map(column => <Column key={column.id} id={column.id} title={column.title} icon={column.icon} cards={column.cards} addCard={addCard} />)} {/* mapowanie po tablicy: metoda map przechodzi po tablicy columns z obiektami column i zwraca nową, gdzie każdy obiekt będzie zastąpiony elementem <Column> z odpowiednimi parametrami */}
      </section>                                                                                                                                          {/* atrybut-parametr key (!) jest unikalną wartością, po której React będzie w stanie łatwiej identyfikować elementy w tablicy */}
      <ColumnForm action={addColumn} /> {/* przekazanie referencji do funkcji addColumn w formie atrybutu-parametru action */}
    </div>
  );
};

export default List;