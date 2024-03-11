let words = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];
signs = [];
let letterInput = document.getElementById('writeLetter');
let word = document.getElementById('wordLetters');
let lives = document.getElementById('gameLifes')
let wordDisplay = document.getElementById('wordSigns');
let randomWord;
let livesContor = 7;
let letterContor;
let signsContor;

function chooseRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
    word.innerHTML = 'The word has ' + randomWord.length + ' letters' + '<br>';
    for (let i = 0; i < randomWord.length; i++) {
        signs.push('_');
        wordDisplay.innerHTML += signs[i] + ',';
    }
    wordDisplay.innerHTML += '<br>';
    lives.innerHTML = 'You have 7 lives ' + '<br>';
    signsContor = randomWord.length;
}

function findLetter() {
    letterContor = 0;
    let letterIntroduced = document.getElementById('writeLetter').value;
    letterInput.value = "";
    for (let i = 0; i < randomWord.length; ++i) {
        if (randomWord[i] === letterIntroduced) {
            signs[i] = letterIntroduced;
            --signsContor;
            ++letterContor;
        }
    }
    wordDisplay.innerHTML = signs;
    statusGame();
}

function statusGame() {
    if (signsContor === 0) {
        word.innerHTML = '';
        lives.innerHTML = '';
        wordDisplay.innerHTML = 'You won! Congratulations!!!'
    } else if (letterContor === 0) {
        --livesContor;
        lives.innerHTML = 'You have ' + livesContor + ' more lifes';
    }
    if (livesContor === 0) {
        word.innerHTML = '';
        lives.innerHTML = '';
        wordDisplay.innerHTML = 'You lost! Try again!';
    }
}
