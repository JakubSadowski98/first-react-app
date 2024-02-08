// plik, w którym inicjuje się działanie aplikacji
import ReactDOM from 'react-dom/client'; // Webpack wie, że paczka znajduje się w katalogu node_modules
import App from './App';
import './styles/normalize.scss'; // (!) importowanie styli tutaj jest możliwe dzięki działaniu Webpacka; nie ma różnicy gdzie zaimportowano dany arkusz styli - użycie klas (stylów) z tego arkusza jest możliwe również w innych komponentach (np. w Hero.js) bez potrzeby ponownego importowania
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( // renderowanie komponentu do elementu o id="root"
  <App /> // (!) użycie tagu z nazwą o dużej literze, to informacja dla Webpacka, że należy “wywołać” funkcję-komponent o takiej nazwie
);