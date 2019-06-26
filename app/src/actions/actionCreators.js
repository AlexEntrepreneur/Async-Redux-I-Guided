import axios from 'axios';
import { 
  ADD_QUOTE,
  DELETE_QUOTE, 
  MAKE_QUOTE_OF_THE_DAY, 
  MARK_FAVOURITE,
  GET_QUOTES
} from './actionTypes';

export function deleteQuote(id) {
  return (dispatch) => {
    axios.delete(`http://localhost:5000/api/quotes/${id}`)
      .then(res => {
        dispatch({ type: DELETE_QUOTE, payload: res.data });
      })
      .catch(error => {
        console.log(error.message);
      })
  }
}

export function addQuote(quote) {

}

export function getQuotes() {
  return (dispatch) => {
    axios.get('http://localhost:5000/api/quotes')
      .then(res => {
        dispatch({ type: GET_QUOTES, payload: res.data })
      })
      .catch(error => {
        console.log(error.message);
      });
  }
};

export function markFavourite(id, quote) {
  return (dispatch) => {
    axios.put(`http://localhost:5000/api/quotes/${id}`, quote)
      .then(res => {
        dispatch({ type: MARK_FAVOURITE, payload: res.data });
      })
      .catch(error => {
        console.log(error.message);
      });
  }
}

export function makeQuoteOfTheDay(id) {
  return {
    type: MAKE_QUOTE_OF_THE_DAY,
    payload: id,
  };
}