
$(document).ready(function() {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];

var genre;         
var chosenGenre;     
var getHint ;          
var word ;              
var guess ;             
var guesses = [ ];      
var lives ;            
var counter ;
var space;

// Get elements
var showLives = document.getElementById("mylives");
var showCatagory = document.getElementById("scatagory");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");



// create alphabet ul
var buttons = function () {
myButtons = document.getElementById('buttons');
letters = document.createElement('ul');

for (var i = 0; i < alphabet.length; i++) {
letters.id = 'alphabet';
list = document.createElement('li');
list.id = 'letter';
list.innerHTML = alphabet[i];
check();
myButtons.appendChild(letters);
letters.appendChild(list);
}
}


// Select Catagory
var selectGenre = function () {
if (chosenGenre === genre[0]) {
genreName.innerHTML = "<b>The Chosen Genre Is Animation</b>";
} else if (chosenGenre === genre[1]) {
genreName.innerHTML = "<b>The Chosen Genre Is Horror Movies</b>";
} else if (chosenGenre === genre[2]) {
genreName.innerHTML = "<b>The Chosen Genre Is Action Movies</b>";
}
}

$(".genreName").css("color", "babyblue");

// Create guesses ul
result = function () {
wordHolder = document.getElementById('hold');
correct = document.createElement('ul');

for (var i = 0; i < word.length; i++) {
correct.setAttribute('id', 'my-word');
guess = document.createElement('li');
guess.setAttribute('class', 'guess');
if (word[i] === "-") {
  guess.innerHTML = "-";
  space = 1;
} else {
  guess.innerHTML = "_";
}

guesses.push(guess);
wordHolder.appendChild(correct);
correct.appendChild(guess);
}
}

// Show lives
comments = function () {
showLives.innerHTML = "You have " + lives + " lives";
if (lives < 1) {
showLives.innerHTML = "Game Over";
}
for (var i = 0; i < guesses.length; i++) {
if (counter + space === guesses.length) {
  showLives.innerHTML = "You Win!";
}
}
}



// Animate man
var animate = function () {
var drawMe = lives ;
drawArray[drawMe]();
}


// Hangman
canvas =  function(){

myStickman = document.getElementById("stickman");
context = myStickman.getContext('2d');
context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = 2;
};

head = function(){
myStickman = document.getElementById("stickman");
context = myStickman.getContext('2d');
context.beginPath();
context.arc(60, 25, 10, 0, Math.PI*2, true);
context.stroke();
}

draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

context.moveTo($pathFromx, $pathFromy);
context.lineTo($pathTox, $pathToy);
context.stroke(); 
}

frame1 = function() {
draw (0, 150, 150, 150);
};

frame2 = function() {
draw (10, 0, 10, 600);
};

frame3 = function() {
draw (0, 5, 70, 5);
};

frame4 = function() {
draw (60, 5, 60, 15);
};

torso = function() {
draw (60, 36, 60, 70);
};

rightArm = function() {
draw (60, 46, 100, 50);
};

leftArm = function() {
draw (60, 46, 20, 50);
};

rightLeg = function() {
draw (60, 70, 100, 100);
};

leftLeg = function() {
draw (60, 70, 20, 100);
};

drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


// OnClick Function
check = function () {
list.onclick = function () {
var guess = (this.innerHTML);
this.setAttribute("class", "active");
this.onclick = null;
for (var i = 0; i < word.length; i++) {
  if (word[i] === guess) {
    guesses[i].innerHTML = guess;
    counter += 1;
  } 
}
var j = (word.indexOf(guess));
if (j === -1) {
  lives -= 1;
  comments();
  animate();
} else {
  comments();
}
}
}


// Play
play = function () {
genre = [
  ["toy-story", "spirited-away", "zootopia", "up", "despicable-me", "ratatouille", "how-the-grinch-stole-christmas"],
  ["halloween", "scream", "ring", "saw", "the-shining", "get-out", "the-exorcist"],
  ["mission-impossible", "die-hard", "kill-bill", "the-matrix", "wonder-woman", "skyfall", "enter-the-dragon"]
];

chosenGenre = genre[Math.floor(Math.random() * genre.length)];
word = chosenGenre[Math.floor(Math.random() * chosenGenre.length)];
word = word.replace(/\s/g, "-");
console.log(word);
buttons();

guesses = [ ];
lives = 10;
counter = 0;
space = 0;
result();
comments();
selectGenre();
canvas();
}

play();

// Hint

hint.onclick = function() {

hints = [
  ["First Pixar Movie", "Based in Spa House", "Animal Spciety", "Carl and Ellie", "The World's most super-bad", "Anyone can cook", "Most unfestive christmas movie"],
  ["Science-Fiction horror film", "Mask", "Japanese Classic", "Little doll", "M. Night Shyamalan", "engagement", "paranormal-activities"],
  ["American Television Series", "Bruce Willis", "Tarantino", "After this, there is no turning back", "princess of the Amazons", "Bond", "Martial-arts expert"]
];

var genreIndex = genre.indexOf(chosenGenre);
var hintIndex = chosenGenre.indexOf(word);
showClue.innerHTML = "Clue: - " +  hints [genreIndex][hintIndex];
};

// Reset

document.getElementById('reset').onclick = function() {
correct.parentNode.removeChild(correct);
letters.parentNode.removeChild(letters);
showClue.innerHTML = "";
context.clearRect(0, 0, 400, 400);
play();
}
});