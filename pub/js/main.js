$(document).ready(function(){
    
$('button').click(function makewords(){
   
$.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/254/comments"?access_key=8299cf4d40242d94cd36eee9a54558bb15d1220e", JSON.stringify ({"body": $("textbox").val()}, $("textbox").val(""));    
})    
});
