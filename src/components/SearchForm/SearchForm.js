import styles from './SearchForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));
    setSearchString('');
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchString} onChange={e => setSearchString(e.target.value)} /> {/* (!) wywołanie funkcji-komponentu z atrybutami-parametrami */}
      <Button>
        <span className="fa fa-search" /> {/* treść między tagami otwarcia i zamknięcia jest przekazywana do funkcji-komponentu jako parametr children */}
      </Button>
    </form>
  );
};

export default SearchForm;
