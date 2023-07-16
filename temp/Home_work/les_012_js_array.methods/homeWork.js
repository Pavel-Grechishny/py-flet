"use strict";

console.log('Start home work "Методы массивов"');
console.log('');

/**********************************************************************************************|
|                                                                                              |
| makeRandomArray() - создание случаного массива из чисел                                      |
|                                                                                              |
|**********************************************************************************************/

function makeRandomArray(len) {
    // return Array(len).fill(0).map(() => Math.trunc(Math.random() * 10));
    return [...Array(len)].map(() => Math.trunc(Math.random() * 10));
}


/**********************************************************************************************|
|                                                                                              |
| task 1.1 Функция - принимает массив и выводит его на экран                                   |
|                                                                                              |
|**********************************************************************************************/

function printArray(arr, text = 'print array'){
    return text + ': [ ' + arr.join(', ') + ' ]';
}

// task 1.1 - tests
console.group('1.1 Task tests - printArray() - напечататьМассив()');
for(let i = 1; i <= 6; i++) console.log(`\t Tests random ${i} - ${printArray(makeRandomArray(12))}`);  
console.groupEnd();
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 1.2 - Функция принимает массив и выводит только четные элементы                         |
|                                                                                              |
|**********************************************************************************************/

function showEvenItems(arr) { 
    return arr.filter(item => 0 === item % 2);
}

// task 1.2 - tests
console.group('1.2 Task tests - showEvenItems() - показатьЧётныеЭлементы()');
for(let i = 1; i <= 3; i++) console.log(`\t Tests random ${i} - ${printArray(showEvenItems(makeRandomArray(12)), 'show even items')}`);
for(let i = 4; i <= 6; i++) console.log(`\t Tests random ${i} - ${printArray(makeRandomArray(12).filter(i => 0 === i % 2), 'show even items')}`);  
console.groupEnd();
console.log('');



/**********************************************************************************************|
|                                                                                              |
| task 1.3 - Функция принимает массив и возвращает сумму всех элементов массива                |
|                                                                                              |
|**********************************************************************************************/

function calcSumArray(arr){
    return arr.reduce((a, b) => a + b);
}

// task 1.3 - tests
console.group('1.3 Task tests - calcSumArray() - посчитатьСуммуЭлементов()');
for(let i = 1; i <= 3; i++) {
    let arr = makeRandomArray(10);
    console.log(`\t Tests random ${i} - ${printArray(arr, 'sum array')} = ${calcSumArray(arr)}`);
}
for(let i = 4; i <= 6; i++) {
    let arr = makeRandomArray(10);
    console.log(`\t Tests random ${i} - ${printArray(arr, 'sum array')} = ${arr.reduce((a, b) => a + b)}`);
}
console.groupEnd();
console.log('');



/**********************************************************************************************|
|                                                                                              |
| task 1.4 - Функция принимает массив и возвращает его максимальный элемент                    |
|                                                                                              |
|**********************************************************************************************/

function findMaxItem(arr){
    return arr.reduce((a, b) => a > b ? a : b);
}

// task 1.4 - tests
console.group('1.4 Task tests - findMaxItem() - найтиМаксимальныйЭлемент()');
for(let i = 1; i <= 3; i++) {
    let arr = makeRandomArray(5);
    console.log(`\t Tests random ${i} - ${printArray(arr, 'max item in array')} = ${findMaxItem(arr)}`);
}
for(let i = 4; i <= 6; i++) {
    let arr = makeRandomArray(5);
    console.log(`\t Tests random ${i} - ${printArray(arr, 'max item in array')} = ${arr.reduce((a, b) => a > b ? a : b)}`);
}
console.groupEnd();
console.log('');



/**********************************************************************************************|
|                                                                                              |
| task 1.5 - Добавить новый элемент в массив по указанному индексу (функцию не писать)         |
|                                                                                              |
|**********************************************************************************************/

