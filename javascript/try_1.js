var myName = "Beau"

myName = 8

let ourName = "freeCodeCamp"

const pi = 3.14

var a;

var b = 2;

console.log(a);

a = 7;

b = a;

var c = 5;
var d = 10;
var e = "I am a ";

c = c +1 ;
d = d+5;
e = e + "String !";

console.log(a);

var studlyCapVar;
var properCamelCase ;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase= "A String";
titleCaseOver= 9000;

console.log(studlyCapVar);
console.log(properCamelCase);
console.log(titleCaseOver);

var sum = 10+10;
console.log(sum);

var difference = 45-33;
console.log(difference);

var product = 8 * 10;
console.log(product);

var quotient = 66 / 33;
console.log(quotient);

var myVar = 87;
myVar++;

console.log(myVar);

var myVar1 = 11;
myVar1 --;

console.log(myVar1);

var ourDecimal = 5.7;
var myDecimal = 0.0009;

console.log(ourDecimal);
console.log(myDecimal);

var product1 = 2.0 * 2.5;
console.log(product1);

var quotient1 = 4.4 / 2.0;
console.log(quotient1); 

var remainder;
remainder = 11 % 3;
console.log(remainder);

var a1 = 3;
var b1 = 17;
var c1 = 12;

a1 += 12;
b1 += 9;
c1 +=  7;

console.log(a1);
console.log(b1);
console.log(c1);

var a2 = 11;
var b2 = 9;
var c2 = 3;

a2 -= 6;
b2 -= 15;
c2 -= 1;

console.log(a2);
console.log(b2);
console.log(c2);

var a3 = 5;
var b3 = 12;
var c3 = 4.6;

a2 *= 5;
b2 *= 3;
c2 *= 10;

console.log(a3);
console.log(b3);
console.log(c3);


var a4 = 48;
var b4 = 108;
var c4 = 33;

a2 /= 12;
b2 /= 4;
c2 /= 11;

console.log(a4);
console.log(b4);
console.log(c4);

var firstName = "Naveena"
var lastName = "Selvaraj"

var myFirstName = "Navee"
var myLastName = "Selvaraj"

var myStr1 = "my name is \"naveena\" ";
console.log(myStr1);

var myStr2 = `'<a href="http://www.example.com" target="_blank">Link</a>'`;
console.log(myStr2);

/*
CODE OUTPUT 
\' single quote
\" double quote
\\ backslach
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

*/

var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr3);

var myStr4 = "This is the start . " + "This is the end..";
console.log(myStr4);

var outStr = "I come first";
outStr += "I come second.";

console.log(outStr);

var myName1 = "Naveena";
var myStr5 = "My name is " + myName1 + " and I am well ! ";
console.log(myStr5);

var someAdjective = "worthwhile";
var myStr6 = "Learning to code is ";
myStr6 += someAdjective;
console.log(myStr6);

var firstNameLength = 0;
var firstName1 = "Naveena";
firstNameLength=firstName1.length;
console.log(firstNameLength);

var firstLetterOfLastName = "";
var lastName1 = "Selvaraj";
firstLetterOfLastName = lastName1[0];
console.log(firstLetterOfLastName);

var lastLetterOfLastName = "";
lastLetterOfLastName = lastName1[lastName1.length-1];
console.log(lastLetterOfLastName);

function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
  var result ="";
  result += "The" + " " +myAdjective + " "+  myNoun + " "+myVerb + " to the store " + myAdverb;
  return result;
}

console.log(wordBlanks("dog","big","ran","quickly"));
console.log(wordBlanks("bike","slow","flew","slowly"));


var ourArray = ["Naveena",24];
var ourArray0 = ourArray[0];
var ourArray1 = ourArray[1];
console.log(ourArray0);

ourArray[1]=25;
console.log(ourArray);

var myArray = [["Naveena",24 ],["Praveena",18]];

var myArray1 =[[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var myData = myArray1[3][0];
console.log(myData);

 var pushArray = ["Naveena","Praveena"];
 console.log(pushArray);
 pushArray.push("Selvaraj","Geetha");
 console.log(pushArray);

var popArray = [["John",23],["cat",2]];
var removedFromArray = popArray.pop();
console.log(popArray);

var shiftArray = [["Praveena",24],["dog",3],["Naveena",32]];
var shiftedArray = shiftArray.shift();
console.log(shiftArray);

var unShiftArray = ["stimpson","j","cat"];
unShiftArray.shift();
console.log(unShiftArray);

var shopList = [["cereal",3],["milk",2],["bananas",3],["juice",2],["eggs",12]];

function ourResuableFunction(){
  console.log("hello world");
}
ourResuableFunction();

function sub(a,b){
 console.log(a-b);
}

sub(15,10);

var myGlobal=10;

function fun1(){
  oopsGlobal = 5;
}
function fun2(){
  var output="";
  if(typeof myGlobal != "undefined"){
    output += "myGlobal: " + myGlobal;
  }

  if(typeof oopsGlobal != "undefined"){
    output += "oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
  }
 
fun1();
fun2();

function myLocalScope(){
  var myVar2 = 5;
  console.log(myVar2);
}
myLocalScope();

