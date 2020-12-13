const logItems = function (array) {
  // console.log(array)
  let result;

  for (let i = 0; i < array.length; i += 1) {
    result = console.log(`${i + 1} - ${array[i]}`);
  };
  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


