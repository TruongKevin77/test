$(document).ready(function(){
    var player = true;
    var oxOne = 0;
    var oxTwo = 0;
    var oxThree = 0;
    var oxFour = 0;
    var oxFive = 0;
    var oxSix = 0;
    var oxSeven = 0;
    var oxEight = 0;
    var oxNine = 0;
    var counter = 0;
    var winner = false;
    
    //reset button
    $('#reset').click(function(){
        oxOne = 0;
        oxTwo = 0;
        oxThree = 0;
        oxFour = 0;
        oxFive = 0;
        oxSix = 0;
        oxSeven = 0;
        oxEight = 0;
        oxNine = 0;
        player = true;
        counter = 0;
        winner = false;
        $('#playerTurn').text("Player 1's turn");
        $('#1').text('');
        $('#2').text('');
        $('#3').text('');
        $('#4').text('');
        $('#5').text('');
        $('#6').text('');
        $('#7').text('');
        $('#8').text('');
        $('#9').text('');
        $('#1').css('background-color','azure')
        $('#2').css('background-color','azure')
        $('#3').css('background-color','azure')
        $('#4').css('background-color','azure')
        $('#5').css('background-color','azure')
        $('#6').css('background-color','azure')
        $('#7').css('background-color','azure')
        $('#8').css('background-color','azure')
        $('#9').css('background-color','azure')
    });
    
    //one
    $('#1').click(function(){
        if(oxOne == 0 && winner == false){
            if(player == true){
                $('#1').css('background-color','aquamarine')
                $('#1').text('O');
                oxOne = 1;
                $('#playerTurn').text("Player 2's turn");
                compare();
                player = false;
            }
            else if(player == false){
                $('#1').css('background-color','aqua')
                $('#1').text('X');
                oxOne = 2;
                $('#playerTurn').text("Player 1's turn");
                compare();
                player = true;
            }
            //Exception
            counter += 1;
            if(counter == 9 && winner == false){
                $('#playerTurn').text("Draw");
            }
        }
    });
    
    //two
    $('#2').click(function(){
        if(oxTwo == 0 && winner == false){
            if(player == true){
                $('#2').css('background-color','aquamarine')
                $('#2').text('O');
                oxTwo = 1;
                $('#playerTurn').text("Player 2's turn");
                compare();
                player = false;
            }
            else if(player == false){
                $('#2').css('background-color','aqua')
                $('#2').text('X');
                oxTwo = 2;
                $('#playerTurn').text("Player 1's turn");
                compare();
                player = true;
            }
            //Exception
            counter += 1;
            if(counter == 9 && winner == false){
                $('#playerTurn').text("Draw");
            }
        }
    });
    
    //three
    $('#3').click(function(){
        if(oxThree == 0 && winner == false){
            if(player == true){
                $('#3').css('background-color','aquamarine')
                $('#3').text('O');
                oxThree = 1;
                $('#playerTurn').text("Player 2's turn");
                compare();
                player = false;
            }
            else if(player == false){
                $('#3').css('background-color','aqua')
                $('#3').text('X');
                oxThree = 2;
                $('#playerTurn').text("Player 1's turn");
                compare();
                player = true;
            }
            //Exception
            counter += 1;
            if(counter == 9 && winner == false){
                $('#playerTurn').text("Draw");
            }
        }
    });
    
    //four
    $('#4').click(function(){
        if(oxFour == 0 && winner == false){
            if(player == true){
                $('#4').css('background-color','aquamarine')
                $('#4').text('O');
                oxFour = 1;
                $('#playerTurn').text("Player 2's turn");
                compare();
                player = false;
            }
            else if(player == false){
                $('#4').css('background-color','aqua')
                $('#4').text('X');
                oxFour = 2;
                $('#playerTurn').text("Player 1's turn");
                compare();
                player = true;
            }
            //Exception
            counter += 1;
            if(counter == 9 && winner == false){
                $('#playerTurn').text("Draw");
            }
        }
    });
    
    //five
    $('#5').click(function(){
        if(oxFive == 0 && winner == false){
            if(player == true){
                $('#5').css('background-color','aquamarine')
                $('#5').text('O');
                oxFive = 1;
                $('#playerTurn').text("Player 2's turn");
                compare();
                player = false;
            }
            else if(player == false){
                $('#5').css('background-color','aqua')
                $('#5').text('X');
                oxFive = 2;
                $('#playerTurn').text("Player 1's turn");
                compare();
                player = true;
            }
            //Exception
            counter += 1;
            if(counter == 9 && winner == false){
                $('#playerTurn').text("Draw");
            }
        }
    });
    
    //six
    $('#6').click(function(){
        if(oxSix == 0 && winner == false){
            if(player == true){
                $('#6').css('background-color','aquamarine')
                $('#6').text('O');
                oxSix = 1;
                $('#playerTurn').text("Player 2's turn");
                compare();
                player = false;
            }
            else if(player == false){
                $('#6').css('background-color','aqua')
                $('#6').text('X');
                oxSix = 2;
                $('#playerTurn').text("Player 1's turn");
                compare();
                player = true;
            }
            //Exception
            counter += 1;
            if(counter == 9 && winner == false){
                $('#playerTurn').text("Draw");
            }
        }
    });
    
    //seven
    $('#7').click(function(){
        if(oxSeven == 0 && winner == false){
            if(player == true){
                $('#7').css('background-color','aquamarine')
                $('#7').text('O');
                oxSeven = 1;
                $('#playerTurn').text("Player 2's turn");
                compare();
                player = false;
            }
            else if(player == false){
                $('#7').css('background-color','aqua')
                $('#7').text('X');
                oxSeven = 2;
                $('#playerTurn').text("Player 1's turn");
                compare();
                player = true;
            }
            //Exception
            counter += 1;
            if(counter == 9 && winner == false){
                $('#playerTurn').text("Draw");
            }
        }
    });
    
    //eight
    $('#8').click(function(){
        if(oxEight == 0 && winner == false){
            if(player == true){
                $('#8').css('background-color','aquamarine')
                $('#8').text('O');
                oxEight = 1;
                $('#playerTurn').text("Player 2's turn");
                compare();
                player = false;
            }
            else if(player == false){
                $('#8').css('background-color','aqua')
                $('#8').text('X');
                oxEight = 2;
                $('#playerTurn').text("Player 1's turn");
                compare();
                player = true;
            }
            //Exception
            counter += 1;
            if(counter == 9 && winner == false){
                $('#playerTurn').text("Draw");
            }
        }
    });
    
    //nine
    $('#9').click(function(){
        if(oxNine == 0 && winner == false){
            if(player == true){
                $('#9').css('background-color','aquamarine')
                $('#9').text('O');
                oxNine = 1;
                $('#playerTurn').text("Player 2's turn");
                compare();
                player = false;
            }
            else if(player == false){
                $('#9').css('background-color','aqua')
                $('#9').text('X');
                oxNine = 2;
                $('#playerTurn').text("Player 1's turn");
                compare();
                player = true;
            }
            //Exception
            counter += 1;
            if(counter == 9 && winner == false){
                $('#playerTurn').text("Draw");
            }
        }
    });
    
    //determining winner
    function compare(){
        //Player 1 win conditions
        if(oxOne == 1 && oxTwo == 1 && oxThree == 1){
            $('#playerTurn').text("Player 1 Wins");
            winner = true;
        }
        else if(oxFour == 1 && oxFive == 1 && oxSix == 1){
            $('#playerTurn').text("Player 1 Wins");
            winner = true;
        }
        else if(oxSeven == 1 && oxEight == 1 && oxNine == 1){
            $('#playerTurn').text("Player 1 Wins");
            winner = true;
        }
        else if(oxOne == 1 && oxFour == 1 && oxSeven == 1){
            $('#playerTurn').text("Player 1 Wins");
            winner = true;
        }
        else if(oxTwo == 1 && oxFive == 1 && oxEight == 1){
            $('#playerTurn').text("Player 1 Wins");
            winner = true;
        }
        else if(oxThree == 1 && oxSix == 1 && oxNine == 1){
            $('#playerTurn').text("Player 1 Wins");
            winner = true;
        }
        else if(oxOne == 1 && oxFive == 1 && oxNine == 1){
            $('#playerTurn').text("Player 1 Wins");
            winner = true;
        }
        else if(oxThree == 1 && oxFive == 1 && oxSeven == 1){
            $('#playerTurn').text("Player 1 Wins");
            winner = true;
        }
        
        
        //player 2 win conditions
        if(oxOne == 2 && oxTwo == 2 && oxThree == 2){
            $('#playerTurn').text("Player 2 Wins");
            winner = true;
        }
        else if(oxFour == 2 && oxFive == 2 && oxSix == 2){
            $('#playerTurn').text("Player 2 Wins");
            winner = true;
        }
        else if(oxSeven == 2 && oxEight == 2 && oxNine == 2){
            $('#playerTurn').text("Player 2 Wins");
            winner = true;
        }
        else if(oxOne == 2 && oxFour == 2 && oxSeven == 2){
            $('#playerTurn').text("Player 2 Wins");
            winner = true;
        }
        else if(oxTwo == 2 && oxFive == 2 && oxEight == 2){
            $('#playerTurn').text("Player 2 Wins");
            winner = true;
        }
        else if(oxThree == 2 && oxSix == 2 && oxNine == 2){
            $('#playerTurn').text("Player 2 Wins");
            winner = true;
        }
        else if(oxOne == 2 && oxFive == 2 && oxNine == 2){
            $('#playerTurn').text("Player 2 Wins");
            winner = true;
        }
        else if(oxThree == 2 && oxFive == 2 && oxSeven == 2){
            $('#playerTurn').text("Player 2 Wins");
            winner = true;
        }
    }
    
    
    
});