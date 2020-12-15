// const printMessage = function(message) {
//   console.log(message);
// };

// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);


const checkId = function (id) {
  if (id > 4 && id <= 8) {
    console.log(true);
  }
  else { console.log(false);}
}

const higherOrderFunction = function (callback) {
  const id = 5; 
  console.log(callback)
  callback(id);
}

higherOrderFunction(checkId);