let words = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];
let randomWord;
let letterInput = document.getElementById('writeLetter');
let word = document.getElementById('wordLetters');
let lifes = document.getElementById('gameLifes')
let wordDisplay = document.getElementById('wordSigns');
let lifesContor = 7;
let letterContor;
let signsContor;
signs = [];

function chooseRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
    console.log(randomWord);
    word.innerHTML = 'The word has ' + randomWord.length + ' letters' + '<br>';
    for (let i = 0; i < randomWord.length; i++) {
        signs.push('_');
        wordDisplay.innerHTML += signs[i] + ' ';
    }
    wordDisplay.innerHTML += '<br>';
    lifes.innerHTML = 'You have 7 lifes ' + '<br>';
    signsContor = randomWord.length;
}

function findLetter() {
    letterInput.value = "";
    letterContor = 0;
    let letterIntroduced = document.getElementById('writeLetter').value;
    for (let i = 0; i < randomWord.length; ++i) {
        if (randomWord[i] === letterIntroduced) {
            wordDisplay.innerHTML = wordDisplay.innerHTML.replace(signs[i], letterIntroduced);
            --signsContor;
            ++letterContor;
        }
    }
    statusGame();
}

function statusGame() {
    if (signsContor === 0) {
        alert('You won!')
    } else if (letterContor === 0) {
        --lifesContor;
        lifes.innerHTML = 'You have ' + lifesContor + ' more lifes';
    }
    if (lifesContor === 0) {
        alert('You lost!');
    }
}
