// plik generujący (renderujący) jeden duży widok strony składający się z mniejszych komponentów (części strony)
import Container from './components/Container/Container';
import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List.js';

const App = () => { // funkcja-komponent App zwraca jeden duży widok (składający się z innych komponentów), i to on będzie przekazywany do metody render
  return (
    <Container> {/* funkcja-komponent przekazuje w treści (między tagiem otwarcia i zamknięcia) inne wywołania funkcji-komponentu jako parametr children */}
      <Hero /> {/* wywołanie funkcji-komponentu, która renderuje dany komponent*/}
      <SearchForm />
      <List />
    </Container>
  );
};

export default App;