async function logQuotes() {
    const response = await fetch("https://api.kanye.rest/");
    const quote = await response.json();
    console.log(quote);
    document.getElementById("quoteHeading").innerText = quote.quote
}

logQuotes()