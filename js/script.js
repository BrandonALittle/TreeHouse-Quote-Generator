/* This script chooses a random quote from a list and displays it in the browser
    a) when the page is loaded, 
    b) when the button is clicked, and 
    c) at intervals. 
   It removes each used quote from the list until all of the quotes in the list have
   been displayed. It then refreshes the list and starts again.
   It also sets the background color of the <body> of the HTML document to a random RGB color.
*/


// Creates two global variables, "message" to store HTML, and "quotes" to store list of quotes.
var message = '';
var quotes = [];

// Fills/Refreshes the "quotes" array from the "sourceQuotes" source array
// to provide a modifiable copy of the quote list.
function refreshList() {
    quotes = quotes.concat(sourceQuotes);
}

// Returns a random quote from the list/array of quotes.
function getRandomQuote() {
    var quoteNumber = Math.floor(Math.random() * (quotes.length));
    return quotes[quoteNumber];
}

// Returns a random number between 0 and 255.
function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}

// Sets the background color of the body at random using the function "getRandomRGB".
function setRandomColor() {
    var red = getRandomRGB();
    var green = getRandomRGB();
    var blue = getRandomRGB();
    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}

// Creates HTML from the quote object, checking whether there is a profession, citation, and/or year property.
// Stores the HTML in the "message" variable.
function createMessage(quoteObject) {
    message = '<p class="quote">' + quoteObject.quote + '</p>';
    message += '<p class="source">' + quoteObject.source;
    if (quoteObject.profession !== undefined) {
        message += '<span class="profession">' + quoteObject.profession + '</span>';
    }
    if (quoteObject.citation !== undefined) {
        message += '<span class="citation">' + quoteObject.citation + '</span>';
    }
    if (quoteObject.year !== undefined) {
        message += '<span class="year">' + quoteObject.year + '</span>';
    }
    message += '</p>';
}

// 1. Checks whether list/array of quotes [quotes] is empty. 
//    If it is, list/array is refreshed using the function "refreshList".
// 2. Selects a random quote from the list/array.
// 3. Finds the selected quote object (indexOf) and deletes it (splice) from the list/array.
// 4. Creates HTML from the quote object using the function "createMessage".
// 5. Inserts the quote HTML into the page via the "quote-box".
// 6. Sets the background color at random using the function "setRandomColor".
function printQuote() {
    if (quotes.length === 0){
        refreshList();
    }
    var quote = getRandomQuote();
    quotes.splice(quotes.indexOf(quote), 1);
    createMessage(quote);
    document.getElementById("quote-box").innerHTML = message;
    setRandomColor();
}

// Refreshes quote every 20 seconds.
var intervalID = window.setInterval(printQuote, 20000);

// Displays initial quote when page is loaded.
printQuote();

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);