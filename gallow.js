let words = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];
let signs = [];
let letterInput = document.getElementById('writeLetter');
let word = document.getElementById('wordLetters');
let lives = document.getElementById('gameLives');
let wordDisplay = document.getElementById('wordSigns');
let randomWord;
let livesContor = 7;
let letterContor;
let signsContor;

function chooseRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
    word.innerHTML = 'The word has ' + randomWord.length + ' letters';
    for (let i = 0; i < randomWord.length; i++) {
        signs.push('_');
        wordDisplay.innerHTML += signs[i] + ',';
    }
    lives.innerHTML = 'You have 7 lives ';
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
        lives.innerHTML = 'You have ' + livesContor + ' more lives';
    }
    if (livesContor === 0) {
        word.innerHTML = '';
        lives.innerHTML = '';
        wordDisplay.innerHTML = 'You lost! Try again!';
    }
}
