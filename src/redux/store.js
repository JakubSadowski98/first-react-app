// create a new store that as data startup will take an object with the columns array and give it access to reducer function
import { legacy_createStore } from 'redux';
import initialState from './initialState';

const reducer = (state, action) => {
  return state;
};

const store = legacy_createStore( // stworzenie magazynu
  reducer, // arg1: referencja do funkcji, która odpowiada za modyfikację danych z magazynu
  initialState, // arg2: dane startowe do magazynu (zawartość początkowa stanu)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // arg3 (opcjonalny): informacja dla Reduxa, że jeśli w przeglądarce
);                                                                             // jest zainstalowany plugin Redux Devtools, to należy z niego
                                                                               // skorzystać i przekazywać mu na bieżąco informacje o magazynie
export default store;