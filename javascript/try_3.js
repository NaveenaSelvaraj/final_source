var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends":["everything !"]
};

ourDog.name = "Happy Camper";
ourDog.bark = "Bow bow";
delete ourDog.tails;

var myDog = {
  "name": "Quincy",
  "legs":3,
  "tailes":2,
  "friends":"total waste"
};
myDog.name = "Happy Quincy";
myDog.bark="woof";

var testObj = {
  "hat": "red",
  "shirt":"jersey",
  "shoes":"cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

var testObj1 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var enterValue = testObj["an entree"];
var drinkValue = testObj['the drink'];

var testObj = {
  12:"Namath",
  16:"Montana",
  19:"Unitas"
};

var playNumber = 16;
var player = testObj[playNumber];

function phoneticLookup(val1){

var result1="";
switch(val1){
  case "alpha":
  result1 = "Adams";
  break;
  case "bravo":
  result1 = "boston";
  break;
  case "charlie":
  result1 = "chicago";
  break;
  case "delta":
  result1 = "denver";
  break;
  case "echo":
    result1 = "easy";
    break;
  case "foxrot":
  result1 = "frank";
 }
return result1;
}
 function phoneticLookup1(val2){
  var result2 = "";

  var lookup ={
    "alpha1" : "Adams",
    "bravo" : "Boston",
    "charlie":"Chicago",
    "delta":"denver",
    "echo":"easy",
    "foxtrot":"frank"
  };
  result2 = lookup[val2];
  return result2;
 }

 console.log(phoneticLookup1("charlie"));

 var myObj = {
  gift : "pony",
  pet: "kitten",
  bed: "sleigh"
 };

 /* 
 function checkObj(checkProp){
  if (myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp]
  }
  else{
      return " not found!";
  }
 }
 console.log(checkObj("gift"));
 */

 var myMusic = [
  {
   "artist":"billy joel",
   "title":"piano man",
   "release_year":"1973",
    "formats": ["CD","8T","LP"],
    "gold":true
  },
  {
    "artist":"beau carnes",
    "title":"cereal man",
    "release_year":"2003",
"formats":["youtube video"],
  }
 ];

 var myStorage = {
  "car":{
    "inside":{
      "glove box":"maps",
      "passenger seat": "crumbs"
    },
    "outside":{
      "trunk":"jack"
  }
}
 };

 var gloveBoxContents = myStorage.car.inside["glove box"];
 console.log(gloveBoxContents);

 var myPlants = [
  {
  type: "flowers",
  list:[
    "rose",
    "tulip",
    "dandelion"
  ]
 },
{
type:"trees",
list:[
  "fir",
  "pine",
  "birch"
]
}];

var secondTree=myPlants[1].list[1];
console.log(secondTree);

var collection = {
  "2548":{
    "album":"Slippery When Wet",
    "artist":"Bon Jovi",
    "tracks":[
      "Let it Rock",
      "You give love a bad name"
    ]
  },
  "2468":{
    "album":"1999",
    "artist":"prince",
    "tracks":[
      "1999",
      "little red corvrtte"
    ]
  },
  "1245":{
    "artist":"Robert Palmer",
    "tracks":[]
  },
  "5439":{
    "album":"ABBA Gold"
  }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value){
  
if(value === ""){
delete collection[id][prop];
}else if (prop === "tracks"){
collection[id][prop]=collection[id][prop] || [];
collection[id][prop].push(value); 
}else{
  collection[id][prop]=value;
}
  return collection;
}
updateRecords(2468,"tracks","test");
console.log(updateRecords(5439,"artist","ABBA"));
