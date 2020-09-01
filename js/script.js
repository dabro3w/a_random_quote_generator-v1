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
        source: 'Source 2'
    },
    {
        quote: 'Some quote 3',
        source: 'Source 3',
        citation: 'Citation 3'
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

//const getRandomQuote = upper => Math.floor(Math.random() * upper);

const getRandomQuote = () => {
    do {
        quoteNumber = Math.floor(Math.random() * quotes.length);
    } while (quoteNumber == savedNumber)
    savedNumber = quoteNumber;

    return quotes[quoteNumber];
}


/***
 * `randomColor` and `changeBGColor` functions
 ***/

const randomColor = () => Math.floor(Math.random() * 256);

const changeBGColor = () => {
    document.body.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;

}

/***
 * `printQuote` function
 ***/

const printQuote = () => {
    const randomQuote = getRandomQuote();
    let html = `
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}`;
    if (randomQuote.citation) {
        html += ` <span class="citation">${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
        html += ` <span class="year">${randomQuote.year}</span>`;
    }

    html +=`</p>`;

    document.querySelector('#quote-box').innerHTML = html;
    changeBGColor();
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