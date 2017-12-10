




 // Here we created an on-click event that responds to button clicks of the left button.
 $("#btnLeft").on("click", function() {
    
        // Clicking the button triggers an console.log message.
        
        console.log("left button clicked");
      });

      // Here we created an on-click event that responds to button clicks of the middle button.
 $("#btnMid").on("click", function() {
    
        // Clicking the button triggers an onsole.log message.
        
        console.log("middle button clicked");
      });


          // Here we created an on-click event that responds to button clicks of the Right button.
 $("#btnRight").on("click", function() {
  
      // Clicking the button triggers an onsole.log message.
      
      console.log("right   button clicked");
    });


 


  // Here I created a counter, I'll be using this to track the user's total.
  var counter = 0;
  $(".btn-group").on("click", function() {

  // Each time the user clicks a button the counter goes up by 1.
  counter += 1;

      // Here I copied some logic to "check" if the click counter matches the targetNumber.
    // Remember, this click event will be triggered with each click.
    // With each click the counter will increase by 1 and be re-evaluated against target.
    if (counter === targetNumber) {
      
            // If the numbers match I'll celebrate the user's win.
            alert("You win!");
          }

          // Here I copied an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (counter >= targetNumber) {
      
            // Then they are alerted with a loss.
            alert("You lose!!");
          }
      
      

  // I then console.log the number of times the crystal is clicked.
  console.log("Your new score is: " + counter);

  });

   // Here I establish the "targetNumber" (set to 10 in this example).
   var targetNumber = 10;
   
     // Here I set the "number-to-guess" header to match the "targetNumber".
     // Eventually this will allow me to change the HTML to match the value in the JavaScript.
     $("#number-to-guess").text(targetNumber);
   
     
     
   
    

//  Pseodo Code .........  I will next need to assign a random number from an array between 
//  19 and 120 to my targetNumber variable.  I will then need to assign a random number between 
// 1 and 12 to to my buttons.  Next, I will need to add that number to the total Score upon a click. 
// Next I will need to use logic to add a win to the wins or a loss to the losses depending on whether 
// or not the user matched the targetNumber or hasn't reached it yet or has gone over it.  Next,
// I will need to reset the game with a new targetNumber and reassign new values to my button variables.
 
      
      
      