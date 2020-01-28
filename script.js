
var seconds=75;

var countDown=setInterval (function()
{
    console.log(seconds);
    seconds--;
},1000);
setTimeout(function(){
    clearInterval(countDown);
    console.log("It's over!")
},(parseInt(seconds)+1)*1000);  
 
