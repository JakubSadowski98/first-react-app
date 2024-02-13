// functionality: render new column
import styles from './Column.module.scss';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = props => {
  const cards = useSelector(state => // zwracanie danych state.cards, które są odpowiednio przefiltrowane
    state.cards.filter(card =>       // zwracane są tylke te karty, których właściwość columnId jest zgodna z identyfikatorem danej kolumny
      card.columnId === props.id
    )
  );

  return (
    <article className={styles.column}>
        <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} title={card.title} />)} {/* przejście po każdym elemencie z tablicy cards, wraz z renderowaniem tego elementu */}
        </ul>
        <CardForm columnId={props.id} action={props.addCard} />
    </article>
  );
};

export default Column;