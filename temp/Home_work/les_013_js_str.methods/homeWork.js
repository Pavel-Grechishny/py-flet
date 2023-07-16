"use strict";

console.log('Start home work str.methods');
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 01 - Написать функцию, которая принимает 2 строки и сравнивает их длину.                |
| Функция возвращает 1, если в первой строке больше символов, чем во второй;                   |
| -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.     |
|                                                                                              |
|**********************************************************************************************/

function compareLen(str1, str2) {
    return str1.length > str2.length ? 1 : str1.length !== str2.length ? -1 : 0;
}

// task 01 - tests
console.group('01 Task tests - compareLen() - сравнитьДлину()');
console.log(`\t test 1: compareLen('qwerty', 'qwe'): return: ${compareLen('qwerty', 'qwe')}`);
console.log(`\t test 2: compareLen('lore', 'lorem'): return: ${compareLen('lore', 'lorem')}`);
console.log(`\t test 3: compareLen('', ''):          return: ${compareLen('', '')}`);
console.groupEnd(); 
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 02 - Написать функцию, которая переводит в верхний регистр первый символ строки.        |
|                                                                                              |
|**********************************************************************************************/

function toUpperFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}

// task 02 - tests
console.group('02 Task tests - toUpperFirst() - перевестиВверхПервый()');
console.log(`\t test 1: toUpperFirst('qwerty'): return: ${toUpperFirst('qwerty')}`);
console.log(`\t test 2: toUpperFirst('lorem'):  return: ${toUpperFirst('lorem',)}`);
console.log(`\t test 3: toUpperFirst('title'):  return: ${toUpperFirst('title')}`);
console.groupEnd(); 
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 03 - Написать функцию, которая считает количество гласных букв в переданной строке.     |
|                                                                                              |
|**********************************************************************************************/

function countVowLet(str){
    let eng = 'aeiouy', rus = 'аеёиоуыэюя', count = 0;
    for (let symbol of str) {
        if (eng.includes(symbol.toLowerCase()) || rus.includes(symbol.toLowerCase())) count++;
    }
    return count;
}

// task 03 - tests
console.group('03 Task tests - countVowLet() - количествоГласныхБукв()');
console.log(`\t test 1: countVowLet('england'):  return: ${countVowLet('england')}`);
console.log(`\t test 2: countVowLet('кирилица'): return: ${countVowLet('кирилица',)}`);
console.log(`\t test 3: countVowLet('IiЯяЮёy'):  return: ${countVowLet('IiЯяЮёy')}`);
console.groupEnd(); 
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 04 - Написать функцию для проверки спама в переданной строке.                           |
| Функция возвращает true, если строка содержит спам. Спамом считать следующие слова:          |
| 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, xxx                          |
| Функция должна быть нечувствительна к регистру.                                              |
|                                                                                              |
|**********************************************************************************************/

function checkSpam(str){
    let spam = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'ххх', 'xxx'];
    for (let phrase of spam) if (str.toLowerCase().includes(phrase.toLowerCase())) return true;
    return false;
    // return Boolean(spam.filter(phrase => str.toLowerCase().includes(phrase)).length)
}

// task 04 - tests
console.group('04 Task tests - checkSpam() - проверитьСпам()');
console.log(`\t test 1: checkSpam('100% бесплатно'):          return: ${checkSpam('100% бесплатно')}`);
console.log(`\t test 2: checkSpam('qwerty'):                  return: ${checkSpam('qwerty',)}`);
console.log(`\t test 3: checkSpam('Текст УвЕЛиЧеНИЕ ПрОдаЖ'): return: ${checkSpam('Текст УвЕЛиЧеНИЕ ПрОдаЖ')}`);
console.groupEnd(); 
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 05 - Написать функцию сокращения строки. Функция принимает строку и ее                  |
| максимальную длину. Если длина строки больше, чем максимальная, то необходимо отбросить      |
| лишние символы, добавив вместо них троеточие.                                                |
| Например: translate('Hello, world!', 8) должна вернуть 'Hello...'                            |
|                                                                                              |
|**********************************************************************************************/

function translate(str, len) {
    return str.length > len && str.length > 5 ? str.slice(0, len - 3) + '...' : str;
}

// task 05 - tests
console.group('05 Task tests - translate() - перевести()');
console.log(`\t test 1: translate('Hello, world!', 8):  return: ${translate('Hello, world!', 8)}`);
console.log(`\t test 2: translate('Lorem ipsum', 10):   return: ${translate('Lorem ipsum', 10)}`);
console.log(`\t test 3: translate('Hi!'):               return: ${translate('Hi!', 8)}`);
console.groupEnd(); 
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 06 - Написать функцию, которая проверяет, является ли переданная строка палиндромом.    |
|                                                                                              |
|**********************************************************************************************/

