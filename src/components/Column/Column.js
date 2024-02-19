// functionality: render new column
import styles from './Column.module.scss';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = props => {
  const cards = useSelector(state => getFilteredCards(state, props.id));

  return (
    <article className={styles.column}>
        <h2 className={styles.title}>
          <span className={styles.icon + ' fa fa-' + props.icon} />
          {props.title}
        </h2>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} id={card.id} title={card.title} />)} {/* przejście po każdym elemencie z tablicy cards, wraz z renderowaniem tego elementu */}
        </ul>
        <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;