// plik, w którym inicjuje się działanie aplikacji
import './styles/normalize.scss'; // (!) importowanie styli tutaj jest możliwe dzięki działaniu Webpacka; nie ma różnicy gdzie zaimportowano dany arkusz styli - użycie klas (stylów) z tego arkusza jest możliwe również w innych komponentach (np. w Hero.js) bez potrzeby ponownego importowania
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';
import ReactDOM from 'react-dom/client'; // Webpack wie, że paczka znajduje się w katalogu node_modules
import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( // renderowanie komponentu do kontenera o id="root"
  <React.StrictMode>           {/* uruchomienie aplikacji w trybie ścisłym */}
    <BrowserRouter>            {/* udostępnienie funkcjonalności routera - adres strony warunkuje to, który komponent podstrony zostanie wyrenderowany */}
      <Provider store={store}> {/* dostarczenie wybranego magazynu do aplikacji za pomocą parametru store */}
        <App />                {/* użycie tagu z nazwą o dużej literze, to informacja dla Webpacka, że należy “wywołać” funkcję-komponent o takiej nazwie */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);


