"use strict";

console.log('Start home work # 1');
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 01                                                                                      |
|                                                                                              |
| Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; |
| возвращает 1 – если первое больше, чем второе; возвращает 0 – если числа равны.              |
|                                                                                              |
|**********************************************************************************************/

function compareNumbers(firstNum = 0, secondNum = firstNum){
    if (isNaN(+firstNum) || isNaN(+secondNum)) return 'Error: the arguments NaN';
    if (+firstNum > +secondNum) return -1;
    if (+firstNum < +secondNum) return 1;
    return 0;
}

// task 01 - tests
console.log('1 Task tests - compareNumbers() - сравнитьЧисла()');
console.log(`\t test 1: compareNumbers(1.1, 0.95, 2): return: ${compareNumbers(1.1, 0.95, 2)}`);
console.log(`\t test 2: compareNumbers('-2', -1):     return: ${compareNumbers('-2', -1)}`);
console.log(`\t test 3: compareNumbers(1):            return: ${compareNumbers(1)}`);
console.log(`\t test 4: compareNumbers():             return: ${compareNumbers()}`);
console.log(`\t test 5: compareNumbers('a', 5):       return: ${compareNumbers('a', 5)}`);
console.log('');
// task 01 - tests random 
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc(Math.random() * 7);
    let p2 = Math.trunc(Math.random() * 7);
    console.log(`\t rand ${i}: compareNumbers(${p1}, ${p2}): \t return: ${compareNumbers(p1, p2)}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 02 - НЕ ОБЯЗАТЕЛЬНО                                                                     |
|                                                                                              |
| Написать функцию, которая вычисляет факториал переданного ей числа.                          |
|                                                                                              |
|**********************************************************************************************/

function calcFactorial(num = 0){
    if (isNaN(+num)) return 'Error: the arguments NaN';
    if (+num < 0) return 'Error: the factorial does not exist';
    if (+num == 0) return 1;
    let factorial = 1;
    for (let i = 2; i <= +num; i++) {
        factorial *= i;
    }
    return factorial;
}

// task 02 - tests
console.log('2 Task tests - calcFactorial() - посчитатьФакториал()');
console.log(`\t test 1: calcFactorial('5', 3): return: ${calcFactorial('5', 3)}`);
console.log(`\t test 2: calcFactorial(2.495):  return: ${calcFactorial(2.495)}`);
console.log(`\t test 3: calcFactorial():       return: ${calcFactorial()}`);
console.log(`\t test 4: calcFactorial(-1):     return: ${calcFactorial(-1)}`);
console.log(`\t test 5: calcFactorial('1a')    return: ${calcFactorial('1a')}`);
console.log('');
// task 02 - tests random 
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc(Math.random() * 10);
    console.log(`\t rand ${i}: calcFactorial(${p1}): \t return: ${calcFactorial(p1)}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 03                                                                                      |
|                                                                                              |
| Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.        | 
| Например: цифры 1, 4, 9 превратятся в число 149.                                             |
|                                                                                              |
|**********************************************************************************************/

function convertToNumber(digit1 = 0, digit2 = 0, digit3 = 0){
    if (isNaN(+digit1) || isNaN(+digit2) || isNaN(+digit3)) return 'Error: the arguments NaN';
    let resultNum = String(digit1) + String(digit2) + String(digit3);
    return +resultNum;
}

// task 03 - tests
console.log('3 Task tests - convertToNumber() - преобразоватьЧисло()');
console.log(`\t test 1: convertToNumber(1, '4', 9):    return: ${convertToNumber(1, '4', 9)}`);
console.log(`\t test 2: convertToNumber(0, 2, 0):      return: ${convertToNumber(0, 2, 0)}`);
console.log(`\t test 3: convertToNumber('5'):          return: ${convertToNumber('5')}`);
console.log(`\t test 4: convertToNumber():             return: ${convertToNumber()}`);
console.log(`\t test 5: convertToNumber(1, 1, 'a'):    return: ${convertToNumber(1, 1, 'a')}`);
console.log('');
// task 03 - tests random 
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc(Math.random() * 10);
    let p2 = Math.trunc(Math.random() * 10);
    let p3 = Math.trunc(Math.random() * 10);
    console.log(`\t rand ${i}: compareNumbers(${p1},${p2},${p3}): \t return: ${convertToNumber(p1, p2, p3)}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 04                                                                                      |
|                                                                                              |
| Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.   | 
| Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.                       |
|                                                                                              |
|**********************************************************************************************/

function calcRectangleArea(lengthBox = 0, widthBox = lengthBox){
    if (isNaN(+lengthBox) || isNaN(+widthBox)) return 'Error: the arguments NaN';
    let rectangleArea = Math.abs(+lengthBox) * Math.abs(+widthBox);
    return rectangleArea.toFixed(2);
}

// task 04 - tests
console.log('4 Task tests - calcRectangleArea() - посчитатьПлощадьПрямоугольника()');
console.log(`\t test 1: calcRectangleArea(6.16, '4'): return: ${calcRectangleArea(6.16, '4')}`);
console.log(`\t test 2: calcRectangleArea(5, '-4'):   return: ${calcRectangleArea(5, '-4')}`);
console.log(`\t test 3: calcRectangleArea('a', 5):    return: ${calcRectangleArea('a', 5)}`);
console.log(`\t test 4: calcRectangleArea():          return: ${calcRectangleArea()}`);
console.log(`\t test 5: calcRectangleArea(2 * 2):     return: ${calcRectangleArea(2 * 2)}`);
console.log('');
// task 04 - tests random 
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc((Math.random() * (10 - 2 + 1)) + 2);
    let p2 = Math.trunc((Math.random() * (10 - 2 + 1)) + 2);
    console.log(`\t rand ${i}: calcRectangleArea(${p1},${p2}): \t return: ${calcRectangleArea(p1, p2)}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 05 - НЕ ОБЯЗАТЕЛЬНО                                                                     |
|                                                                                              |
| Написать функцию, которая проверяет, является ли переданное ей число совершенным.            |
| Совершенное число – это число, равное сумме всех своих собственных делителей.                |
|                                                                                              |
|**********************************************************************************************/

function checkPerfectNumber(num){
    if (isNaN(+num)) return 'Error: the arguments Nan';
    num = +num;
    let total = 0;
    for(let i = 1; i <= num / 2; i++){
        if (num % i == 0) total += i;
    }
    return total == num && num > 1;
}

// task 05 - tests
console.log('5 Task tests - checkPerfectNumber() - проверитьСовершенноеЧисло()');
console.log(`\t test 1: checkPerfectNumber('6'): return: ${checkPerfectNumber('6')}`);
console.log(`\t test 2: checkPerfectNumber(1):   return: ${checkPerfectNumber(1)}`);
console.log(`\t test 3: checkPerfectNumber(28):  return: ${checkPerfectNumber(28)}`);
console.log(`\t test 4: checkPerfectNumber('a'): return: ${checkPerfectNumber('a')}`);
console.log(`\t test 5: checkPerfectNumber():    return: ${checkPerfectNumber()}`);
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 06 - НЕ ОБЯЗАТЕЛЬНО                                                                     |
|                                                                                              |
| Написать функцию, которая принимает минимальное и максимальное значения для диапазона,       |
| и выводит только те числа из диапазона, которые являются совершенными.                       |
| Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.             |
|                                                                                              |
|**********************************************************************************************/

function findPerfectNumber(minNum, maxNum){
    if (isNaN(+minNum) || isNaN(+maxNum)) return 'Error: the arguments Nan';
    minNum = +minNum;
    maxNum = +maxNum;
    let numbers = [];
    for(let i = minNum; i <= maxNum; i++){
        if (checkPerfectNumber(i)) numbers.push(i); // use checkPerfectNumber() in task # 05
    }
    return numbers;
}

// task 06 - tests
console.log('6 Task tests - findPerfectNumber() - найтиСовершенныеЧисла()');
console.log(`\t test 1: findPerfectNumber(0, '500'):  return: ${findPerfectNumber(0, '500')}`);
console.log(`\t test 2: findPerfectNumber(-500, 500): return: ${findPerfectNumber(-500, 500)}`);
console.log(`\t test 3: findPerfectNumber(500):       return: ${findPerfectNumber(500)}`);
console.log(`\t test 4: findPerfectNumber():          return: ${findPerfectNumber()}`);
console.log(`\t test 5: findPerfectNumber('a'):       return: ${findPerfectNumber('a')}`);
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 07                                                                                      |
|                                                                                              |
| Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран     | 
| в формате «чч:мм:сс». Если при вызове функции минуты и/или секунды не были переданы,         |
| то выводить их как 00.                                                                       |
|                                                                                              |
|**********************************************************************************************/

function showTime(hours = '00', minutes = '00', seconds = '00'){
    if (isNaN(+hours) || isNaN(+minutes) || isNaN(+seconds)) return 'Error: the arguments Nan';
    +hours < 10 ? hours = '0' + +hours : hours;
    +minutes < 10 ? minutes = '0' + +minutes : minutes;
    +seconds < 10 ? seconds = '0' + +seconds : seconds;
    let formatTime = `${hours}:${minutes}:${seconds}`;
    return formatTime;
}

// task 07 - tests
console.log('7 Task tests - showTime() - показатьВремя()');
console.log(`\t test 1: showTime(1, 1, 1):       return: ${showTime(1, 1, 1)}`);
console.log(`\t test 2: showTime('1', '1', '1'): return: ${showTime('1', '1', '1')}`);
console.log(`\t test 3: showTime(7):             return: ${showTime(7)}`);
console.log(`\t test 4: showTime():              return: ${showTime()}`);
console.log(`\t test 5: showTime('a', 'a', 'a'): return: ${showTime('a', 'a', 'a')}`);
console.log('');
// task 07 - tests random 
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc((Math.random() * (23 - 0 + 1)) + 0);
    let p2 = Math.trunc((Math.random() * (59 - 0 + 1)) + 0);
    let p3 = Math.trunc((Math.random() * (59 - 0 + 1)) + 0);
    console.log(`\t rand ${i}: showTime(${p1},${p2},${p3}): \t return: ${showTime(p1, p2, p3)}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 08                                                                                      |
|                                                                                              |
| Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.|
|                                                                                              |
|**********************************************************************************************/

function getSeconds(hours = 0, minutes = 0, seconds = 0){
    if (isNaN(+hours) || isNaN(+minutes) || isNaN(+seconds)) return 'Error: the arguments NaN';
    let allSeconds = +hours * 3600 + +minutes * 60 + +seconds;
    return allSeconds;
}

// task 08 - tests
console.log('8 Task tests - getSeconds() - получитьСекунды()');
console.log(`\t test 1: getSeconds('15', 30, '45'):   return: ${getSeconds('15', 30, '45')}`);
console.log(`\t test 2: getSeconds('', '', ''):       return: ${getSeconds('', '', '')}`);
console.log(`\t test 3: getSeconds('1'):              return: ${getSeconds('1')}`);
console.log(`\t test 4: getSeconds():                 return: ${getSeconds()}`);
console.log(`\t test 5: getSeconds(7, 'a'):           return: ${getSeconds(7, 'a')}`);
console.log('');
// task 08 - tests random 
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc((Math.random() * (23 - 0 + 1)) + 0);
    let p2 = Math.trunc((Math.random() * (59 - 0 + 1)) + 0);
    let p3 = Math.trunc((Math.random() * (59 - 0 + 1)) + 0);
    console.log(`\t rand ${i}: getSeconds(${p1},${p2},${p3}): \t return: ${getSeconds(p1, p2, p3)}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 09                                                                                      |
|                                                                                              |
| Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и         |
| и секунды и возвращает в виде строки «чч:мм:сс».                                             |
|                                                                                              |
|**********************************************************************************************/

function getTime(allSeconds = 0){
    if (isNaN(+allSeconds)) return 'Error: the arguments NaN';
    // let days = Math.trunc(allSeconds / (24 * 3600));
    allSeconds = allSeconds % (24 * 3600); // закоментировать, если требуется время с часами больше 23:59:59
    let hours = Math.trunc(allSeconds / 3600);
    let minutes = Math.trunc(allSeconds % 3600 / 60);
    let seconds = allSeconds - hours * 3600 - minutes * 60;
    let formatTime = `${showTime(hours, minutes, seconds)}`; // use showTime() in task # 07
    return formatTime;
}
// task 09 - tests
console.log('9 Task tests - getTime() - получитьВремя()');
console.log(`\t test 1: getTime(1):       return: ${getTime(1)}`);
console.log(`\t test 2: getTime('86399'): return: ${getTime('86399')}`);
console.log(`\t test 3: getTime(86400):   return: ${getTime(86400)}`);
console.log(`\t test 4: getTime(222222):  return: ${getTime(222222)}`);
console.log(`\t test 5: getTime('a'):     return: ${getTime('a')}`);
console.log('');
// task 09 - tests random 
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc(Math.random() * 100000);
    console.log(`\t rand ${i}: getTime(${p1}): \t return: ${getTime(p1)}`);
}
console.log('');

console.log('End home work # 1');