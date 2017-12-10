




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

  // Each time the user clicks the crystal the counter goes up by 1.
  counter += 1;

  // I then console.log the number of times the crystal is clicked.
  console.log("Your new score is: " + counter);

  });

   // Here I establish the "targetNumber" (set to 10 in this example).
   var targetNumber = 10;
   
     // Here I set the "number-to-guess" header to match the "targetNumber".
     // Eventually this will allow me to change the HTML to match the value in the JavaScript.
     $("#number-to-guess").text(targetNumber);
   
     
     
   
    


       // Here we created some logic to "check" if the click counter matches the targetNumber.
    // Remember, this click event will be triggered with each click.
    // With each click the counter will increase by 10 and be re-evaluated against target.
    if (counter === targetNumber) {
      
            // If the numbers match we'll celebrate the user's win.
            alert("You win!");
          }
      
      
      