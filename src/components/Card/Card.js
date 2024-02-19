// functionality: render new card
import styles from './Card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCardById, toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import { clsx } from 'clsx';

const Card = props => {
  const card = useSelector(state => getCardById(state, props.id));
  const dispatch = useDispatch();
  const toggle = () => dispatch(toggleCardFavorite(props.id));
  const remove = () => dispatch(removeCard(props.id));

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button className={styles.star} onClick={toggle}>
          <i className={clsx(card.isFavorite && styles.star_favorite, 'fa fa-star-o')}></i> {/* klasa style.favorite jest aktywna tylko wtedy, gdy właściwość card.isFavorite jest true */}
        </button>
        <button className={styles.star} onClick={remove}>
          <i className={'fa fa-trash'}></i>
        </button>
      </div>
    </li>
  );
};

export default Card;