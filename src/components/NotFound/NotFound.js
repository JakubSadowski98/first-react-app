import styles from './NotFound.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <PageTitle>404 not found</PageTitle>
    </div>
  );
};

export default NotFound;