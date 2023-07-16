"use strict";

console.log('Start home work # 2');
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 01                                                                                      |
|                                                                                              |
| Запросить у пользователя его возраст и определить, кем он является:                          |
| младенцем (0–2), ребенком (2-12), подростком (12–18), взрослым (18_60)                       |
| или пенсионером (60– ...).                                                                   |
|                                                                                              |
|**********************************************************************************************/

function groupUserAge(age){
    if (isNaN(+age) || +age < 0) return 'Error: invalid argument';
    if (+age <= 2) return 'младенец';
    if (+age <= 12) return 'ребёнок';
    if (+age <= 18) return 'подросток';
    if (+age <= 60) return 'взрослый';
    return 'пенсионер';
}

// task 01 - tests
console.log('1 Task tests - groupUserAge() - группироватьВозрастПользователя()');
console.log(`\t test 1: groupUserAge('30'):     return: ${groupUserAge('30')}`);
console.log(`\t test 2: groupUserAge('2', 10):  return: ${groupUserAge('2', 10)}`);
console.log(`\t test 3: groupUserAge():         return: ${groupUserAge()}`);
console.log(`\t test 4: groupUserAge('-5'):     return: ${groupUserAge('-5')}`);
console.log(`\t test 5: groupUserAge('a'):      return: ${groupUserAge('a')}`);
console.log('');
// task 01 - tests random 
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc(Math.random() * 100);
    console.log(`\t rand ${i}: groupUserAge(${p1}): \t return: ${groupUserAge(p1)}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 02                                                                                      |
|                                                                                              |
| Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,                           |
| который расположен на этой клавише (1–!, 2–@, 3–# и т. д).                                   |
|                                                                                              |
|**********************************************************************************************/

function getSymbolByNumber(num){
    switch (+num) {
        case 1: return '!';
        case 2: return '@';
        case 3: return '#';
        case 4: return '$';
        case 5: return '%';
        case 6: return '^';
        case 7: return '&';
        case 8: return '*';
        case 9: return '(';
        case 0: return ')';
        default: return 'Error: invalid argument';
    }
}

// task 02 - tests
console.log('2 Task tests - getSymbolByNumber() - получитьСимволПоНомеру()');
console.log(`\t test 1: getSymbolByNumber('3'):  return: ${getSymbolByNumber('3')}`);
console.log(`\t test 2: getSymbolByNumber(2):    return: ${getSymbolByNumber(2)}`);
console.log(`\t test 3: getSymbolByNumber():     return: ${getSymbolByNumber()}`);
console.log(`\t test 4: getSymbolByNumber('-5'): return: ${getSymbolByNumber('-5')}`);
console.log(`\t test 5: getSymbolByNumber('a'):  return: ${getSymbolByNumber('a')}`);
console.log('');
// task 02 - tests random 
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc(Math.random() * 10);
    console.log(`\t rand ${i}: getSymbolByNumber(${p1}): \t return: ${getSymbolByNumber(p1)}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 03                                                                                      |
|                                                                                              |
| Запросить у пользователя трехзначное и число и проверить,                                    |
| есть ли в нем одинаковые цифры.                                                              |
|                                                                                              |
|**********************************************************************************************/

function checkSameDigits(num){
    if (isNaN(+num)) return 'Error: invalid argument';
    num = Math.abs(+num);
    let digit1 = Math.trunc(num/100);
    let digit2 = Math.trunc(num%100/10);
    let digit3 = num%10;
    return (digit1 == digit2 || digit2 == digit3 || digit1 == digit3) && num > 9;
}

// task 03 - tests
console.log('3 Task tests - checkSameDigits() - проверитьОдинаковостьЦифр()');
console.log(`\t test 1: checkSameDigits('323'):  return: ${checkSameDigits('323')}`);
console.log(`\t test 2: checkSameDigits(-22):    return: ${checkSameDigits(-22)}`);
console.log(`\t test 3: checkSameDigits(2):      return: ${checkSameDigits(2)}`);
console.log(`\t test 4: checkSameDigits():       return: ${checkSameDigits()}`);
console.log(`\t test 5: checkSameDigits('a'):    return: ${checkSameDigits('a')}`);
console.log('');
// task 03 - tests random 
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc((Math.random() * (102 - 101 + 1)) + 101);
    console.log(`\t rand ${i}: checkSameDigits(${p1}): \t return: ${checkSameDigits(p1)}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 04                                                                                      |
|                                                                                              |
| Запросить у пользователя год и проверить, високосный он                                      |
| или нет. Високосный год либо кратен 400, либо кратен 4 и                                     |
| при этом не кратен 100.                                                                      |
|                                                                                              |
|**********************************************************************************************/

function checkLeapYear(year){
    if (isNaN(+year)) return 'Error: invalid argument';
    year = +year;
    return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
}

// task 04 - tests
console.log('4 Task tests - checkLeapYear() - проверитьВисокосныйГод()');
console.log(`\t test 1: checkLeapYear('1900'):  return: ${checkLeapYear('1900')}`);
console.log(`\t test 2: checkLeapYear('2000'):  return: ${checkLeapYear('2000')}`);
console.log(`\t test 3: checkLeapYear(2024):    return: ${checkLeapYear(2024)}`);
console.log(`\t test 4: checkLeapYear('2100'):  return: ${checkLeapYear('2100')}`);
console.log(`\t test 5: checkLeapYear('2200'):  return: ${checkLeapYear('2200')}`);
console.log(`\t test 6: checkLeapYear('2300'):  return: ${checkLeapYear('2300')}`);
console.log(`\t test 7: checkLeapYear('2400'):  return: ${checkLeapYear('2400')}`);
console.log(`\t test 8: checkLeapYear('a'):     return: ${checkLeapYear('a')}`);
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 05                                                                                      |
|                                                                                              |
| Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.      | 
|                                                                                              |
|**********************************************************************************************/

function checkPalindrome(num){
    num = Math.abs(+num);
    if (isNaN(num) || num <= 9999 || num > 99999) return 'Error: invalid argument';
    let digit1 = Math.trunc(num/10000);
    let digit2 = Math.trunc(num%10000/1000);
    let digit4 = Math.trunc(num%100/10);
    let digit5 = num%10;
    return digit1 == digit5 && digit2 == digit4;
}

// task 05 - tests
console.log('5 Task tests - checkPalindrome() - проверитьПалиндром()');
console.log(`\t test 1: checkPalindrome('10101'):  return: ${checkPalindrome('10101')}`);
console.log(`\t test 2: checkPalindrome(-56965):   return: ${checkPalindrome(-56965)}`);
console.log(`\t test 3: checkPalindrome(99999):    return: ${checkPalindrome(99999)}`);
console.log(`\t test 4: checkPalindrome(100001):   return: ${checkPalindrome(100001)}`);
console.log(`\t test 5: checkPalindrome('a'):      return: ${checkPalindrome('a')}`);
console.log('');
// task 05 - tests random 
for(let i = 1; i <= 5; i++){
    let arr = ['23032', '54256', '69896', '12365', 'words', '36636', '11111', '-44544', '-44554', '30303'];
    let p1 = Math.trunc(Math.random() * 10);
    console.log(`\t rand ${i}: checkPalindrome(${arr[p1]}): \t return: ${checkPalindrome(arr[p1])}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 06                                                                                      |
|                                                                                              |
| Написать конвертор валют. Пользователь вводит количество USD, выбирает,                      |
| в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.  |
|                                                                                              |
|**********************************************************************************************/

function convertMoney(amountUSD, nameMoney){
    if (isNaN(+amountUSD)) return 'Error: invalid argument';
    let courseEUR = 0.90752;
    let courseUAN = 6.96;
    let courseAZN = 1.7;
    switch (nameMoney) {
        case 'EUR': return (+amountUSD * courseEUR).toFixed(2);
        case 'UAN': return (+amountUSD * courseUAN).toFixed(2);
        case 'AZN': return (+amountUSD * courseAZN).toFixed(2);
        default: return +amountUSD;
    }
}

// task 06 - tests
console.log('6 Task tests - convertMoney() - конвертироватьДеньги()');
console.log(`\t test 1: convertMoney('100', 'EUR'):  return: ${convertMoney('100', 'EUR')}`);
console.log(`\t test 2: convertMoney('100', 'UAN'):  return: ${convertMoney('100', 'UAN')}`);
console.log(`\t test 3: convertMoney(100, 'AZN'):    return: ${convertMoney(100, 'AZN')}`);
console.log(`\t test 4: convertMoney('a', 'AZN'):    return: ${convertMoney('a', 'AZN')}`);
console.log(`\t test 5: convertMoney(100):           return: ${convertMoney(100)}`);
console.log('');
// task 06 - tests random 
for(let i = 1; i <= 5; i++){
    let arr = ['EUR', 'AZN', 'UAN', 'EUR', '???', 'AZN', 'EUR', 'EUR', 'UAN', 'AZN'];
    let p1 = Math.trunc(Math.random() * 1000);
    let p2 = Math.trunc(Math.random() * 10);
    console.log(`\t rand ${i}: convertMoney(${p1}, ${arr[p2]}): \t return: ${convertMoney(p1, arr[p2])}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 07                                                                                      |
|                                                                                              |
| Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:                  |
| от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.                     |
|                                                                                              |
|**********************************************************************************************/

function getDiscountPrice(sumBuy){
    if (isNaN(+sumBuy)) return 'Error: invalid argument';
    sumBuy = +sumBuy;
    if (sumBuy >= 500) return (sumBuy * 0.93).toFixed(2);
    if (sumBuy >= 300) return (sumBuy * 0.95).toFixed(2);
    if (sumBuy >= 200) return (sumBuy * 0.97).toFixed(2);
    return sumBuy;
}

// task 07 - tests
console.log('7 Task tests - getDiscountPrice() - получитьСтоимостьСоСкидкой()');
console.log(`\t test 1: getDiscountPrice(1000):     return: ${getDiscountPrice(1000)}`);
console.log(`\t test 2: getDiscountPrice('300.00'): return: ${getDiscountPrice('300.00')}`);
console.log(`\t test 3: getDiscountPrice('200.00'): return: ${getDiscountPrice('200.00')}`);
console.log(`\t test 4: getDiscountPrice('100'):    return: ${getDiscountPrice('100')}`);
console.log(`\t test 5: getDiscountPrice('a'):      return: ${getDiscountPrice('a')}`);
console.log(`\t test 6: getDiscountPrice():         return: ${getDiscountPrice()}`);
console.log('');

// task 07 - tests random
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc((Math.random() * (1000 - 100 + 1)) + 100);
    console.log(`\t rand ${i}: getDiscountPrice(${p1}): \t return: ${getDiscountPrice(p1)}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 08                                                                                      |
|                                                                                              |
| Запросить у пользователя длину окружности и периметр квадрата.                               |
| Определить, может ли такая окружность поместиться в указанный квадрат. P=2πR                 |
|                                                                                              |
|**********************************************************************************************/

function placeCircleInSquare(lengthCircle, perimeterSqure){
    if (isNaN(+lengthCircle) || isNaN(+perimeterSqure)) return 'Error: invalid argument';
    let diameter = +lengthCircle / Math.PI;
    let sideSquare = +perimeterSqure / 4;
    return diameter <= sideSquare;
}

// task 08 - tests
console.log('8 Task tests - placeCircleInSquare() - поместитеКругВКвадрат()');
console.log(`\t test 1: placeCircleInSquare(25, 20):    return: ${placeCircleInSquare(25, 20)}`);
console.log(`\t test 2: placeCircleInSquare('2', '25'): return: ${placeCircleInSquare('2', '25')}`);
console.log(`\t test 3: placeCircleInSquare(100, '15'): return: ${placeCircleInSquare(100, '15')}`);
console.log(`\t test 4: placeCircleInSquare(100):       return: ${placeCircleInSquare(100)}`);
console.log(`\t test 5: placeCircleInSquare(100, 'a'):  return: ${placeCircleInSquare(100, 'a')}`);
console.log('');

// task 08 - tests random
for(let i = 1; i <= 5; i++){
    let p1 = Math.trunc((Math.random() * (100 - 10 + 1)) + 10);
    let p2 = Math.trunc((Math.random() * (100 - 10 + 1)) + 10);
    console.log(`\t rand ${i}: placeCircleInSquare(${p1},${p2}): \t return: ${placeCircleInSquare(p1,p2)}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 09 - НЕ ОБЯЗАТЕЛЬНО                                                                     |
|                                                                                              |
| Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.                        |
| За каждый правильный ответ начисляется 2 балла.                                              |
| После вопросов выведите пользователю количество набранных баллов.                            |
|                                                                                              |
|**********************************************************************************************/

// Рандомный результат от пользователя.
function getResponse(){
    return Boolean(Math.trunc(Math.random() * 2));
}
// Функция подсчета баллов.
function calcCorrectAnswers(answer1 = false, answer2 = false, answer3 = false){
    let totalPoints = +answer1 + +answer2 + +answer3;
    return totalPoints * 2;
}

// task 09 - tests random
console.log('9 Task tests - calcCorrectAnswers() - посчитатьПравильныеОтветы()');
for(let i = 1; i <= 8; i++){
    let p1 = getResponse();
    let p2 = getResponse();
    let p3 = getResponse();
    console.log(`\t rand ${i}: calcCorrectAnswers(${p1},${p2},${p3}):\t return: ${calcCorrectAnswers(p1,p2,p3)}`);
}
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 10                                                                                      |
|                                                                                              |
| Запросить дату (день, месяц, год) и вывести следующую за ней дату.                           |
| Учтите возможность перехода на следующий месяц, год, а также високосный год.                 |
|                                                                                              |
|**********************************************************************************************/

// Решил так, потому, что в if-ах запутался, а другое решение уже в голову не идет.
function getNextDay(day, month, year){
    let dateString = `${year}-${month}-${day}`;
    let date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    let nextDay = date.getDate();
    let nextMonth = date.getMonth() + 1;
    let nextYear = date.getFullYear();
    if (nextDay < 10) nextDay = '0' + +nextDay;
    if (nextMonth < 10) nextMonth = '0' + +nextMonth;
    return `${nextDay}.${nextMonth}.${nextYear}`;
}

// task 10 - tests random
console.log('10 Task tests - getNextDay() - получитьСледующийДень()');
console.log(`\t test 1: getNextDay(23,12,2020): \t return: ${getNextDay(23,12,2020)}`);
console.log(`\t test 2: getNextDay(9,1,2000):   \t return: ${getNextDay(9,1,2000)}`);
console.log(`\t test 3: getNextDay(31,12,2020): \t return: ${getNextDay(31,12,2020)}`);
console.log(`\t test 4: getNextDay(28,2,2024):  \t return: ${getNextDay(28,2,2024)}`);
console.log(`\t test 5: getNextDay(29,2,2000):  \t return: ${getNextDay(29,2,2000)}`);
console.log('');

console.log('End home work # 2');