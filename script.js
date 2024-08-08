console.log("script.js running");

let button = document.querySelector("#lowerCaseButton");
console.log(button);

let h1 = document.getElementById("hello");
console.log(h1);

button.addEventListener("click", function(event){
  console.log("lowercase clicked") ;
  h1.textContent = "hello there"
})

let button2 = document.querySelector("#upperCaseButton");
console.log(button);

button2.addEventListener("click", function(event){
  console.log("Shout clicked");
  h1.textContent = "HELLO THERE"
})