// task 1.5 - tests
console.group('1.5 Task tests - добавитьЭлементПоИндексу()');
console.log('Tests random');
for(let i = 1; i <= 5; i++) {
    let index = Math.trunc(Math.random() * 9);
    let oldArray = makeRandomArray(9);
    let newArray = oldArray.slice(); // можно было не клонировать
    newArray.splice(index, 0, 'NEW'); // строка задания 
    console.log(`\t Tests random ${i} - ${printArray(oldArray, 'old array')} \t ${printArray(newArray, 'new item index ' + index)}`);
}
console.groupEnd();
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 1.6 - Функция удаления элемента из массива по указанному индексу (функцию на писать)    |
|                                                                                              |
|**********************************************************************************************/

// task 1.5 - tests
console.group('1.6 Task tests - удалитьЭлементПоИндексу()');
console.log('Tests random');
for(let i = 1; i <= 5; i++) {
    let index = Math.trunc(Math.random() * 9);
    let oldArray = makeRandomArray(9);
    let newArray = oldArray.slice(); // можно было не клонировать
    newArray.splice(index, 1); // строка задания 
    console.log(`\t Tests random ${i} - ${printArray(oldArray, 'old array')} \t ${printArray(newArray, 'del index ' + index)}`);
}
console.groupEnd();
console.log('');



/**********************************************************************************************|
|                                                                                              |
| task 2.1                                                                                     |
| Функция принимает 2 массива и возвращает новый массив,                                       |
| в котором собраны все элементы из двух массивов без повторений                               |
|                                                                                              |
| task 2.2                                                                                     |
| Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы      |
| (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.      |
|                                                                                              |
| task 2.3                                                                                     |
| Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы        |
| из первого массива, которых нет во втором массиве                                            |
|                                                                                              |
|**********************************************************************************************/


function delDup(arr) { // удалить дубли в массиве
    return arr.filter((item, index) => arr.indexOf(item) === index);
} 

function unionArrays (arr1, arr2) {
    let union = [...arr1, ...arr2];
    return delDup(union);
}

function intersectionArrays (arr1,arr2){
    let inter = arr1.filter(item => arr2.indexOf(item) !== -1);
    return delDup(inter);
}

function complementArrays (arr1,arr2){
    let compl = arr1.filter(item => arr2.indexOf(item) === -1);
    return delDup(compl);
}

// task 2 - tests
console.group('2 Task tests - union(), intersection(), complement() - объединение, пересечение, дополнение');
console.log('Tests manual');
let arr1 = [55, 1, 2, 44, 3, 1, 55, 0];
let arr2 = [3, 66, 2, 1, 77, 2, 66, 0];
console.log(`\t ${printArray(arr1, 'One')} & ${printArray(arr2, 'Two')} = ${printArray(unionArrays(arr1, arr2), 'Union')}`);
console.log(`\t ${printArray(arr1, 'One')} & ${printArray(arr2, 'Two')} = ${printArray(intersectionArrays(arr1, arr2), 'Inter')}`);
console.log(`\t ${printArray(arr1, 'One')} & ${printArray(arr2, 'Two')} = ${printArray(complementArrays(arr1, arr2), 'Compl')}`);
console.groupEnd();
console.log('');

console.log('End home work "Методы массивов"');



// Старый вариант.

// function isItem(item, arr) { // найти элемент в массиве
//     return arr.includes(item);
// }

// function unionArrays (arr1, arr2) {
//     let union = [];
//     arr1.filter(item => { if (!isItem(item ,union)) return union.push(item) });
//     arr2.forEach(item => { if (!isItem(item ,union)) return union.push(item) });
//     return union;
// }

// function intersectionArrays (arr1,arr2){
//     let inter = [];
//     let flag = item => isItem(item, arr1) && isItem(item, arr2) && !isItem(item, inter);
//     arr1.filter(item  => { if (flag(item)) return inter.push(item) });
//     return inter;
// }

// function complementArrays (arr1,arr2){
//     let compl = [];
//     let flag = item => isItem(item, arr1) && !isItem(item, arr2) && !isItem(item, compl);
//     arr1.forEach(item  => { if (flag(item)) return compl.push(item) });
//     return compl;
// }