function isPalindrome(str){
    str = str.toLowerCase();
    if (!str.length) return false;
    for (let i = 0; i < str.length / 2; i++) if (str[i] !== str[str.length - 1 - i]) return false;
    return true;
}

// task 06 - tests
console.group('06 Task tests - isPalindrome() - проверитьПалиндром()');
console.log(`\t test 1: isPalindrome('QWERewq'):  return: ${isPalindrome('QWERewq')}`);
console.log(`\t test 2: isPalindrome('asdds'):    return: ${isPalindrome('asdds')}`);
console.log(`\t test 3: isPalindrome(''):         return: ${isPalindrome('')}`);
console.groupEnd(); 
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 07 - Написать функцию, которая считает количество слов в предложении                    |
|                                                                                              |
|**********************************************************************************************/

function countWords(str){
    return !str.length ? 0 : str.split(' ').length;
}

// task 07 - tests
console.group('07 Task tests - countWords() - количествоСлов()');
console.log(`\t test 1: countWords('count Words'):  return: ${countWords('count Words')}`);
console.log(`\t test 2: countWords('a s d d s'):    return: ${countWords('a s d d s')}`);
console.log(`\t test 3: countWords(''):             return: ${countWords('')}`);
console.groupEnd(); 
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 08 - Написать функцию, которая возвращает самое длинное слово из предложения.           |
|                                                                                              |
|**********************************************************************************************/

function getLongWord(str){
    let long = '';
    for(let word of str.split(' ')) if (word.length > long.length) long = word;
    return long;
}

// task 08 - tests
console.group('08 Task tests - getLongWord() - получитьДлинноеСлово()');
console.log(`\t test 1: getLongWord('получить длинное слово'):  return: ${getLongWord('получить длинное слово')}`);
console.log(`\t test 2: getLongWord('a bb ccc dddd eeeee'):     return: ${getLongWord('a bb ccc dddd eeeee')}`);
console.log(`\t test 3: getLongWord(''):                        return: ${getLongWord('')}`);
console.groupEnd(); 
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 09 - Написать функцию, которая считает среднюю длину слова в предложении.               |
|                                                                                              |
|**********************************************************************************************/

function calcAvrWords(str){
    let lens = str.split(' ').map(word => word = word.length);
    let sum = lens.reduce((a, b) => a + b);
    return +(sum / lens.length).toFixed(2);
    // фунцию из задачи № 7 не использовал
}

// task 09 - tests
console.group('09 Task tests - calcAvrWords() - посчитатьСреднююДлинуСлов()');
console.log(`\t test 1: calcAvrWords('посчитать среднюю длину слов'):  return: ${calcAvrWords('посчитать среднюю длину слов')}`);
console.log(`\t test 2: calcAvrWords('a bb ccc dddd eeeee'):           return: ${calcAvrWords('a bb ccc dddd eeeee')}`);
console.log(`\t test 3: calcAvrWords(''):                              return: ${calcAvrWords('')}`);
console.groupEnd(); 
console.log('');

/**********************************************************************************************|
|                                                                                              |
| task 10 - Написать функцию, которая принимает строку и символ и выводит индексы,             |
| по которым находится этот символ в строке. Также вывести, сколько всего раз встречается      |
| этот символ в строке.                                                                        |
|                                                                                              |
|**********************************************************************************************/

function getIndexesSymbol(str, symbol){
    return str.split('').map((sub, index) => sub === symbol ? index : false).filter(x => x !== false);
}

function printArray(arr, text = 'Индексы '){
    return text + '[ ' + arr.join(', ') + ' ]';
}

// task 10 - tests
console.group('10 Task tests - getIndexesSymbol() - получитьИндексыСимвола()');

let sym = 'q', txt = 'qweqqweweqwe', arr = getIndexesSymbol(txt, sym);
console.log(`\t test 1: ${printArray(arr)} символа '${sym}' в строке '${txt}'. Всего ${arr.length}.`);

sym = 'e', txt = 'qweqqweweqweeee', arr = getIndexesSymbol(txt, sym);
console.log(`\t test 2: ${printArray(arr)} символа '${sym}' в строке '${txt}'. Всего ${arr.length}.`);

sym = '_', txt = '', arr = getIndexesSymbol(txt, sym);
console.log(`\t test 3: ${printArray(arr)} символа '${sym}' в строке '${txt}'. Всего ${arr.length}.`);

console.groupEnd(); 
console.log('');

console.log('End home work str.methods');