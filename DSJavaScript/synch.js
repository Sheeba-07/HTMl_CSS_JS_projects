// console.log("code1");
// console.log("code2");
// setTimeout(()=>{
//   console.log("this is delayed1")},3000);
// console.log("code3");
// setTimeout(()=>{
//   console.log("this is delayed2")},1000);
// console.log("code4");
// setInterval(()=>{
//   console.log("this is delayed3")},5000);
// console.log("code5");
// console.log("code6");
// console.log("code7");

// function sum(a,b){
//   return a+b;
// }
// function another(a,b,x){
//   const m=x(a,b);
//   console.log(m);
// }

// function getdata(id){
//   setTimeout(()=>{
//    console.log("data fetch for:",{id});
// },3000);
// }
// getdata(1);
// getdata(2);

function getdata(id,getnextdata){
  setTimeout(()=>{
    console.log("data",id);
    if(getnextdata){
      getnextdata();

    } 
  },2000);
}
getdata(1,()=>{getdata(2)})





