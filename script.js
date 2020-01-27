// event listener for onclick of button= startButton

var second=75;

var startButton=document.getElementById("startButton")

var interval=setInterval(function(){
        console.log(second);
        second--;
    },1000);
    
    setTimeout(function(){
       clearInterval(interval);
       console.log("Time is up!");
    },75000);           


/*
questions to be displayed:
Commonly used data types DO NOT include:
1. strings
2. booleans
3. alerts
4. numbers
correct: 3- alerts

The condition in an if/else statement is enclosed within:
1. quotes
2. curly brackets
3. parenthesis
4. square brackets
correct: 3 - parenthesis

Arrays in JavaScript can be used to store
1. numbers and strings
2. other arrays     
3. booleans
4. all of the above
correct: 4 - all of the above

String values must be enclosed within ___________ when being assigned to variables.
1. commas
2. curly brackets
3. quotes
4. parenthesis
correct: 3 - quotes
*/




