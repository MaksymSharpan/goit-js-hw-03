const findLongestWord = function(string) {
  const inArray = string.split(' ');
  let biggestWord = inArray[0]

  for (let i = 1; i < inArray.length; i += 1) {
    if (biggestWord.length < inArray[i].length) {
      biggestWord = inArray[i]
    }
  }
   return biggestWord
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'


