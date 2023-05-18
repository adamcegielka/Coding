// Modyfikacja drzewa - gra - DOM

let input = document.getElementById('input');
let button = document.getElementById('button');
let answer = document.getElementById('answer');
let lista = document.getElementById('lista')
let i = 0;

let losowanie = Math.floor(Math.random() * 10) + 1;
// alert(losowanie);

button.addEventListener('click', sprawdz);

function sprawdz() {
    let value = Number(input.value);
    if (Number.isInteger(value) && value >= 1 && value <= 10) {
        i++
        if (losowanie > value) {
            answer.innerHTML = 'Twojej liczba jest za mała!!';
            answer.classList.add('bad');
        } else if (losowanie < value) {
            answer.innerHTML = 'Twojej liczba jest za duża!';
            answer.classList.add('bad');
        } else {
            answer.innerHTML = 'BRAWO! ZGADŁEŚ ZA ' + i + ' RAZEM';
            answer.classList.remove('bad');
            answer.classList.add('good');
            button.innerHTML = 'Zagraj ponownie';
            button.removeEventListener('click', sprawdz);
            button.addEventListener('click', zagraj);
        }
        let li = document.createElement('li');
        lista.appendChild(li);
        lista.lastChild.innerHTML = i.toString() + ' to: ' + value;
        } else {
            alert('Błędna liczba!');
        }
}

function zagraj() {
    location.reload();
}