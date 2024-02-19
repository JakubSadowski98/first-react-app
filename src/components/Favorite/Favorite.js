import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/store';
import Container from "../Container/Container";
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';


const Favorite =  () => {
  const cards = useSelector(state => getFavoriteCard(state, true)); // pobranie z magazynu ulubionych kart (właściwość isFavorite jest true)

  if (cards.length) { // sprawdzenie, czy tablica ulubionych kart nie jest pusta
    return (
      <Container>
        <PageTitle>Favorite</PageTitle>
        <p>This is favorite.</p>
        <ul className= {styles.cards}>
            {cards.map(card => (<Card key={card.id} id={card.id} title={card.title} />))}
        </ul>
      </Container>
    );
  }
  else {
    return (
      <Container>
        <PageTitle>You don't have favourite cards yet.</PageTitle>
      </Container>
    );
  }
};

export default Favorite;