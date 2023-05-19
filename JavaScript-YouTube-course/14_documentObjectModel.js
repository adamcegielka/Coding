// Document Object Model - DOM

console.log(document);

let placeholder = document.getElementById('placeholder');
// placeholder.innerText = '<b>JavaScript</b>';
placeholder.innerHTML = '<b>JavaScript</b>';

// class
let goods = document.getElementsByClassName('good');
console.log(goods);

for (let i = 0; i < goods.length; i++) {
    goods[i].innerText += ' - Color';
}

// tag name
let li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < li.length; i++) {
    li[i].innerText += ' - *';
}

// class
let valids = document.getElementsByClassName('valid');

for (let i = 0; i < valids.length; i++) {
    valids[i].innerText += ' - Valid';
}


// dodanie na koniec
let newLi = document.createElement('li');
let newText = document.createTextNode('Text Sixth added');
newLi.appendChild(newText);

let list = document.getElementById('list');
list.appendChild(newLi);

// dodanie jako trzeci
let newLi3 = document.createElement('li');
let newText3 = document.createTextNode('Text Inserted');
newLi3.appendChild(newText3);

list.insertBefore(newLi3, document.getElementById('li3'));


// modyfikacja
let firstLi = list.firstElementChild;
let newLi1 = document.createElement('li');
let newText1 = document.createTextNode('Text One Change');
newLi1.appendChild(newText1);
newLi1.classList.add('bad');       // dodanie koloru

list.replaceChild(newLi1, firstLi);


// klonowanie i usunięcie
list.appendChild(list.lastElementChild.cloneNode(true));

list.removeChild(list.lastElementChild);
