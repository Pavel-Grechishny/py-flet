"use strict";

console.log('Start home work "Циклы"');
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 01                                                                                      |
|                                                                                              |
| Подсчитать сумму всех чисел в заданном пользователем диапазоне.                              |
|                                                                                              |
|**********************************************************************************************/

function calcSumInRange(startNum = 0, endNum = startNum){
    startNum = +startNum;
    endNum = +endNum;
    let total = 0;
    if (isNaN(startNum) || isNaN(endNum)) return 'Error: invalid argument';
    if (startNum > endNum) for (let i = startNum; i >= endNum; i--) total += i;
    if (startNum <= endNum) for (let i = startNum; i <= endNum; i++) total += i;
    return total;
}

// task 01 - tests
console.group('1 Task tests - calcSumInRange() - посчитатьСуммуДиапазона()');
console.log('Tests manual');
console.log(`\t test 1: calcSumInRange('30'):    \treturn: ${calcSumInRange('30')}`);
console.log(`\t test 2: calcSumInRange(10, 10):  \treturn: ${calcSumInRange(10, 10)}`);
console.log(`\t test 3: calcSumInRange():        \treturn: ${calcSumInRange()}`);
console.log(`\t test 4: calcSumInRange('-5'):    \treturn: ${calcSumInRange('-5')}`);
console.log(`\t test 5: calcSumInRange('a'):     \treturn: ${calcSumInRange('a')}`);
console.log('Tests random');
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc(Math.random() * 20 - 10);
    let p2 = Math.trunc(Math.random() * 20 - 10);
    console.log(`\t rand ${i}: calcSumInRange(${p1}, ${p2}):  \treturn: ${calcSumInRange(p1, p2)}`);
}
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 02                                                                                      |
|                                                                                              |
| Запросить 2 числа и найти только наибольший общий делитель                                   |
|                                                                                              |
|**********************************************************************************************/

function findMaxDiv(a, b) {
    if (isNaN(a) || isNaN(b)) return 'Error: invalid argument';
    a = Math.abs(+a);
    b = Math.abs(+b);
    while (b > 0) {
        let c = a % b;
        a = b;
        b = c; 
    }
    return a;

    // Алгоритм Евклида
    // while (fNum !== sNum) fNum > sNum ? fNum = fNum - sNum : sNum = sNum - fNum;
    // return fNum;
}

// task 02 - tests
console.group('2 Task tests - findMaxDiv() - найтиНаибольшийДелитель()');
console.log('Tests manual');
console.log(`\t test 1: findMaxDiv(16, 24):    \treturn: ${findMaxDiv(16, 24)}`);
console.log(`\t test 2: findMaxDiv(-13, 7):    \treturn: ${findMaxDiv(-13, 7)}`);
console.log(`\t test 3: findMaxDiv('6', '4'):  \treturn: ${findMaxDiv('6', '4')}`);
console.log(`\t test 4: findMaxDiv(8):         \treturn: ${findMaxDiv(8)}`);
console.log(`\t test 5: findMaxDiv('8a', 16):  \treturn: ${findMaxDiv('8a', 16)}`);
console.log('Tests random');
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc(Math.random() * 100);
    let p2 = Math.trunc(Math.random() * 100);
    console.log(`\t rand ${i}: findMaxDiv(${p1}, ${p2}):  \treturn: ${findMaxDiv(p1, p2)}`);
}
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 03                                                                                      |
|                                                                                              |
| Запросить у пользователя число и вывести все делители этого числа                            |
|                                                                                              |
|**********************************************************************************************/

function showAllDiv(num){
    if (isNaN(num)) return 'Error: invalid argument';
    num = Math.abs(+num);
    let divCollection = [1, num];
    for (let i = 2; i <= num ** 0.5; i++) {
        if (!(num % i) && !divCollection.includes(i)){
            i !== num / i ? divCollection.push(i, num / i) : divCollection.push(i);
        } 
    }
    // return divCollection.sort((a, b) => a - b); убрал сортировку, т.к. ещё не всё понял
    return divCollection;
}

