import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite =  () => {
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p>This is the Favorite subpage.</p>
    </div>
  );
};
export default Favorite;