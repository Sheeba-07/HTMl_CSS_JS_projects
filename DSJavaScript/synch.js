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

// function getdata(id,getnextdata){
//   setTimeout(()=>{
//     console.log("data",id);
//     if(getnextdata){
//       getnextdata();

//     } 
//   },2000);
// }
// getdata(1,()=>{getdata(2)})

// callback l and call back pyramid
// function getdata(id,getnextdata){
//   setTimeout(()=>{
//     console.log("data",id);
//     if(getnextdata){
//       getnextdata();

//     } 
//   },2000);
// }
// getdata(
//   1,()=>getdata(
//   2,()=>getdata(
//     3,()=>getdata(4))
//     )
//   );


   
function getdata(id){
  console.log("Promise creating now");
  return new Promise((resolve,reject)=>{           //both promise and async await
    setTimeout(()=>{
      console.log("data from api");
        resolve("success");
      },3000);
  });
}
// let p1=getdata(1);                           //pure promise
// p1.then(()=>{
//   console.log("p1 fullfilled");
//   return getdata(2);
// }).then(()=>{
//   console.log("p2 fullfilled");
//   return getdata(3);
// }).then(()=>{
//   console.log("p3 fullfilled");
//   return getdata(4);
// }).catch((err)=>{
//   console.log({err});
// })

async function run(){
  await getdata(1);
  await getdata(2);                            //async await
  await getdata(3);
 
}
run();
console.log("this is at end");





