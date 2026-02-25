
//console.log(17*5);
// function greet(){
//   console.log("hello");
// }
// greet();
// function greetPerson(name){
//   console.log("welcome"+name);
// }
// greetPerson("mariya");
// greetPerson("ma");
// function multiply(a,b,c){
//   return a*b*c;
// }
// let result=multiply(3,4,2);
// console.log(result);

// COUNT BUTTON
const btnn = document.getElementById("btnn");
let count = 0;

btnn.addEventListener("click", function () {
    count++;
    document.getElementById("count").innerText = count;
});


// CLICK BUTTON EVENTS
const btn = document.getElementById("btn");

// Normal Click Alert
btn.addEventListener("click", function () {
    alert("Button clicked");
});

// Change Background Color
btn.addEventListener("click", function () {
    document.body.style.backgroundColor = "pink";
});


// DOUBLE CLICK EVENT
btn.addEventListener("dblclick", function () {
    alert("Double click detected!");
});