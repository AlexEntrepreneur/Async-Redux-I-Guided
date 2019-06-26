import axios from 'axios';
import { 
  ADD_QUOTE,
  DELETE_QUOTE, 
  MAKE_QUOTE_OF_THE_DAY, 
  MARK_FAVOURITE,
  GET_QUOTES
} from './actionTypes';

export function deleteQuote(id) {

}

export function addQuote(quote) {

}

export function getQuotes() {

};

export function markFavourite(quote) {

}

export function makeQuoteOfTheDay(id) {
  return {
    type: MAKE_QUOTE_OF_THE_DAY,
    payload: id,
  };
}