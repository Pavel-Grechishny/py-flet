"use strict";

console.log('Start home work object');
console.log('');

/************************************************************************************************************************|
|                                                                                                                        |
| Создайте функцию-конструктор Car (и при желании класс Car1) создающую объект типа "Автомобиль".                        |
| Конструктору передаются параметры : производитель, модель, год выпуска, средняя скорость.                              |
| Созданные им объекты должны  иметь методы:                                                                             |
| * info() - для вывода подробной информации об автомобиле в виде строки,                                                |
| * travelTime(distance) - для подсчета необходимого времени на преодоление переданного расстояния со средней скоростью. |
| При преобразовании объекта в строку должна получаться строка с краткой информацией об объекте.                         |
|                                                                                                                        |
| Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.                                    |
|                                                                                                                        |
|************************************************************************************************************************/

function Car(brand, model, birth, speed) {
    this.type = 'Автомобиль';
    this.brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
    this.model = model[0].toUpperCase() + model.slice(1).toLowerCase();
    this.birth = +birth;
    this.speed = +speed; 
    this.info = function(){
        return `${this.type} ${this.brand} модель ${this.model}, ${this.birth} г. выпуска. Имеет среднюю скорость ${this.speed} км/ч.`};
    this.travelTime = function(p = 100){
        return `${this.brand} ${this.model} преодолеет ${p} км за ${(p / this.speed + Math.ceil(p / this.speed / 4 - 1)).toFixed(1)} час(ов) (с учетом отдыха водителя 5 ч).`};
    this.toString = function(){return `Car: марка - ${this.brand}, модель - ${this.model}, год - ${this.birth}.`};
}

class Car1{
    type = 'Автомобиль';
    constructor(brand, model, birth, speed){
        this.brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
        this.model = model[0].toUpperCase() + model.slice(1).toLowerCase();
        this.birth = +birth;
        this.speed = +speed; 
    }
    info(){ return `${this.type} ${this.brand} модель ${this.model}, ${this.birth} г. выпуска. Имеет среднюю скорость ${this.speed} км/ч.`};
    travelTime(p = 100){return `${this.brand} ${this.model} преодолеет ${p} км за ${(p / this.speed + Math.ceil(p / this.speed / 4 - 1)).toFixed(1)} час(ов) (с учетом отдыха водителя 5 ч).`};
    toString(){ return `Car: марка - ${this.brand}, модель - ${this.model}, год - ${this.birth}.` };
}

// TESTS

let cars = [
    { brand: 'ford', model: 'mondeo', birth: '2016', speed: '105' },
    { brand: 'toyota', model: 'camry', birth: '2008', speed: '100' },
    { brand: 'kia', model: 'optima', birth: '2020', speed: '110' }
];

console.log('Function constructor - Car - test');
for(let obj of cars){
    let auto = new Car(obj.brand, obj.model, obj.birth, obj.speed);
    console.group(auto.info());
    console.log(auto.travelTime(1200));
    console.log(auto.toString());
    console.groupEnd();
    console.log('');
}

console.log('Class - Car1 - test');
for(let obj of cars){
    let auto = new Car1(obj.brand, obj.model, obj.birth, obj.speed);
    console.group(auto.info());
    console.log(auto.travelTime(500));
    console.log(auto.toString());
    console.groupEnd();
    console.log('');
}

console.log('End home work object');