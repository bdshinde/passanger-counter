
let counter = 0;

let count_inc = document.getElementById("number-el")
let save_inc = document.getElementById("save-el")

function increment() {

   counter = counter + 1;
   count_inc.innerText = counter

}

function decrement() {

   counter = counter - 1;
   count_inc.innerText = counter

}

// function reset() {
//    counter = 0
//    count_inc.innerText = counter
// }

function save() {
   save_inc.innerText += " " + count_inc.innerText + " - "   // saves incremented count with values aperated by "-"
   counter = 0
   count_inc.innerText = counter
}