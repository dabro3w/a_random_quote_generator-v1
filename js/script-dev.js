/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/


const quotes = [
  {
    quote: 'Some quote 1',
    source: 'Source 1',
    citation: 'Citation 1',
    year: 1245

  },
  {
    quote: 'Some quote 2',
    source: 'Source 2',
    citation: 'Citation 2',
    year: 1956

  },
  {
    quote: 'Some quote 3',
    source: 'Source 3',
    citation: 'Citation 3',
    year: 1890

  },
  {
    quote: 'Some quote 4',
    source: 'Source 4',
    citation: 'Citation 4',
    year: 2010

  },
  {
    quote: 'Some quote 5',
    source: 'Source 5',
    citation: 'Citation 5',
    year: 2020

  }

];

let savedNumber = 0;
let quoteNumber = 0;
/***
 * `getRandomQuote` function
***/

const getRandomQuote = upper => Math.floor(Math.random() * upper);

/***
 * `printQuote` function
***/

const printQuote = () => {
  console.log(quoteNumber);
  console.log(savedNumber);
  do {
    quoteNumber = getRandomQuote(quotes.length);
    console.log(quoteNumber);
    console.log(savedNumber);
  } while (quoteNumber == savedNumber)

  savedNumber = quoteNumber;

  let html = `
  <p class="quote">${quotes[quoteNumber].quote}</p>
  <p class="source">${quotes[quoteNumber].source}
  <span class="citation">${quotes[quoteNumber].citation}</span>
  <span class="year">${quotes[quoteNumber].year}</span></p>
  `;
  document.querySelector('#quote-box').innerHTML = html;
}


/***
 * Initial print 
***/
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);