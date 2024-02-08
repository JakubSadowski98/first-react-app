import styles from './SearchForm.module.scss';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <input type="text" className={styles.input}/> {/* w JSX wszystkie elementy muszą być “zamykane” */}
      <button className={styles.button}>Search</button>
    </form>
  );
};

export default SearchForm;
