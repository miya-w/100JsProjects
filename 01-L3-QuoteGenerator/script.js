const quoteContainer = document.getElementById('quote-generator');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// 

//get Quotes from API
let apiQuotes = [];

//show new quote

function newQuote(){
    // show the random quote from apiquote array
    const quote = apiQuotes[Math.floor(Math.random() *apiQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}

//get quote from api
async function getQuotes(){
const apiUrl = 'https://type.fit/api/quotes';
    try{ 
     const response = await fetch(apiUrl);
    apiQuotes = await response.json();
        newQuote();
    // newQuote();
    }  catch(error){

    }  

} 

//Tweet Quote
function tweetQuote(){
const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
window.open(twitterUrl,'_blank');
}


//event listners


// newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//on load
getQuotes();









// --------------------------
//local quotes


// //---show new quote

// function newQuote(){
//     const quote = localQuotes[Math.floor(Math.random() *apiQuotes.length)]
//     console.log(quote);
// }



// //---on load
// newQuotes();
