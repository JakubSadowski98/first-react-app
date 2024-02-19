import shortid from 'shortid';
import strContains from "../utils/strContains";

// SELECTORS
export const getCardById = ({ cards }, cardId) => // znalezienie (mnetoda find) i zwrócenie karty o danym id
  cards.find(card => card.id === cardId);

export const getFilteredCards = ({ cards, searchString }, columnId) =>  // zwrócenie przefiltrowanych danych - kart, których właściwość
  cards.filter(card =>                                                  // columnId jest zgodna z identyfikatorem danej kolumny oraz
    card.columnId === columnId && strContains(card.title, searchString) // właściwośc title zawiera odpowiednią frazę searchString
);

export const getFavoriteCard = ({cards}, isFavorite) => cards.filter(card => card.isFavorite === isFavorite);

// ACTION NAMES
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const REMOVE_CARD = createActionName('REMOVE_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');


// ACTION CREATORS
export const addCard = payload => ({ type: ADD_CARD, payload });
export const removeCard = payload => ({ type: REMOVE_CARD, payload });
export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload });

// SUBREDUCER
const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload);
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:             // togglowanie wartości wałaściwości isFavorite (zamiana false na true oraz true na false)
      return statePart;
  }
};

export default cardsReducer;