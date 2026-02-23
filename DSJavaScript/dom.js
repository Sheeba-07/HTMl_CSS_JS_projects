
const shop_list = document.getElementById('list');

const items=document.createElement('div');
items.innerText='ITEM1';
items.setAttribute('id','div2');
const attr_items=items.getAttribute('id');
items.removeAttribute('id');
shop_list.append(items);



const itemx=document.createElement('div');
itemx.innerHTML="Hello";
items.append(itemx);

const Item2=document.createElement('div');
Item2.innerHTML="Hello2";
items.appendChild(Item2);

const Item3=document.createElement('div');
Item3.innerHTML="Hello3";
items.insertBefore(Item3);

console.log(items.childNodes);

//items.removeChild(Item2);

while(items.firstChild){
    console.log(items.firstChild);
    items.removeChild(items.firstChild);}

//BigId-->Big-id

const item4=document.createElement('div');
item4.dataset.BigId='bigId';
item4.dataset.attrNew='new';//custom user attribute
items.append(item4);

Item3.classList.add('Book','Pen');
// console.log(Item3.className);
// Item3.classList.add('Book');
console.log(Item3.className);

// Item3.classList.toggle('Pencil');
// console.log(Item3.className);
// Item3.classList.toggle('Pencil');
// for(let i=0;i<3;i++){
//   console.log(Item3.classList.item(i));
// }

// console.log(Item3.classList.item(1));

const nav_div=document.createElement('div');
nav_div.textContent='Parent';
shop_list.appendChild(nav_div);

// const parent=document.createElement('div');
// parent.textContent='Parent';


