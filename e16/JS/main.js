$(document).ready(function(){
    $('#header').click(function(){
        $('#title').toggleClass('white'); 
        $('#header').toggleClass('black');
    });
    
    $('#one').mouseover(function(){
        $('#one').toggleClass('darksalmon');
    });
});