const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
for (
  const key of keys) {
  console.log(`${key}: ${user[key]}`);
} 
  


// const logItems = function (array) {
//   // console.log(array)
//   let result;

//   for (let i = 0; i < array.length; i += 1) {
//     result = console.log(`${i + 1} - ${array[i]}`);
//   };
//   return result;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// дз1







// praktica

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,

//   // greetIn: function () {
//   //   console.log('Welcome!');
//   // }
//   showName() {
//   console.log(this.name);
//   },
//   chahgeCapacity(value) {
//     this.capacity = value;
//   },
// };

// hotel.showName();
// hotel.chahgeCapacity(200);
// console.log(hotel.capacity);

// for (const key in hotel) {
//   console.log('Value: ', hotel[key]);
// }

// const keys = Object.keys(hotel);
// const values = Object.values(hotel);
// const entries = Object.entries(hotel);

// console.log(keys, values, entries);

// for (const key of keys) {
//   console.log('Value: ', hotel[key]);
// }

// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

// const goods = {
//   apples: 2,
//   potatos: 4,
//   kabanos: 1,
//   bananas: 8,
// };
// const values = Object.values(goods);
// let total = 0;

// for (const value of values) {
//   total += value;
// }
// console.log(total);


// hotel.greetIn()

// hotel.greet = function () {
//   console.log('Chao!');
// }

// hotel.greet();

// delete hotel.greetIn;
// console.log(hotel.greetIn);




// console.log(hotel.name);
// console.log(hotel['name']);

// hotel.address = '1, Beach ave.'
// console.log(hotel.address);

// // delete hotel.name;
// console.log(hotel);

// let name = 'Resort Spa';
// let stars = 7;

// const newHotel = {
//   name,
//   stars,
// };
// console.log(newHotel);



// const key = 'person';
// const getKey = function () {
//   return 'age';
// };
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// }
// console.log(object);



