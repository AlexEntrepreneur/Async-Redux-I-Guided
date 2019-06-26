import {
  ADD_QUOTE,
  DELETE_QUOTE,
  MAKE_QUOTE_OF_THE_DAY,
  MARK_FAVOURITE,
  GET_QUOTES
} from '../actions/actionTypes';

export function quotesReducer(sliceOfState = [], action) {
  switch (action.type) {
    case GET_QUOTES:
      return action.payload;
    case DELETE_QUOTE:
      return action.payload;
    case ADD_QUOTE:
      return action.payload;
    case MARK_FAVOURITE:
      return action.payload
    default:
      return sliceOfState;
  }
}

export function quoteOfTheDayReducer(sliceOfState = null, action) {
  switch (action.type) {
    case MAKE_QUOTE_OF_THE_DAY:
      return action.payload;
    case DELETE_QUOTE:
      if (action.payload.id === sliceOfState) {
        return null
      }
      return sliceOfState;
    default:
      return sliceOfState;
  }
}