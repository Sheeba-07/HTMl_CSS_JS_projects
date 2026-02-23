//const btn=document.getElementById("btn");
//button.addEventListener("click",function(){alert("button clicked")})
//btn.addEventListener("click",function(){document.body.style.backgroundColor="pink";});
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
const btn=document.getElementById("btn");
let count=0;
btn.addEventListener("click",function(){count++;
  document.getElementById("count").innerText=count;
});