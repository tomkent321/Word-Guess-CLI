
// 5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

// 6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)



var Letter = function(correctLetter,guessedLetter) {
    // this.cast will hold all of our CastMember objects
    this.correctLetter = correctLetter;
    this.guessed = false;
    this.placeHolder = "_";

    this.checkGuess = function(guessedLetter) {
        if(guessedLetter == correctLetter){
            this.guessed = true;
        }
        this.toString();
    };

    this.toString = function(guess) {
        if(guessed){
            return this.correctLetter;
        } else {
            return this.placeholder;
        }
    };
    

  };
  
  
  module.exports = Letter;








// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly