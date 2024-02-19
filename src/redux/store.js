// create a new store that as data startup will take an initialState object and give it access to reducer function
import { legacy_createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

/*
// przechowywanie całej logiki (w ciele funkcji reducer) do modyfikacji/redukcji danych z magazynu za pomocą odpowiednich funkcjonalności (akcji)
const reducer = (state, action) => {                // arg1 - aktualny stan (state) zawierający dane,
  switch(action.type) {                             // arg2 - obiekt action z informacją, co trzeba zmienić (właściwość payload) i w jaki sposób (właściwość type - akcja do wykonania)
    case "ADD_LIST":
      return{ ...state, lists: [...state.lists, { ...action.payload }]} // utworzenie nowego (zmodyfikowanego) stanu na podstawie starego i zwrócenie go (nadpisanie starego stanu)
    default                                                             // zmiana w stanie magazynu powoduje również odświeżenie komponentów, które korzystają z danych magazynu
      return state;
  }
};
*/
const subreducers = {  // obiet z informacją, które dane powinny być obsługiwane przez który subreducer
  lists: listsReducer, // np. subreducer (minifunkcja) listsReducer obsługuje dane state.lists
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
  };

const reducer = combineReducers(subreducers); // przygotowanie funkcji reducer przez funkcję combineReducers, która przyjmuje jako argument obiekt subreducers
                                              // uruchomienie reducera w komponencie (action dispatch), powoduje z kolei uruchamienie każdego subreducera
const store = legacy_createStore( // stworzenie obiektu magazynu
  reducer,      // arg1: referencja do funkcji, która odpowiada za modyfikację danych z magazynu
  initialState, // arg2: dane startowe magazynu (zawartość początkowa stanu) zaimportowane z oddzielnego pliku
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // arg3 (opcjonalny): informacja dla Reduxa, że jeśli w przeglądarce
);                                                                             // jest zainstalowany plugin Redux Devtools, to należy z niego
                                                                               // skorzystać i przekazywać mu na bieżąco informacje o magazynie
export default store;