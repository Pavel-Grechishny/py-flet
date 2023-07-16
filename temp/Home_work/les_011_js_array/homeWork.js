"use strict";

console.log('Start home work "Массивы"');
console.log('');

/**********************************************************************************************|
|                                                                                              |
| Самодеятельность - makeRandomArray()                                                         |
|                                                                                              |
| Функция для тестов - создание случаного массива из чисел                                     |
|                                                                                              |
|**********************************************************************************************/

function makeRandomArray() {
    let len = Math.trunc(Math.random() * 7 + 7);
    let arr = [];
    for (let i = 0; i < len; i++) arr.push(Math.trunc(Math.random() * 100 - 50));
    return arr;
}

/**********************************************************************************************|
|                                                                                              |
| task 1.1                                                                                     |
|                                                                                              |
| Функция принимает массив и выводит его на экран                                              |
|                                                                                              |
|**********************************************************************************************/

function printArray(arr, text = 'Массив из чисел:'){
    let str;
    arr.length === 0 ? str = '[ ]' : str = '[';
    for (let i = 0; i < arr.length; i++) {
        i === arr.length - 1 ? str += ` ${arr[i]} ]` : str += ` ${arr[i]},`;
    }
    return `${text} ${str}`;
}

// task 1.1 - tests
console.group('1.1 Task tests - printArray() - напечататьМассив()');
console.log('Tests manual');
console.log(`\t ${printArray([1])}`);
console.log(`\t ${printArray([])}`);
console.log('Tests random');
for(let i = 1; i <= 5; i++) {
    let testArr = makeRandomArray();
    console.log(`\t ${printArray(testArr)}`);  
};
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 1.2                                                                                     |
|                                                                                              |
| Функция принимает массив и выводит только четные элементы                                    |
|                                                                                              |
|**********************************************************************************************/

function showEvenItems(arr){
    let arrEvenItems = [];
    for (let item of arr){
        if (item % 2) continue;
        arrEvenItems.push(item);
    }
    return arrEvenItems;
}

// task 1.2 - tests
console.group('1.2 Task tests - showEvenItems() - показатьЧётныеЭлементы()');
console.log('Tests manual');
console.log(`\t ${printArray(showEvenItems([1, 2, 3, 4, 5, 6, 7, 8, 9]), 'Только чётные элементы:')}`);
console.log('Tests random');
for(let i = 1; i <= 5; i++) {
    let testArr = makeRandomArray();
    console.log(`\t ${printArray(showEvenItems(testArr), 'Только чётные элементы:')}`);
};
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 1.3                                                                                     |
|                                                                                              |
| Функция принимает массив и возвращает сумму всех элементов массива                           |
|                                                                                              |
|**********************************************************************************************/

function calcSumArray(arr){
    let sum = 0;
    for(let item of arr) sum += item;
    return sum;
}

// task 1.3 - tests
console.group('1.3 Task tests - calcSumArray() - посчитатьСуммуЭлементов()');
console.log('Tests manual');
console.log(`\t ${printArray([[1, 1, 1, 1, 1]], 'Сумма элементов массива:')} = ${calcSumArray([1, 1, 1, 1, 1])}`);
console.log(`\t ${printArray([], 'Сумма элементов массива:')} = ${calcSumArray([])}`);
console.log('Tests random');
for(let i = 1; i <= 5; i++) {
    let testArr = makeRandomArray();
    console.log(`\t ${printArray([testArr], 'Сумма элементов массива:')} = ${calcSumArray(testArr)}`);
};
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 1.4                                                                                     |
|                                                                                              |
| Функция принимает массив и возвращает его максимальный элемент                               |
|                                                                                              |
|**********************************************************************************************/

function findMaxItem(arr){
    let maxItem = -10e10;
    if (!arr.length) return 'Error: empty array';
    for(let item of arr) item > maxItem ? maxItem = item : maxItem;
    return maxItem;
}

