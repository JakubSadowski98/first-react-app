// functionality: render new column
import styles from './Column.module.scss';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = props => {
  const searchString = useSelector(state => state.searchString);

  const cards = useSelector(state => // zwracanie przefiltrowanych danych z state.cards
    state.cards.filter(card =>
      card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase()) // zwracane są tylke te karty, których właściwość columnId jest zgodna z
    )                                                                                             // identyfikatorem danej kolumny oraz właściwośc title zawiera odpowiednią frazę
  );

  return (
    <article className={styles.column}>
        <h2 className={styles.title}>
          <span className={styles.icon + ' fa fa-' + props.icon} />
          {props.title}
        </h2>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} title={card.title} />)} {/* przejście po każdym elemencie z tablicy cards, wraz z renderowaniem tego elementu */}
        </ul>
        <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;