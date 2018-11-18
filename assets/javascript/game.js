

$(document).ready(function() {

    // Here we are provided an initial array of letters.
    // Use this array to dynamically create buttons on the screen.
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    var word ;              // Selected word
    var guess ;             // Guess
    var guesses = [ ];      // Stored guesses
    var lives ;             // Lives
    var counter ;           // Count correct geusses
    var space;              // Number of spaces in word '-'


    // Get elements
    var showLives = document.getElementById("mylives");

    
    // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
    // =================================================================================
    

    // 1. Create a for-loop to iterate through the letters array.

    for (var i=0; i<letters.length; i++) {
      
      var letterBtn = $("<button>");
      
      letterBtn.addClass("letter-button", "letter", "letter-button-color");

      letterBtn.attr("data-letter", letters[i]);

      letterBtn.text(letters[i]);

      //$(selector).append(content,function(index,html))
      
      $("#buttons").append(letterBtn);
      
    };

      $(".letter-button").click(function(){

        var fridgeMagnet = $("<div>");

        fridgeMagnet.addClass("letter fridge-color");

        fridgeMagnet.text($(this).attr("data-letter"));

        $("#display").append(fridgeMagnet);

      });

      $("#clear").click(function(){

        $("#display").empty();

      });
    });