// task 1.4 - tests
console.group('1.4 Task tests - findMaxItem() - найтиМаксимальныйЭлемент()');
console.log('Tests manual');
console.log(`\t ${printArray([1, 2, 3, 4, 5], 'Максимальный элемент в массиве:')} = ${findMaxItem([1, 2, 3, 4, 5])}`);
console.log(`\t ${printArray([], 'Максимальный элемент в массиве:')} = ${findMaxItem([])}`);
console.log('Tests random');
for(let i = 1; i <= 5; i++) {
    let testArr = makeRandomArray();
    console.log(`\t ${printArray(testArr, 'Максимальный элемент в массиве:')} = ${findMaxItem(testArr)}`);
};
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 1.5                                                                                     |
|                                                                                              |
| Функция добавления нового элемента в массив по указанному индексу                            |
|                                                                                              |
|**********************************************************************************************/

function addItemByIndex(item, index, arr) {
    let newArr = [];
    if (index >= arr.length) {
        arr.push(item); 
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        i !== index ? newArr.push(arr[i]) : newArr.push(item) && newArr.push(arr[i]); 
    }
    return newArr;
}

// task 1.5 - tests
console.group('1.5 Task tests - addItemByIndex() - добавитьЭлементПоИндексу()');
console.log('Tests manual');
console.log(`\t ${printArray([0, 1, 2, 3, 4, 5], 'Добавить в массив:')} ${printArray(addItemByIndex('new', 0, [0,1,2,3,4,5]), ' - новый элемент (new, 0) - ')}`);
console.log(`\t ${printArray([0, 1, 2, 3, 4, 5], 'Добавить в массив:')} ${printArray(addItemByIndex('new', 1, [0,1,2,3,4,5]), ' - новый элемент (new, 1) - ')}`);
console.log(`\t ${printArray([0, 1, 2, 3, 4, 5], 'Добавить в массив:')} ${printArray(addItemByIndex('new', 3, [0,1,2,3,4,5]), ' - новый элемент (new, 3) - ')}`);
console.log(`\t ${printArray([0, 1, 2, 3, 4, 5], 'Добавить в массив:')} ${printArray(addItemByIndex('new', 5, [0,1,2,3,4,5]), ' - новый элемент (new, 5) - ')}`);
console.log(`\t ${printArray([0, 1, 2, 3, 4, 5], 'Добавить в массив:')} ${printArray(addItemByIndex('new', 7, [0,1,2,3,4,5]), ' - новый элемент (new, 7) - ')}`);
console.log('Tests random');
for(let i = 1; i <= 5; i++) {
    let testArr = makeRandomArray();
    let testIndex = Math.trunc(Math.abs(Math.random() * testArr.length));
    console.log(`\t ${printArray(testArr, 'Добавить в массив:')} ${printArray(addItemByIndex( 'new', testIndex, testArr), `- новый элемент (new, ${testIndex}) -`)}`);
};
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 1.6                                                                                     |
|                                                                                              |
| Функция удаления элемента из массива по указанному индексу                                   |
|                                                                                              |
|**********************************************************************************************/

function delItemByIndex(index, arr) {
    let newArr = [];
    if (index >= arr.length) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        if (i === index) continue;
        newArr.push(arr[i]);
    }
    return newArr;
}

