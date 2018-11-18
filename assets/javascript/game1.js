//create an array of Words
 var words = ['Titanic', 'SpiderMan', 'ToyStory', 'Cassablanca','LionKing','Trainspotting']
//choose word randomly
 var randNum = Math.floor(Math.random() * words.length);
 var chosenWord = words[randNum];
 var rightWord = [];
 var wrongWord = [];
 var underScore = [];

// Dom manipulation
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');

// Main
//  -----
console.log(chosenWord);

//craete underscores based on length of word
 var generateUnderscore = () => {
     for(var i = 0; i < chosenWord.length; i++) {
         underScore.push('_');
     }
     return underScore;
 }

 console.log(generateUnderscore());
//get users guess
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keycode);

//if users guessed it right
    if (chosenWord.indexOf(keyword) > -1) {
    // add right words array
    rightWord.push(keyword);
    // replace underscore with right letter
    underscore[chosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join('_');
    docRightGuess[0].innerHTML = rightWord;
    // Checks to see if user word matches guesses
    if(underScore.join('') == chosenWord) {
        alert('You Win');
    }
    
    else
    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;
    console.log(wrongWord);
    }
});
//Check if guess is right
//if right push to right array
//if wrong push to wrong array
