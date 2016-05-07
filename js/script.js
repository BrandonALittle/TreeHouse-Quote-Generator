// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var message = '';
var used = [];

function getRandomQuote() {
    var quoteNumber = Math.floor(Math.random()*(quotes.length));
    return quotes[quoteNumber];
}

function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}

function setRandomColor() {
    var red = getRandomRGB();
    var green = getRandomRGB();
    var blue = getRandomRGB();
    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue +")";
}

function printQuote() {
    var quote = getRandomQuote();
    message = '<p class="quote">' + quote.quote + '</p>';
    message += '<p class="source">' + quote.source;
    if (quote.citation !== null) {message += '<span class="citation">' + quote.citation + '</span>';}
    if (quote.year !== null) {message += '<span class="year">' + quote.year + '</span>';}
    message += '</p>';
    document.getElementById("quote-box").innerHTML = message;
    setRandomColor();
    console.log(message);
}
var intervalID = window.setInterval(printQuote, 20000);
printQuote();