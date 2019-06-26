// Thinking in States: 1-Pending => 2-Fulfilled | 3-Rejected
// We can define our Action Types based on these different states:

// export const ADDING_QUOTE = 'ADDING_QUOTE';
// export const ADD_QUOTE_SUCCESS = 'ADD_QUOTE_SUCCESS';
// export const ADD_QUOTE_FAILURE = 'ADD_QUOTE_FAILURE';

// We can then use these in our Action Creators and affect the slices
// of state (in reducers) in different ways based on these actions.

export const ADD_QUOTE = 'ADD_QUOTE';
export const DELETE_QUOTE = 'DELETE_QUOTE';
export const MAKE_QUOTE_OF_THE_DAY = 'MAKE_QUOTE_OF_THE_DAY';
export const MARK_FAVOURITE = 'MARK_FAVOURITE';
export const GET_QUOTES = 'GET_QUOTES';