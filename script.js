var seconds=75;

$(".custom-container").hide()

var correctAnswers = {
    first: "alerts",
    second: "curly",
    third: "all",
    fourth: "quotes",
    fifth: "Miami"
}

$("#startButton").click(function (){
    console.log("we got clicked!")
    $('.custom-container').show()

$("#startButton").hide()
    
    var countDown=setInterval(function()
    {                  
        seconds--; 
        $(".showTime").text(seconds)      
        
    },1000);

    setTimeout(function(){
        clearInterval(countDown);
        console.log("It's over!")
    },(parseInt(seconds)+1)*1000);  
    
   })

   $("#submit-quiz").click(function (){
    console.log("clicked", $('input:radio[name=first]:checked').val())
    console.log("clicked", $('input:radio[name=second]:checked').val())
    console.log("clicked", $('input:radio[name=third]:checked').val())
    console.log("clicked", $('input:radio[name=fourth]:checked').val())
    console.log("clicked", $('input:radio[name=fifth]:checked').val())

    $(".custom-container").hide()

    if ( $("input:radio[name=first]:checked").val() === correctAnswers.first ) {
        alert("You got the 1st question right!");  
        } else {
         alert ("You got the 1st question wrong!");
        }  

    if ( $("input:radio[name=second]:checked").val() === correctAnswers.second ) {
        alert("You got the 2nd question right!");  
        } else {
         alert ("You got the 2nd question wrong!");
        };   
    
    if ( $("input:radio[name=third]:checked").val() === correctAnswers.third ) {
        alert("You got the 3rd question right!");  
        } else {
        alert ("You got the 3rd question wrong!");
        };   

    if ( $("input:radio[name=fourth]:checked").val() === correctAnswers.fourth ) {
        alert("You got the 4th question right!");  
        } else {
         alert ("You got the 4th question wrong!");
        };  
        
    if ( $("input:radio[name=fifth]:checked").val() === correctAnswers.fifth ) {
        alert("You got the 5th question right!");  
        } else {
        alert ("You got the 5th question wrong!");
        }; 
   })
        

