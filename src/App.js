// plik generujący jeden duży widok strony składający się z mniejszych komponentów (części strony)
import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List.js';

const App = () => { // funkcja-komponent App zwraca jeden duży widok (składający się z innych komponentów), i to on będzie przekazywany do metody render
  return (
    <div>
      <Hero /> {/* włączenie funkcji-komponentu */}
      <SearchForm />
      <List />
    </div>
  );
};

export default App;