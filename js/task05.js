const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const entries = Object.entries(arr[i]);
    for (const entry of entries) {
      const key = entry[0];
      const value = entry[1];
      if (prop === key) {
        result.push(value);
      }
    }
  }
  return result;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []