const testConstant = 'Test Value of Constant';
var testVar = 'Test Value';
console.log('Value of testConstant: ' + testConstant);
let testVal = `${testVar} of`;
console.log('Value of testVal: ', testVal);
if(testConstant.includes(testVal)) {
  console.log('Match found !');
} else {
  console.log('Match not found !');
}