// task 03 - tests
console.group('3 Task tests - showAllDiv() - показатьВсеДелители()');
console.log('Tests manual');
console.log(`\t test 1: showAllDiv(16):     \treturn: ${showAllDiv(16)}`);
console.log(`\t test 2: showAllDiv('333'):  \treturn: ${showAllDiv('333')}`);
console.log(`\t test 3: showAllDiv(-24):    \treturn: ${showAllDiv(-24)}`);
console.log(`\t test 4: showAllDiv('a'):    \treturn: ${showAllDiv('a')}`);
console.log(`\t test 5: showAllDiv():       \treturn: ${showAllDiv('a')}`);
console.log('Tests random');
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc(Math.random() * 100 - 50);
    console.log(`\t rand ${i}: showAllDiv(${p1}):  \treturn: ${showAllDiv(p1)}`);
}
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 04                                                                                      |
|                                                                                              |
| Определить количество цифр в введенном числе                                                 |
|                                                                                              |
|**********************************************************************************************/

function getCountDigits(num){
    if (isNaN(num) || typeof num === 'boolean') return 'Error: invalid argument';
    let i = 1;
    let count = 0;
    while(i <= Math.abs(num)) {
        count++;
        i *= 10;
    }
    return count;
}

// task 04 - tests
console.group('4 Task tests - getCountDigits() - получитьКоличествоЦифр()');
console.log('Tests manual');
console.log(`\t test 1: getCountDigits(7777777):   \treturn: ${getCountDigits(7777777)}`);
console.log(`\t test 2: getCountDigits('-123'):    \treturn: ${getCountDigits('-123')}`);
console.log(`\t test 3: getCountDigits('77777s'):  \treturn: ${getCountDigits('77777s')}`);
console.log(`\t test 4: getCountDigits(''):        \treturn: ${getCountDigits('')}`);
console.log(`\t test 5: getCountDigits():          \treturn: ${getCountDigits()}`);
console.log('Tests random');
for(let i = 1; i <= 5; i++){
    let arr = [1111111,22362,33300,4444,55555,7777,88888,999686, true, false];
    let p1 = arr[Math.trunc(Math.random() * 10)];
    console.log(`\t rand ${i}: getCountDigits(${p1}):  \treturn: ${getCountDigits(p1)}`);
}
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 05                                                                                      |
|                                                                                              |
| Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных,               |
| отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.                  |
| Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10)                 |
| для ввода чисел пользователем.                                                               |
|                                                                                              |
|**********************************************************************************************/

// Иммитация ввода чисел пользователем.
function getNumbers(){
    let userInputs = [];
    for (let i = 0; i < Math.trunc(Math.random() * (10 - 5 + 1) + 5); i++) {
        userInputs.push(Math.trunc(Math.random() * 1000 - 500));
    }
    return userInputs;
}

// Функция подсчета статистики.
function showStatisticNumbers(data){
    let pos = 0, neg = 0, zer = 0, evn = 0, odd = 0, unk = 0;
    for (let i = 0; i < data.length; i++){
        if (isNaN(data[i]) || typeof data[i] === 'boolean') {
            unk++;
            continue;
        };
        if (0 < data[i]) pos++;
        if (0 > data[i]) neg++;
        if (0 === data[i]) zer++;
        if (0 !== data[i] % 2) evn++;
        if (0 === data[i] % 2) odd++;         
    }
    return `статистика: положительных ${pos}, отрицательных ${neg}, нулей ${zer}, четных ${evn}, нечетных ${odd}, неизвестно ${unk}.`;
}

