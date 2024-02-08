import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput placeholder="Search..." /> {/* (!) wywołanie funkcji-komponentu z parametrem placeholder */}
      <Button>
        <span className="fa fa-search" /> {/* treść między tagami otwarcia i zamknięcia jest przekazywana do funkcji-komponentu jako parametr children */}
      </Button>
    </form>
  );
};

export default SearchForm;
