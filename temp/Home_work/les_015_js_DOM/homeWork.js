"use strict";

let titleSite = document.querySelector('title');
let headerPage = document.createElement('h1');

titleSite.textContent = 'JS 15 HW DOM';
headerPage.textContent = 'Document Object Model';
document.body.prepend(headerPage);

/********************************************************************************************|
| По заданию                                                                                 |
|********************************************************************************************/

// 1 часть

function createDiv(id = '', text = ''){
    let item = document.createElement('div');
    item.id = id;
    item.textContent = text;
    return item
} 

let div = createDiv('1');
headerPage.after(div);

for (let i = 1; i <= 3; i++){
    div.append(createDiv(div.id + i));
    for(let j = 1; j <= i; j++){
        let item = createDiv(div.id + i + j, div.id + i + j);
        // if (item.id == '132') {item.style.borderColor = 'red'};
        div.lastChild.append(item);
    }
}

// 2 часть

let veryBadStyle = document.getElementById('132');
veryBadStyle.style.borderColor = 'red';
veryBadStyle.style.color = 'red';
veryBadStyle.style.background = 'yellow';