// create a new store that as data startup will take an object with the columns array and give it access to reducer function
import { legacy_createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

// przechowywanie całej logiki (! w ciele jednej funkcji) do modyfikacji/redukcji danych z magazynu za pomocą odpowiednich funkcjonalności (akcji)
const reducer = (state, action) => { // utworzenie nowego (zmodyfikowanego) stanu na podstawie starego i zwrócenie go - nadpisanie starego ztanu
                                     // arg1 - aktualny stan zawierający dane, arg2 - obiekt action z informacją, co trzeba zmienić i w jaki sposób
  switch(action.type) { // ! właściwość type obiektu action jest obligatoryjna - wskazuje ona na akcję do wykonania
    case 'ADD_COLUMN':  // jeśli type = 'ADD_COLUMN' to wykona się pierwszy return
      return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }]}  // zwrócenie jako nowy stan, obiektu, który ma zawartość starego stanu, ale z jedną zmianą…
    case 'ADD_CARD':                                                                         // właściwość columns ma być powiększona o nowy obiekt, który zawiera właściwości: id oraz payload (właściwość obiektu action)
      return { ...state, cards: [...state.cards, { id:shortid(), ...action.payload }] };      // zmiana w stanie magazynu powoduje również odświeżenie komponentów, które z niego korzystają
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};

const store = legacy_createStore( // stworzenie magazynu
  reducer, // arg1: referencja do funkcji, która odpowiada za modyfikację danych z magazynu
  initialState, // arg2: dane startowe do magazynu (zawartość początkowa stanu) zaimportowane z oddzielnego pliku
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // arg3 (opcjonalny): informacja dla Reduxa, że jeśli w przeglądarce
);                                                                             // jest zainstalowany plugin Redux Devtools, to należy z niego
                                                                               // skorzystać i przekazywać mu na bieżąco informacje o magazynie
export default store;