"use strict";

// task 01
let userName = prompt('Введите Ваше имя', 'User');
alert(`Привет, ${userName}!`);

// task 02
const nowYear = new Date();
let userYearBirth = +prompt(`${userName}, введите год Вашего рождения`, 1986);
let userAge = nowYear.getFullYear() - userYearBirth;
alert(`${userName}, Вам ${userAge} лет.`);

// task 03
let sideBox = +prompt(`${userName}, введите длину сторны квадрата`, 5);
let perimeterBox = sideBox * 4;
alert(`Периметр квадрата = ${perimeterBox}`);

// task 04
let circleRadius = +prompt(`${userName}, введите радиус окружности`, 5);
let circleArea = Math.PI * circleRadius ** 2;
circleArea = +circleArea.toFixed(1);
alert(`Площадь круга = ${circleArea}`);

// task 05
let distanceBetweenCities = +prompt(`${userName}, введите расстояние между городами (км)`, 100);
let expectedTime = +prompt(`${userName}, за сколько часов планируете добраться?`, 1);
let movementSpeed = +(distanceBetweenCities / expectedTime).toFixed(1);
alert(`Средняя скрость движения должна составлять ${movementSpeed} км/ч`);

// task 06
const euroRate = 0.90449;
let dollarsAmount = +prompt(`${userName}, введите сумму в долларах США`, 100);
let euroAmount = (dollarsAmount * euroRate).toFixed(2);
alert(`${dollarsAmount} долларов =  ${euroAmount} евро`);

// task 07
let memoryFlashDrive = +prompt(`${userName}, введите объём памяти флеш накопителя (Гб)`, 16);
let sizeFile = 820;
let countFiles = Math.trunc(memoryFlashDrive * 1000 / sizeFile);
alert(`На Вашу флешку можно записать ${countFiles} файл(ов)`);

// task 08
let sumMoney = +prompt(`${userName}, введите сумму денег в Вашем кошельке (рублей)`, 1000000);
let priceOneChocolate = +prompt(`${userName}, введите стоимость одной шоколадки (рублей)`, 100);
let countChocolate = Math.trunc(sumMoney / priceOneChocolate);
let remainingMoney = sumMoney % priceOneChocolate;
alert(`Вы сможете купить ${countChocolate} шоколадок\nУ Вас останется ${remainingMoney} рублей`);

// task 09
let userNumber = +prompt(`${userName}, введите трехзначное число`, 123);
let reversNumber = String(Math.trunc(userNumber%10)) + String(Math.trunc(userNumber%100/10)) + String(Math.trunc(userNumber/100));
alert(`Мы перевернули Ваше число.\nПолучилось: ${reversNumber}`);

// // task 10 - не обязательно
// // v-1
// let num1 = +prompt('Введите число', 0);
// alert((Math.abs(num1 % 2 == 0)) ? `Число ${num1} - чётное` : `Число ${num1} - нечётное`);

// // v-2
// let num2 = +prompt('Введите число');
// let arr = ['чётное', 'нечётное'];
// alert(`Число ${num2} - ${arr[Math.abs(num2)%2]}`);

