import React from 'react';
import { connect } from 'react-redux';
import { addQuote } from '../actions/actionCreators';


const QuoteForm = (props) => {
  const onAddQuote = (event) => {
    const authorInput = event.target['author'];
    const quoteInput = event.target['quote']
    event.preventDefault();

    authorInput.value 
    && quoteInput.value 
    && props.addQuote(
      authorInput.value,
      quoteInput.value,
    );

    authorInput.value = '';
    quoteInput.value = '';
  }

  return (
    <div>
      <form onSubmit={onAddQuote} className="quote-form">
        <div>
          <input name="author" placeholder="Author" />
        </div>
        <div>
          <input name="quote" placeholder="Quote" />
        </div>
        <div>
          <button type="submit">Add Quote</button>
        </div>
      </form>
    </div>
  );
}

export default connect(
  null, 
  { addQuote }
)(QuoteForm);