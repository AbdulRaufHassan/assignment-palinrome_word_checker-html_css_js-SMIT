let input = document.getElementById('input');
let answer = document.getElementById('answer');
let butn = document.getElementById('butn');
let validationText = document.getElementById('validationText')
let word;

function butnOpac() {
    word = input.value.replaceAll(' ', '');
    if (/^[a-zA-Z0-9]+$/.test(word)) {
        butn.classList.add('active');
        validationText.classList.remove('invalidChar');
    }
    else if (!/^[a-zA-Z0-9]+$/.test(word) && word.length != 0) {
        validationText.classList.add('invalidChar');
        butn.classList.remove('active');
    }
    else {
        butn.classList.remove('active');
        validationText.classList.remove('invalidChar');
    }
}

function check() {
    if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')) {
        answer.innerHTML = `Yes, <span id="userWord">${input.value.trim()}</span> is a palindrome word!`;
        answer.style.display = 'block';
        input.value = ''
        butn.classList.remove('active');
    } else {
        answer.innerHTML = `No, <span id="userWord">${input.value.trim()}</span> is not a palindrome word!`;
        answer.style.display = 'block';
        input.value = ''
        butn.classList.remove('active');
    }
}