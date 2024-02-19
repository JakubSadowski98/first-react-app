import shortid from 'shortid';

// SELECTORS - funkcje, które wybierają odpowiednie dane z magazynu
// export const getAllLists = state => state.lists; // zwrócenie całej tablicy lists z obiektu state
export const getAllLists = ({ lists }) => lists; // destrukturyzacji obiektu state - instrukcja { lists } wyciąga z tego obiektu tablicę lists;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId); // znalezienie (mnetoda find) i zwrócenie listy o danym id

// ACTION NAMES - przygotowanie unikalnych nazw akcji
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST'); // przypisanie do stałej unikalnej nazwy akcji, która z kolei zawiera nazwę stanu (np. lists) dotyczącego tej akcji

// ACTION CREATORS - funkcje przygotowujące obiekty-akcje zawierające właściwości type i payload 
export const addList = payload => ({type: ADD_LIST, payload});

// SUBREDUCER
const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST: // jeśli type = 'ADD_LIST' to wykona się pierwszy return
      return [...statePart, { id: shortid(), ...action.payload, }]; // zwrócenie jako nowa część stanu (state.lists), tablicy,
    default:                                                        // która ma zawartość starej tablicy oraz nowego obiektu
      return statePart;
  }
};

export default listsReducer;