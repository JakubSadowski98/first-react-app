import styles from './PageTitle.module.scss';

const PageTitle = props => {
  return (
    <h2 className={styles.pageTitle}>
      {props.children}
    </h2>
  );
};

export default PageTitle;