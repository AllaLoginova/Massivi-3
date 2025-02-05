// Он возвращает новый массив, в который копирует все элементы
// с индекса start до end (не включая end). start и end могут быть отрицательными, 
// в этом случае отсчёт позиции будет вестись с конца массива.

let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)

alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)

// -------------------------------------------------------
// Можно вызвать slice без аргументов: arr.slice() создаёт копию arr. 
// Это часто используют, чтобы создать копию массива для дальнейших преобразований, 
// которые не должны менять исходный массив.