// task 05 - tests
console.group('5 Task tests - showStatisticNumbers() - показатьСтатистикуЧисел()');
console.log('Tests manual');
console.log(`\t test 1: showStatisticNumbers([1,-1,0,2,'2',true,'s',5,-6,3]):`); 
console.log(`\t\t\t ${showStatisticNumbers([1,-1,0,2,'2',true,'s',5,-6,3])}`);
console.log(`\t test 2: showStatisticNumbers([true,true,false,false,NaN,true,undefined,true,'str','s']):`); 
console.log(`\t\t\t ${showStatisticNumbers([true,true,false,false,NaN,true,undefined,true,'str','s'])}`);
console.log('Tests random');
for(let i = 1; i <= 5; i++){
    let p1 = getNumbers();
    console.log(`\t rand ${i}: showStatisticNumbers(${p1}):`);
    console.log(`\t\t\t ${showStatisticNumbers(p1)}`);
}
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 07                                                                                      |
|                                                                                              |
| Запросить у пользователя число и на сколько цифр его сдвинуть.                               |
| Сдвинуть цифры числа и вывести результат                                                     |
| если число 123456 сдвинуть на 2 цифры, то получится 345612.                                  |
|                                                                                              |
|**********************************************************************************************/

function shiftDigits(num, shift){
    if (shift <= 0) return num;
    let countDigits = getCountDigits(num);
    countDigits < shift ? shift = countDigits - shift % countDigits :  shift = countDigits - shift;
    let newNum = +`${num % 10 ** shift}${Math.trunc(num / 10 ** shift)}`;
    return newNum;
}

// task 07 - tests
console.group('7 Task tests - shiftDigits() - сдвинутьЦифры()');
console.log('Tests manual');
console.log(`\t test 1: shiftDigits(1234567, 0):   \treturn: ${shiftDigits(1234567, 0)}`);
console.log(`\t test 2: shiftDigits(1234567, 1):   \treturn: ${shiftDigits(1234567, 1)}`);
console.log(`\t test 3: shiftDigits(1234567, 5):   \treturn: ${shiftDigits(1234567, 5)}`);
console.log(`\t test 4: shiftDigits(1234567, 15):  \treturn: ${shiftDigits(1234567, 15)}`);
console.log(`\t test 5: shiftDigits(1234567, -7):  \treturn: ${shiftDigits(1234567, -7)}`);
console.log('Tests random');
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc(Math.random() * 100000000);
    let p2 = Math.trunc(Math.random() * 10);
    console.log(`\t rand ${i}: shiftDigits(${p1}, ${p2}):       \treturn: ${shiftDigits(p1, p2)}`);
}
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 08                                                                                      |
|                                                                                              |
| Зациклить вывод дней недели таким образом: «День недели.                                     |
| Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.             |
|                                                                                              |
|**********************************************************************************************/

function outputNextDay(indexDay = 0) {
    let daysWeek = [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье',
    ];
    let nextDay = daysWeek[indexDay + 1];
    if (indexDay === 6) nextDay = daysWeek[0];
    if (!nextDay) return 'Error: invalid argument'; 
    return nextDay;
}

function testNextDay(){
    let i = 0;
    let flag = true;
    do {
        if (i === 6) i = 0;
        console.log(`\t rand-test: testNextDay():  \treturn: ${outputNextDay(i)}`);
        i++;
        flag = Boolean(Math.trunc(Math.random() * 10)); 
    } while (flag);
}

// task 08 - tests
console.group('8 Task tests - outputNextDay() - вывестиСледующийДень()');
console.log('Tests manual');
console.log(`\t test 1: outputNextDay(8):   \treturn: ${outputNextDay(8)}`);
console.log(`\t test 2: outputNextDay(0):   \treturn: ${outputNextDay(0)}`);
console.log(`\t test 3: outputNextDay(1):   \treturn: ${outputNextDay(1)}`);
console.log(`\t test 4: outputNextDay(5):   \treturn: ${outputNextDay(5)}`);
console.log(`\t test 5: outputNextDay(6):   \treturn: ${outputNextDay(6)}`);
console.log('Tests random');
testNextDay();
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 09                                                                                      |
|                                                                                              |
| Вывести таблицу умножения для всех чисел от 2 до 9.                                          |
| Каждое число необходимо умножить на числа от 1 до 10.                                        |
|                                                                                              |
|**********************************************************************************************/

