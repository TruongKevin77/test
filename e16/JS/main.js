$(document).ready(function(){
    $('#header').click(function(){
        $('#title').toggleClass('white'); 
        $('#header').toggleClass('black');
    });
    
    $('#one').mouseover(function(){
        $('#one').toggleClass('darksalmon');
    });
    
    $('#two').mouseleave(function(){
        $('#two').toggleClass('chartreuse');
    });
    
    $('#second').mouseenter(function(){
        $('#second').toggleClass('darkviolet');
    });
    
    $('#three').mouseover(function(){
        $('#three').css('background-color','gray');
    });
    
    $('#three').mouseleave(function(){
        $('#three').css('background-color','darkcyan');
    });
    
    $('#three').click(function(){
        $('#third').toggleClass('crimson2'); 
        $('#three').toggleClass('aquamarine');
    });
    
    $('#fourth').click(function(){
        $('#fourth').toggleClass('aqua2');  
    });
    
    $('#fifth').mouseenter(function(){
        $('#fifth').toggleClass('fuchsia');  
        $('#five').toggleClass('darkolivegreen2');
    });
    
    $('#five').click(function(){
        $('#fifth').toggleClass('shrink');  
        $('#five').toggleClass('darksalmon');  
    });
});







