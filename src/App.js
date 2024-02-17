// plik generujący (renderujący) jeden duży widok strony składający się z mniejszych komponentów (części strony)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Container from './components/Container/Container';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import List from './components/List/List';
import NotFound from './components/NotFound/NotFound';

const App = () => {   // funkcja-komponent App zwraca jeden duży widok (składający się z innych komponentów), i to on będzie przekazywany do metody render
  return (
    <main>
      <NavBar />    {/* wywołanie funkcji-komponentu, która renderuje dany komponent*/}
      <Container>   {/* funkcja-komponent przekazuje w treści (między tagiem otwarcia i zamknięcia) inne wywołania funkcji-komponentu jako parametr children */}
        <Routes>    {/* renderuje zależnie od sytuacji różną treść*/}
          <Route path="/" element={<Home />} /> {/* ustala jaki dokładnie komponent ma się pokazywać pod jakim adresem */}
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} /> {/* informacja dla routera, że część adresu (:listId) może się zmieniać*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;