// task 1.6 - tests
console.group('1.6 Task tests - delItemByIndex() - удалитьЭлементПоИндексу()');
console.log('Tests manual');
console.log(`\t ${printArray([0, 1, 2, 3, 4, 5], 'Удалить из массива:')} ${printArray(delItemByIndex(0, [0,1,2,3,4,5]), ' - по индексу (0) - ')}`);
console.log(`\t ${printArray([0, 1, 2, 3, 4, 5], 'Удалить из массива:')} ${printArray(delItemByIndex(1, [0,1,2,3,4,5]), ' - по индексу (1) - ')}`);
console.log(`\t ${printArray([0, 1, 2, 3, 4, 5], 'Удалить из массива:')} ${printArray(delItemByIndex(3, [0,1,2,3,4,5]), ' - по индексу (3) - ')}`);
console.log(`\t ${printArray([0, 1, 2, 3, 4, 5], 'Удалить из массива:')} ${printArray(delItemByIndex(5, [0,1,2,3,4,5]), ' - по индексу (5) - ')}`);
console.log(`\t ${printArray([0, 1, 2, 3, 4, 5], 'Удалить из массива:')} ${printArray(delItemByIndex(7, [0,1,2,3,4,5]), ' - по индексу (7) - ')}`);
console.log('Tests random');
for(let i = 1; i <= 5; i++) {
    let testArr = makeRandomArray();
    let testIndex = Math.trunc(Math.abs(Math.random() * testArr.length));
    console.log(`\t ${printArray(testArr, 'Удалить из массива:')} ${printArray(delItemByIndex(testIndex, testArr), `- по индексу (${testIndex}) -`)}`);
};
console.groupEnd();
console.log('');


/**********************************************************************************************|
|                                                                                              |
| task 2.1                                                                                     |
|                                                                                              |
| Функция принимает 2 массива и возвращает новый массив,                                       |
| в котором собраны все элементы из двух массивов без повторений                               |
|                                                                                              |
|**********************************************************************************************/

// дополнительная функция проверки наличия элемента в массиве
function findItemInArray(item, arr) {
    for(let elem of arr) if(item === elem) return +item;
    return false;
}

function unionArrays(arr1, arr2) {
    let unionArr = [];
    for (let item of arr1) if(findItemInArray(item, unionArr) === false) unionArr.push(item);
    for (let item of arr2) if(findItemInArray(item, unionArr) === false) unionArr.push(item);
    return unionArr;
}

// task 2.1 - tests
console.group('2.1 Task tests - unionArrays() - объединитьМассивы()');
console.log('Tests manual');
let arr1 = [55, 1, 2, 44, 3, 1, 55, 0];
let arr2 = [3, 66, 2, 1, 77, 2, 66, 0];
console.log(`\t ${printArray(arr1, 'Массив One:')} \t ${printArray(arr2, 'Массив Two:')} \t ${printArray(unionArrays(arr1, arr2), 'Массив Union:')}`);
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 2.2                                                                                     |
|                                                                                              |
| Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы      |
| (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.      |
|                                                                                              |
|**********************************************************************************************/

function interArrays(arr1, arr2) {
    let interArr = [];
    for (let item of arr1) {
        if(findItemInArray(item, arr2) !== false && findItemInArray(item, interArr) === false){
            interArr.push(item);
        }    
    };
    return interArr;
}

// task 2.2 - tests
console.group('2.2 Task tests - interArrays() - пересечениеМассивов()');
console.log('Tests manual');
console.log(`\t ${printArray(arr1, 'Массив One:')} \t ${printArray(arr2, 'Массив Two:')} \t ${printArray(interArrays(arr1, arr2), 'Массив Intersection:')}`);
console.groupEnd();
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 2.3                                                                                     |
|                                                                                              |
| Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы        |
| из первого массива, которых нет во втором массиве                                            |
|                                                                                              |
|**********************************************************************************************/

function complArrays(arr1, arr2) {
    let complArr = [];
    for (let item of arr1) {
        if (findItemInArray(item, arr2) === false && findItemInArray(item, complArr) === false) {
            complArr.push(item);
        }
    }
    return complArr;
}

// task 2.3 - tests
console.group('2.3 Task tests - complArrays() - дополнениеМассивов()');
console.log('Tests manual');
console.log(`\t ${printArray(arr1, 'Массив One:')} \t ${printArray(arr2, 'Массив Two:')} \t ${printArray(complArrays(arr1, arr2), 'Массив Complement:')}`);
console.groupEnd();
console.log('');

console.log('End home work "Массивы"');