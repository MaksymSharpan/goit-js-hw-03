// const findLongestWord = function(string) {
//   const inArray = string.split(' ');
//   let biggestWord = inArray[0]

//   for (let i = 1; i < inArray.length; i += 1) {
//     if (biggestWord.length < inArray[i].length) {
//       biggestWord = inArray[i]
//     }
//   }
//    return biggestWord
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'


const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  let bestEmployee = keys[0];
  let biggestAmount = employees[keys[0]];

  for (let key of keys) {
    if (biggestAmount < employees[key]) {
      biggestAmount = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux