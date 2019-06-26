const express = require('express');
const cors = require('cors');
const uuid = require('uuid');

const app = express();
app.use(express.json());
app.use(cors());

let quotes = [
  {
    id: uuid(),
    author: 'Dr. Seuss',
    text: "Don't cry because it's over, smile because it happened.",
    favourite: false,
  },
  {
    id: uuid(),
    author: 'Frank Zappa',
    text: "So many books, so little time.",
    favourite: false,
  },
  {
    id: uuid(),
    author: 'Oscar Wilde',
    text: "Be yourself; everyone else is already taken.",
    favourite: false,
  },
];

function getAllQuotes(req, res) {
  res.json(quotes);
}

function getQuoteById(req, res) {
  res.json(quotes.find(friend => friend.id === req.params.id));
}

function postNewQuote(req, res) {
  const quote = { id: uuid(), ...req.body, favourite: false };
  quotes.push(quote);
  res.json(quotes);
}

function deleteQuoteById(req, res) {
  quotes = quotes.filter(friend => friend.id !== req.params.id);
  res.json(quotes);
}

function replaceQuoteById(req, res) {
  // quotes = quotes.filter(quote => quote.id !== req.params.id);
  const updatedQuote = { id: req.params.id, ...req.body };
  quotes = quotes.map(quote => {
    if (quote.id === req.params.id) {
      return updatedQuote;
    }
    return quote;
  })
  // quotes.push(updatedQuote);
  res.json(quotes);
}

app.get('/api/quotes', getAllQuotes);
app.get('/api/quotes/:id', getQuoteById);
app.post('/api/quotes', postNewQuote);
app.delete('/api/quotes/:id', deleteQuoteById);
app.put('/api/quotes/:id', replaceQuoteById);

app.listen(5000, () => console.log(
  '\nQuotes server listening on port 5000!\n',
));