function showMultiTable(firstNum, lastNum, column){
    let checkerCol = 0;
    for (let j = 1; j <= 10; j++) {
        let str = '';
        for (let i = firstNum; i < firstNum + column; i++) {
            let formatI = '';
            let formatJ = '';
            let formatIJ = '';
            i < 10 ? formatI += ' ' + i : formatI = i;
            j < 10 ? formatJ += ' ' + j : formatJ = j;
            i * j < 10 ? formatIJ += ' ' + (i * j) : formatIJ = i * j;
            str += `\t${formatI} x ${formatJ} = ${formatIJ}\t`;
            checkerCol++;
        }
        console.log(str);
        if ((checkerCol === column * 10) && (firstNum < lastNum - column)) {
            firstNum += column;
            checkerCol = 0;
            j = 0;
            console.log('');
        }
    }
}

// task 09 - tests
console.group('9 Task tests - showMultiTable() - показатьТаблицуУмножения()');
console.log('Tests manual');
showMultiTable(2,9,4); // 2, 9, 4
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| Задания из предыдущего ДЗ - дублирутся, ранее выполнено.                                     |
|                                                                                              |
|**********************************************************************************************/

console.log('---------------------------------------------------------');
console.log('Задания из предыдущего ДЗ - дублирутся, ранее выполнено.');
console.log('---------------------------------------------------------');
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 01*                                                                                     |
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

// task 01* - tests
console.group('01* Task tests - calcFactorial() - посчитатьФакториал()');
console.log(`\t test 1: calcFactorial('5', 3): return: ${calcFactorial('5', 3)}`);
console.log(`\t test 2: calcFactorial(2.495):  return: ${calcFactorial(2.495)}`);
console.log(`\t test 3: calcFactorial():       return: ${calcFactorial()}`);
console.log(`\t test 4: calcFactorial(-1):     return: ${calcFactorial(-1)}`);
console.log(`\t test 5: calcFactorial('1a')    return: ${calcFactorial('1a')}`);
console.log('');
// task 01* - tests random 
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc(Math.random() * 10);
    console.log(`\t rand ${i}: calcFactorial(${p1}): \t return: ${calcFactorial(p1)}`);
}
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 02*                                                                                     |
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

// task 02* - tests
console.group('02* Task tests - checkPerfectNumber() - проверитьСовершенноеЧисло()');
console.log(`\t test 1: checkPerfectNumber('6'): return: ${checkPerfectNumber('6')}`);
console.log(`\t test 2: checkPerfectNumber(1):   return: ${checkPerfectNumber(1)}`);
console.log(`\t test 3: checkPerfectNumber(28):  return: ${checkPerfectNumber(28)}`);
console.log(`\t test 4: checkPerfectNumber('a'): return: ${checkPerfectNumber('a')}`);
console.log(`\t test 5: checkPerfectNumber():    return: ${checkPerfectNumber()}`);
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 03*                                                                                     |
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

// task 03* - tests
console.group('03* Task tests - findPerfectNumber() - найтиСовершенныеЧисла()');
console.log(`\t test 1: findPerfectNumber(0, '500'):  return: ${findPerfectNumber(0, '500')}`);
console.log(`\t test 2: findPerfectNumber(-500, 500): return: ${findPerfectNumber(-500, 500)}`);
console.log(`\t test 3: findPerfectNumber(500):       return: ${findPerfectNumber(500)}`);
console.log(`\t test 4: findPerfectNumber():          return: ${findPerfectNumber()}`);
console.log(`\t test 5: findPerfectNumber('a'):       return: ${findPerfectNumber('a')}`);
console.groupEnd();
console.log('');

console.log('End home work "Циклы"');