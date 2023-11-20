const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
 const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiUrl=[];


// show spinning
function load()
{
    loader.hidden=false;
    quoteContainer.hidden=true;

}

//removing spinning


function Remove()
{
    quoteContainer.hidden=false;
    loader.hidden=true;

}

// for new Quote


function newQuote()
{
    load();
    const quote = apiUrl[Math.floor(Math.random() * apiUrl.length)];

    //check if the author field is a blank
    if (!quote.author) {
        authorText.textContent = 'Unknown';
      }
    else{
        authorText.textContent=quote.author;
    }
    //check Quote length to determine styling

    if(quote.text.length >150)
    {
        quoteText.classList.add('long-quote');
    }
    else
    {
        quoteText.classList.remove('long-quote');
    }

     //set the quotes
    quoteText.textContent=quote.text;
    Remove();
}

//get Quotes from Api
async function getQuotes()
{
    load();
    const apis='https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response=await fetch(apis);
        apiUrl= await response.json();
        newQuote();
    }
    catch(error)
    {
        console.error(error);
    }
}





//Event Listeners

newQuoteBtn.addEventListener('click',newQuote);


getQuotes();

