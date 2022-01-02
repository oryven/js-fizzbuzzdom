
/* Scrivi un programma che esegua un ciclo da 1 a 100
e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice
per i multipli di 3,
per i multipli di 5
e per i valori che sono sia multipli di 3 che di 5.
*/

// creare variabile 

const squareCont = document.getElementById ("container");
console.log("squareCont");

// creare un ciclo per inserire 100 quadratini

for ( let i = 1 ; i <= 99; i++) {

    let square =document.createElement ("div");
    square.classList.add ("square");
    square.append (i);
    squareCont.append (square);
    console.log("squareCont");
    
// creare un div con classe square   
    // squareCont.innerHTML += `<div class=square>${i}</div>`;

// inserire delle condizioni per modificare square in base al numero ( divisibile per 3 o per 5)
    if ((i % 3 == 0) && (i % 5 == 0)){
    // squareCont.innerHTML += `<div class="square square-fizzbuzz ">FizzBuzz</div>`
    square.classList.add ("square-fizzbuzz");
    square.innerHTML = "FizzBuzz";
    }

    else if (i % 3 == 0) {
        // squareCont.innerHTML += `<div class="square square-fizz">Fizz</div>`
    square.classList.add ("square-fizz");
    square.innerHTML = "Fizz";
    } 

    else if ( i % 5 == 0) {
        // squareCont.innerHTML += `<div class="square square-buzz">Buzz</div>`
        square.classList.add ("square-buzz");
        square.innerHTML = "Buzz";
    }

}

