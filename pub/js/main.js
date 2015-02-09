$(document).ready(function(){
    
    $.getJSON('johnalxndr.json', function(json){
        console.log(json.login);
});


    
$('button').click(function makewords(){
   
$.post("https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/issues/254/comments?access_token=8299cf4d40242d94cd36eee9a54558bb15d1220e", JSON.stringify ({"body": $("#textbox").val()}), $("#textbox").val(""));    
});
    
$.get("johnalxndr.json", function(user){
    $('.contact').find('strong').append(user.name);}, "json"); 
    
$.get("johnalxndr.json", function(user){
    $('.contact').find('.username').append(user.login);}, "json");

$.get("johnalxndr.json", function(user){
    $('.contact').find('.location').append(user.location);}, "json");    
    
$.get("johnalxndr.json", function(user){
    $('.contact').find('.email').append(user.email);}, "json");
    
$.get("johnalxndr.json", function(user){
    $('.list-inline').find('.followers').append(user.followers);}, "json");

$.get("johnalxndr.json", function(user){
    $('.list-inline').find('.following').append(user.following);}, "json");    
});