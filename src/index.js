




/*-----------------------------------------------------------------------------------------*/
/*
count =1;
function fill(number){  
           
    let board = document.getElementById('game-cell'+number); 
    console.log (board) ;

    //board.innerHTML = "x";
    if (count <= 9){
        if (count % 2 !=0)  {
           
            board.innerHTML = "×";  
            
        }
        else{
            board.innerHTML = "o"; 
            
        }
        count++;
       
        
    }
    else{
        alert ("Match Draw");
        reset();
        
    }
}

function reset(){
    for (var i=0; i<9 ; i++){
        document.getElementById('game-cell'+i).innerHTML = ""; 
    }
    count = 1;
}

*/

let currentPlayer = 'X';
//let count = 1;
let display = document.getElementById('status2');
function fill(number){         
    let board = document.getElementById('game-cell'+number);
    
    if (board.innerHTML == "") {
        board.innerHTML = currentPlayer;
        checkPlayer();
        
       /* 
        if (winner()){
            //window.alert("Winner is" + currentPlayer);
            display.innerHTML = "Winner is " + currentPlayer; 
            reset();
        }
        else {
            display.innerHTML = "Next turn: Player " + currentPlayer; 
        } */
        //count ++; 
    } 
   
    else{

        if (tie()){
            display.innerHTML = "Tie/Game ended";
            reset();
        }
        //window.alert("Tie-Game ended") 
       
        
    }
    
}

function checkPlayer(){
   
    if (currentPlayer == 'X' ){ 
        
        //currentPlayer = 'O';
        if (winner()){
            //window.alert("Winner is" + currentPlayer);
            
            display.innerHTML = "Winner is " + currentPlayer ; 
            reset();

            
        }

        
        else {
            currentPlayer = 'O';
            
            display.innerHTML = "Next turn: Player " + currentPlayer; 
            
        }
    
       
    }   
    else {
        //currentPlayer = 'X'; 
        
        if (winner()){
            
            //window.alert("Winner is" + currentPlayer);
            display.innerHTML = "Winner is Player " + currentPlayer; 
            reset();
        }

        
        else {
            currentPlayer = 'X';
            
            display.innerHTML = "Next turn: Player " + currentPlayer; 
            
        }
        
    }

       
}

function reset(){
    for (var i=0; i<9 ; i++){
        document.getElementById('game-cell'+i).innerHTML = ""; 
    }
}

function restart(){
    for (var i=0; i<9 ; i++){
        document.getElementById('game-cell'+i).innerHTML = ""; 
    }
    //count = 1;
    currentPlayer = 'X';
    display.innerHTML = "Let's Play";
}

function getDiv(num){
    return document.getElementById('game-cell'+num).innerHTML;
}

function checkDivs(a,b,c,m){
    if (getDiv(a)==m && getDiv(b)==m && getDiv(c)==m){
        return true;
    }
    else{
        return false;
    }
}
function winner (){
    
    if (checkDivs(0,1,2,currentPlayer)|| checkDivs(3,4,5,currentPlayer) 
    || checkDivs(6,7,8,currentPlayer) || checkDivs(0,3,6,currentPlayer) 
    || checkDivs(1,4,7,currentPlayer) || checkDivs(2,5,8,currentPlayer)
    || checkDivs(0,4,8,currentPlayer) || checkDivs(2,4,6,currentPlayer)){
        //window.alert ("Winner is" + currentPlayer);
      return true;
        //reset();
    }
 
    else{
        return false;
        
    }

   
}

function tie(){
    for (var i=0; i<9 ; i++){
        if (getDiv(i) != ""){
            return true;
        }; 
    }
}

    





           
 
    



  


