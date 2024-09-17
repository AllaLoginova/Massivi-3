let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true

// -------------------------------

let fruits = ['Яблоко', 'Апельсин', 'Яблоко']

alert( fruits.indexOf('Яблоко') ); // 0 (первый 'Яблоко')
alert( fruits.lastIndexOf('Яблоко') ); // 2 (последний 'Яблоко')

// -----------------------------------------------------------------

let result = arr.find(function(item, index, array) {
    // если true - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ложными, возвращается undefined
  });

// ----------------------------------------------------------------
// Например, у нас есть массив пользователей, 
// каждый из которых имеет поля id и name. 
// Найдем пользователя с id == 1:

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  alert(user.name); // Вася

// ------------------------------------------------------------------

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 4, name: "Вася"}
  ];
  
  // Найти индекс первого Васи
  alert(users.findIndex(user => user.name == 'Вася')); // 0
  
  // Найти индекс последнего Васи
  alert(users.findLastIndex(user => user.name == 'Вася')); // 3