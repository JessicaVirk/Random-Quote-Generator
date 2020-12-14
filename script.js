var quotes = ["It does not do to dwell on dreams and forget to live.", "If opportinity doesn't knock, build a door.", "Work hard, Dream big.","Get busy living.", "Don't limit yourself.", "Always look at the glass half full.", "Happiness depends upon ourselves."];

console.log(quotes);
console.log(quotes.length);


$(".quotes").click(function() {
    var randomQuote= Math.floor(Math.random() * quotes.length);
    $(".target").text(quotes[randomQuote] + " ");
    
});

console.log(quotes[0]);
console.log(quotes[1]);
console.log(quotes[2]);
console.log(quotes[3]);
console.log(quotes[4]);
console.log(quotes[5]);
console.log(quotes[6]);

