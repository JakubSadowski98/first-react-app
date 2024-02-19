// SELECTORS


// ACTION NAMES
const createActionName = actionName => `app/searchString/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// ACTION CREATORS
export const updateSearchString = payload => ({ type: UPDATE_SEARCHSTRING, payload });

// SUBREDUCER
const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringReducer;