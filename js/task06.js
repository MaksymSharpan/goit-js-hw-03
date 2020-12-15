// let input;
// const numbers = [];
// let total = 0;

// for (; ;) {
//   input = prompt('Введите число:')
//   let number = Number(input)

//   console.log(input);

//   if (input === null) {
//     for (let i = 0; i < numbers.length; i += 1) {
//       total += numbers[i];
//     }

//     console.log(`Общая сумма чисел равна ${total}`);
//     console.log(numbers);
//     break;
//   }

// if (Number.isNaN(number) === false) {
//     numbers.push(number);
//   } else {
//     alert('Было введено не число, попробуйте еще раз');
//   }
// }

// // while (true) {
// //   input = prompt('Введите число:')
// //   let number = Number(input);
// //   total += number;
// //   // console.log(number);

// //   if (input === null) {
// //     // console.log(total);
// //     console.log(`Общая сумма чисел равна ${total}`);
// //     break;
// //   }

// //   else if (Number.isNaN (number)){
// //     console.log('Было введено не число, попробуйте еще раз');
// //   }
// // }


const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = (allProducts, productName) => {
  let result = 0;

  for (let product of allProducts) {
    if (product.name === productName) {
      result = product.price * product.quantity;
      return result;
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
