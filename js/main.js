let quoteElement=document.getElementById("quote");
let button=document.getElementById("button1");
let prevNumber =null; // Initialize the previous number to null

let quotes=[    
    '“Be yourself; everyone else is already taken.”― Oscar Wilde', 
    '“So many books, so little time.”― Frank Zappa',   
    '“A room without books is like a body without a soul.”― Marcus Tullius Cicero'   ,
    '“You only live once, but if you do it right, once is enough.”― Mae West'
    ];

button.addEventListener('click',function myFunction(){
    let usedNumbers = []; // array to keep track of used numbers
    let randomNum=getRandomNumber();
    
        quoteElement.innerText=quotes[randomNum];
        
    });
    
    

    function getRandomNumber() {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() *quotes.length); // Generate a random number 
      } while (randomNumber === prevNumber); // Check if the current number is the same as the previous one
      prevNumber = randomNumber; // Set the current number as the previous one
      return randomNumber;
    }
    