import shortid from 'shortid';

// SELECTORS
export const getAllColumns = ({ columns }) => columns;

export const getColumnsByList = ({ columns }, listId) => // zwrócenie przefiltrowanych danych - kolumn, które są skojarzone z listą o danym id
  columns.filter((column => column.listId === listId ));

// ACTION NAMES
const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_LIST');

// ACTION CREATORS
export const addColumn = payload => ({ type: ADD_COLUMN, payload });

// SUBREDUCER
const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { id: shortid(), ...action.payload }];
    default:
      return statePart;
  }
};

export default columnsReducer;