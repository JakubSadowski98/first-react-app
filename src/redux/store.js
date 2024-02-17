// create a new store that as data startup will take an initialState object and give it access to reducer function
import { legacy_createStore } from 'redux';
import { strContains } from '../utils/strContains';
import initialState from './initialState';
import shortid from 'shortid';

//selectors - funkcje, które wybierają odpowiednie dane z magazynu
export const getAllLists = ({ lists }) => lists; // zwrócenie całej tablicy Lists

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId); // znalezienie (mnetoda find) listy o danym id

//export const getAllColumns = state => state.columns; // zwrócenie danych (state) z magazynu (a konkretnie całej tablicy columns)
export const getAllColumns = ({ columns }) => columns;

export const getColumnsByList = ({ columns }, listId) => columns.filter((column => column.listId === listId )); // zwrócenie kolumn, które są skojarzone z listą o danym id

export const getFilteredCards = ({ cards, searchString }, columnId) =>  // destrukturyzacji obiektu state, który został przekazany do funkcji jako parametr - instrukcja { cards, searchString } wyciąga z tego obiektu searchString oraz cards jako stałe;
  cards.filter(card =>                                                  // zwrócenie przefiltrowanych danych z magazynu
    card.columnId === columnId && strContains(card.title, searchString) // zwrócone są tylke te karty, których właściwość columnId jest zgodna z
  );                                                                    // identyfikatorem danej kolumny oraz właściwośc title zawiera odpowiednią frazę

// action creators - funkcje przygotowujące obiekty akcji zawierające właściwości type i payload
export const addList = payload => ({type: 'ADD_LIST', payload});

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

// przechowywanie całej logiki (! w ciele jednej funkcji) do modyfikacji/redukcji danych z magazynu za pomocą odpowiednich funkcjonalności (akcji)
const reducer = (state, action) => { // utworzenie nowego (zmodyfikowanego) stanu na podstawie starego i zwrócenie go - nadpisanie starego stanu
                                     // arg1 - aktualny stan zawierający dane, arg2 - obiekt action z informacją, co trzeba zmienić i w jaki sposób
  switch(action.type) { // ! właściwość type obiektu action jest obligatoryjna - wskazuje ona na akcję do wykonania
    case "ADD_LIST":
      return{ ...state, lists: [...state.lists, { id: shortid(), ...action.payload }]}
    case 'ADD_COLUMN':  // jeśli type = 'ADD_COLUMN' to wykona się pierwszy return
      return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }]}  // zwrócenie jako nowy stan, obiektu, który ma zawartość starego stanu, ale z jedną zmianą…
    case 'ADD_CARD':                                                                         // właściwość columns ma być powiększona o nowy obiekt, który zawiera właściwości: id oraz payload (właściwość obiektu action)
      return { ...state, cards: [...state.cards, { id:shortid(), ...action.payload }] };     // zmiana w stanie magazynu powoduje również odświeżenie komponentów, które z niego korzystają
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