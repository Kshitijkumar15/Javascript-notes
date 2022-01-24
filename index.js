/*
1. ways to print in Javascript
console.log("Hello");
alert("me");
document.write("Document")

2. Javascript console API

console.log("Hello",5+6);
console.warn("this is a warning");
console.error("this is an error");

3.Javascript variables
variables:- containers to store data values
var number1 = 30;
var number2 = 45;
console.log(number1 + number2);

4.Data types in Javascript

strings

var str1 = "string one"
var str2 = "string two"

Numbers
var number1 = 30;
var number2 = 45;

Objects
var marks = {
    kshitij: 92,
    kumar: 98,
    singh: 99.80,
}

Booleans
var a = true;
var b = false;
console.log(a)

Undefined
var und = undefined;
console.log(und)

var n = null;
console.log(n)



Two types of data types in Javascript[at high leve]
1.Primitive
2.Reference
Primitive data type are: undefined,null,number,string,boolean,symbol.
Reference data types are: arrays and objects.


var arr=[12,23,45,67,99]
console.log(arr)

Operators in Javascript
addition,substraction,multiplication,division
var a = 50;
var b = 5;
console.log("the value of a + b :",a+b);
console.log("the value of a - b :",a-b);
console.log("the value of a  * b :",a*b);
console.log("the value of a / b :",a/b);

Assiggnment operators
var c = b;
c += 2;
c -= 2;
c = c - 2
c *=2
c /=2
console.log(c);

Comparision operators
var a = 22;
var b = 32; 
console.log(a==b);
console.log(a>=b);

Logical or operator
console.log(true  || true)
console.log(true  || false)
console.log(false || true)
console.log(false || false)

Logical not operator
console.log(!false);
console.log(!true);

Function in Javascript
function uses DRY= Do not repeat yourself
function avg(a, b)
{
    return(a + b)/2   //or  c = (a+b)/2;  // return c;

}
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

Conditionals in Javascript
if-else

var age = 20;
if (age> 18)
{
    console.log('You are eligible')
    
}
else 
{
    console.log('You are not eligible')
}

if-else ladder

age = 30;
if(age>2)
{
    console.log('you are not a kid');
}
else if(age>4)
{
    console.log('you are not a  shinchan');
}
else if(age>6)
{
    console.log('you are not a doremon');
}
else if(age>8)
{
    console.log('you are not nobita');
}
else
{
    console.log('sizhuka');
}
console.log('end of ladder');


var arr = [1,2,3,4,5];
console.log('arr')
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

let j=0;
const e = 0;
e++;  

let j = 0;

while(j<arr.length)
{
    console.log(arr[j])
}
{
    j++;
}


do{
    console.log(arr[j]);
    j++;
}while(j<arr.length);


Array methods
let myArr = ["fan", "light","tv", "true","false"]
console.log(myArr.length);
myArr.push("remote")
console.log(myArr)
 
String method
let myString = ("kshitij has Dukh dard peda");
console.log(myString.length);
console.log(myString.indexOf("good"));
console.log(myString.slice(3,5));
a = myString.replace("kshitij", "yogith");
a = a.replace("Dukh dard peda", "Mandal");
console.log(a, myString);

Dates in Javascript

let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());


DOM manipulation
DOM:Document object model

let elem = document.getElementById('click')
console.log(elem);

let elemClass = document.getElementsByClassName('container')
console.log(elemClass);

elemClass[0].classList.add("text-success")
console.log(elem.innerHTML);
console.log(elem.innerText);
tn = document.getElementsByTagName('div')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "this is created paragraph";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "this is created bold";
tn[0].replaceChild(createdElement2, createdElement);

Selecting using query
sel = document.querySelector('.container')
console.log(sel)
sel = document.querySelectorAll('.container')
console.log(sel)

function clicked(){
    console.log('the button was clicked')
}
window.onload = function(){
    console.log('the document was loaded')
}
Events in Javascript
firstContainer.addEventListner('click', function(){
    console.log("clicked");
})
firstContainer.addEventListner('mouseover', function(){
    console.log("mouse on conatiner");
})

Arrow functions
function sum(a, b){
    return a+b;
}
sum = (a,b)=>{
    return a+b;
}

SetTimeout and setinterval
login = ()=>{ 
    document.querySelectorAll('.container')[1].innerHTML = "<b> set interval fired </b>"
    console.log("I am your login assistant")
}
use clearInterval/clearTimeout to cancel setInterwal/setTimeout
setTimeout(login, 2343)
setInterval(login,2000)

Local storage in Javascript
localStorage.setItem('name','kshitij') : to store data in console
localStorage :to get the data
localStorage.getItem('name') :example
localStorage.removeItem('name') :to remove single item
localStorage.clear(); :to clear all

JSON: Javascript object notaion : used for data transport
obj = {name: "kshitij", length: 1, lastname: "kumar singh", lenght: 2}
js = JSON.stringify(obj);
console.log(js)
parsed =JSON.parse('{"name":"kshitij","length":1,"lastname":"kumar singh","lenght":2}')
console.log(parsed);
*/