const btn  = document.querySelector('button');
const heading = document.getElementById('heading')
const author = document.getElementById('author')
const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston S. Churchill" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
  ];
  


function randomQuote() {

    document.body.style.background = "black";
    document.body.style.color = "white";
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    heading.innerText = "Quote =>    " + randomQuote.quote;
    author.innerText = "Writer =>    " + randomQuote.author;
    
}

btn.addEventListener('click',randomQuote)
