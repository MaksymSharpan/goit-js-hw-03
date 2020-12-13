let input;
const numbers = [];
let total = 0;

for (; ;) {
  input = prompt('Введите число:')
  let number = Number(input)

  console.log(input);

  if (input === null) {
    for (let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }

    console.log(`Общая сумма чисел равна ${total}`);
    console.log(numbers);
    break;
  }

if (Number.isNaN(number) === false) {
    numbers.push(number);
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
}




// while (true) {
//   input = prompt('Введите число:')
//   let number = Number(input);
//   total += number;
//   // console.log(number);

//   if (input === null) {
//     // console.log(total);
//     console.log(`Общая сумма чисел равна ${total}`);
//     break;
//   }

//   else if (Number.isNaN (number)){
//     console.log('Было введено не число, попробуйте еще раз');
//   }
// }
