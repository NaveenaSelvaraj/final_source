/*
function freezeObj(){
  const MATH_CONSTANTS = {
    PI: 3.14 
  };

  Object.freeze(MATH_CONSTANTS);

try{
  MATH_CONSTANTS.PI = 99;
} 
catch(ex){
  console.log(ex);
}
return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
*/
const magic = () => new Date();

var myConcat = (arr1 , arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]));

// map , filter , reduce

const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

