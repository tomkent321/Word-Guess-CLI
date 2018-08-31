var Word = require("./word.js");

var arrWords = [
    "rhinoceros",
    "elephant",
    "imagine",
    "astronomy",
    "elegant",
    "colorful",
    "xylophone",
    "generosity",
    "challenging"
];

var randomWord = arrWords[Math.floor(Math.random() * arrWords.length)];

console.log("random word: " + randomWord);

var showNewWord = new Word(randomWord);
console.log(Word);


// The completed game should meet the following criteria:

// 1. The completed game should be able to receive user input using the `inquirer` or `prompt` npm packages.


// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

