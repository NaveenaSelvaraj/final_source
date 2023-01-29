var outerWear = "T-Shirt";

function myOutfit(){
  outerWear = "Sweater"
  return outerWear;
}

console.log(myOutfit());

function minusSeven (num){
return num-7;
}
console.log(minusSeven(10));

var sum = 0;
function addThree(){
  sum = sum +3;
}

function addFive(){
  sum +=5;
}

var changed = 0;
function change(num){
  return (num+5)/3;
}
changed = change(10);
console.log(changed);
var processed = 0;
function processedArg(num){
  return (num+3)/5;
}
processed = processedArg(7);
console.log(processed);

function nextInLine(arr, item){
arr.push(item);
return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("before : " + testArr);
console.log(nextInLine(testArr,6));
console.log("after : " + testArr);

function welcomeToBooleans(){
  return true;
}
console.log(welcomeToBooleans());

function  ourTrueOrFalse(isItTrue){
  if(isItTrue){
    return "Yes, it is true";
  }
  return "No , it is false";
}
console.log(ourTrueOrFalse(true));

function testEqual(val){
 if(val == 12){
  return "Equal -1";
 }
  return "Not equal -1";
}
console.log(testEqual(10));

function testEqual(val){
  if(val === 10){
   return "Equal-2";
  }
   return "Not equal-2";
 }
 console.log(testEqual('10'));


 function compareEquality(a,b){
  if(a===b){
    return "equal-3";
  }
  return "not equal-3";
 }
 console.log(compareEquality(10,'10'));

 function testNonEqual(val){
 if(val !=99){
 return "Not equal-4";
 }
 return "equal-4";
 }
 console.log(testNonEqual(10));

 function testStrictNonEqual(val){
  if(val !== 99){
  return "Not equal-5";
  }
  return "equal-5";
  }
  console.log(testStrictNonEqual(10));

  function testGreaterThan(val){
    if(val >= 100){
      return "over 100";
    }
    if(val >=10){
      return "over 10";
    }
    return "10 or under";
  }
  console.log(testGreaterThan(10));

  function testLesserThan(val){
    if(val <= 100){
      return "under 100";
    }
    if(val <=10){
      return "under 10";
    }
    return "10 or over";
  }
  console.log(testLesserThan(55));

  function testElseIf(val){
    if (val > 10){
      return "Greater than 10";
    }else if(val < 5){
      return "smaller than 5";
    }else{
      return "between 5 and 10";
    }
  }

  console.log(testElseIf(7));

  var names = ["Hole-in-one!","Eagle","Bridie","Par","Bogey","Double Bogey","Go home"];
  function golfScore(par,strokes){
    if(strokes == 1){
      return names[0];
    } 
    else if (strokes <= par -2 )
    {
      return names[1];
    }
    else if (strokes == par -1)
    {
      return names[2];
    }
    else if (strokes == par  )
    {
      return names[3];
    }
    else if (strokes <= par +2 )
    {
      return names[4];
    }
    else if (strokes == par +2)
    {
      return names[5];
    }
    else if(strokes == par + 3){
      return names[6]
    }
  }

console.log(golfScore(5,4));

function abTest(a,b){
  if (a < 0 || b < 0){
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a)+ Math.sqrt(b),2));
}

console.log(abTest(2,2));

var count = 0;
function cc (card){
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
    case 10:
    case "J":
    case "K":
    case "A":
      count --;
    break;
  }
  var holdbet = 'hold';
  if (count > 0){
    holdbet = 'bet';
  }
  return count + " " + holdbet + " ";
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));
console.log(cc(4));