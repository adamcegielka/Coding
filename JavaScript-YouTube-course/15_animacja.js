// Animacja z JavaScript i CSS

let item1 = document.querySelector('#item1');
let item2 = document.querySelector('#item2');

// setInterval(function() {console.log(item1.getBoundingClientRect().top)},1000);

item1.firstElementChild.classList.remove('inside');
item1.firstElementChild.classList.add('inside2');
item2.firstElementChild.classList.remove('inside');
item2.firstElementChild.classList.add('inside2');

let interval = setInterval(function() { item1.getBoundingClientRect().top <= 0 ? changeClass() : null}, 1000/60);

function changeClass() {
    item1.firstElementChild.classList.remove('inside2');
    item1.firstElementChild.classList.add('inside');
    clearInterval(interval);
}

// drugi sposób:

let interval2 = setInterval(function() { item2.getBoundingClientRect().top <= 0 ? startAnimation() : null}, 1000/(60 * 2));

let interval3;

function startAnimation() {
    interval3 = setInterval(animation, 1000/60);
    clearInterval(interval2);
}

let pos = -50;

function animation() {
    pos += 1;
    item2.firstElementChild.style.left = pos + '%';
    if (pos >= 50) {
        clearInterval(interval3);
    }
}