
var myArray =[];
var i=0;
while(i<5){
myArray.push(i);
i++;
}
console.log(myArray);


var ourArray = [];
for(var j=0;j < 5;j++){
ourArray.push(j);
}
console.log(ourArray);

var oddArray=[];
for (var k=0;k<10;k +=2){
oddArray.push(k);
}
console.log(oddArray);

var oddArray2 = [];
for (var l = 10;l > 0 ; l -= 2){
oddArray2.push(l);
}

console.log(oddArray2);

var ourArrayy = [9,10,11,12];
var ourTotal = 0 ;

for (var m=0;m < ourArrayy.length;m++){
ourTotal += ourArrayy[m];
}
console.log(ourTotal);

function multiplyAll(arr){
 var product =1;
  for (var i=0;i < arr.length; i++)
  {
    for(var j=0; j<arr[i].length;j++)
      {
        product *= arr[i][j];
      } 
  }
  return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);


var myTryArray = []
var z=10;

do {
  myTryArray.push(z);
  z++;
}while(z<5)

console.log(z,myTryArray);

var contacts = [
  {
    "firstName":"Akira",
    "lastName":"Laine",
    "number":"0543236543",
    "likes":["Pizza","Coding","Brownie Points"]
  },
  {
    "firstName":"Harry",
    "lastName":"Potter",
    "number":"0994372684",
    "likes":["Howarts","Magic","Hgrid"]
  },
  {
    "firstName":"Sherlock",
    "lastName":"Holmes",
    "number":"0487345643",
    "likes":["Intriguing Cases","Violin"]
  },
  {
    "firstName":"Kristian",
    "lastName":"Vos",
    "number":"unknown",
    "likes":["JavaScript","Gaming","Foxes"]
  }
];

function lookUpProfile(name,prop){
  for(var i=0;i<contacts.length;i++){
      if(contacts[i].firstName === name){
        return contacts[i][prop] || "No such property"
      }
  }
  return "No such property";
}

var data = lookUpProfile("Akira","likes");
var data1 = lookUpProfile("shelok","likes");

console.log(data);
console.log(data1);

function randomFraction(){
  var value= Math.random();
  return value;
}

console.log(randomFraction());

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

console.log(randomNumberBetween0and19);

function randomWholeNumber(){
  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNumber());

/*
function ourRandomRange(ourMin,ourMax){
 return Math.floor(Math.round() * (ourMax - ourMin + 1))+ ourMin;
}
var xy = ourRandomRange(1,9);
console.log(xy);
*/

function randomRange(myMin,myMax){
  return Math.floor(Math.random() * (myMax - myMin + 1))+myMin;
}

var myRandom = randomRange(5,15);

console.log(myRandom);

function convertToInteger(str){
return parseInt(str);
}

var trail = convertToInteger("56");
console.log(trail);

function convertToInt(str){
  return parseInt(str,2);
}

console.log(convertToInt("10011"));

function checkEqual(a,b){
  return a === b ? true : false;
}
console.log(checkEqual(1,2));

function checkSign(num){
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(0));
console.log(checkSign(10));
console.log(checkSign(-10));

function checkScope(){
var i="function scope";
if(true){
  i="block scope";
  console.log("Block scope i is: ",i);
}  
console.log("function scope i is: ",i);
return i;
}

checkScope();

function checkScopeLet(){
  let i="function scope";
  if(true){
   let  i="block scope";
    console.log("Block scope i is: ",i);
  }  
  console.log("function scope i is: ",i);
  return i;
  }
  
  checkScopeLet();


  function printManyTimes(str){

    const SENTENCE = str + " is always cool!";

    for(let i=0; i < str.length; i += 2){
      console.log(SENTENCE);
    }
  }
  printManyTimes("MS Dhoni");

  const s = [2,5,7];

  function editInPlace(){
    s[0]=5;
    s[1]=7;
    s[2]=2;
  }
  editInPlace();

  console.log(s);

  // object.freeze