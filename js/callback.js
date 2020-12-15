// const printMessage = function(message) {
//   console.log(message);
// };

// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);


// const checkId = function (id) {
//   if (id > 4 && id <= 8) {
//     console.log(true);
//   }
//   else { console.log(false);}
// }

// const higherOrderFunction = function (callback) {
//   const id = 5; 
//   console.log(callback)
//   callback(id);
// }

// higherOrderFunction(checkId);



// const summ = function (a, b) {
//   console.log(a)
//   return a+b
// }

// ggggggggggggggggggg

// const a = 1
// const b = 22
// let c = 0

// const summ = () => {
//   console.log(a + b)
  
//   c = a + b;
// }
 
// const summ = function (a, b) {
//   return a + b;
// }

// const result = function (test) {
//   const a = 5
//   const b = 6
//   console.log(test)
//   return test (a,b)
// }

// const one = result(summ);
// console.log(one)


// const repeatLog = function (n) {
//   for (let i = 1; i < n; i += 1) {
//     console.log(i)
//   }
// };
// repeatLog(10);

// действие как аргумент

const printValue = function (value) {
  console.log(value);
};
const prettyPrint = function (value) {
  console.log('Logging value: ', value)
};
const repeat = function (n, action) {
  for (let i = 0; i < n; i += 1){
    action(i);
  }
}
repeat(5, printValue);