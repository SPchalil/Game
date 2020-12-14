

var count = 1;
function fill(cell){
    if (count <= 9){
        if (count % 2 !=0){
            document.getElementById(cell.id).innerHTML = "×";
           
        }
        else{
            document.getElementById(cell.id).innerHTML = "o"; 
        }
        count++;
        
    }
    else{
        alert ("Match Draw");
        reset();
        count = 1;
    }
}

function reset(){
    for (var i=1; i<10 ; i++){
        document.getElementById('game-cell'+i).innerHTML = ""; 
    }
    
}
/*--
function checkWin()
{
    if (document.getElementById('game-cell1').innerHTML!= "" && document.getElementById('game-cell2').innerHTML!= "" && document.getElementById('game-cell3').innerHTML!= "" && document.getElementById('game-cell1').innerHTML==document.getElementById('game-cell2').innerHTML && document.getElementById('game-cell2').innerHTML==document.getElementById('game-cell3').innerHTML) ||  
        document.getElementById('game-cell4').innerHTML!= "" && document.getElementById('game-cell5').innerHTML!= "" && document.getElementById('game-cell6').innerHTML!= "" && document.getElementById('game-cell4').innerHTML==document.getElementById('game-cell5').innerHTML && document.getElementById('game-cell5').innerHTML==document.getElementById('game-cell6').innerHTML) ||
        document.getElementById('game-cell7').innerHTML!= "" && document.getElementById('game-cell8').innerHTML!= "" && document.getElementById('game-cell9').innerHTML!= "" && document.getElementById('game-cell7').innerHTML==document.getElementById('game-cell8').innerHTML && document.getElementById('game-cell8').innerHTML==document.getElementById('game-cell8').innerHTML) ||
        document.getElementById('game-cell1').innerHTML!= "" && document.getElementById('game-cell4').innerHTML!= "" && document.getElementById('game-cell7').innerHTML!= "" && document.getElementById('game-cell1').innerHTML==document.getElementById('game-cell4').innerHTML && document.getElementById('game-cell4').innerHTML==document.getElementById('game-cell7').innerHTML) ||
        document.getElementById('game-cell2').innerHTML!= "" && document.getElementById('game-cell5').innerHTML!= "" && document.getElementById('game-cell8').innerHTML!= "" && document.getElementById('game-cell2').innerHTML==document.getElementById('game-cell5').innerHTML && document.getElementById('game-cell5').innerHTML==document.getElementById('game-cell8').innerHTML) ||
        document.getElementById('game-cell3').innerHTML!= "" && document.getElementById('game-cell6').innerHTML!= "" && document.getElementById('game-cell9').innerHTML!= "" && document.getElementById('game-cell3').innerHTML==document.getElementById('game-cell6').innerHTML && document.getElementById('game-cell6').innerHTML==document.getElementById('game-cell9').innerHTML) ||
        document.getElementById('game-cell1').innerHTML!= "" && document.getElementById('game-cell5').innerHTML!= "" && document.getElementById('game-cell9').innerHTML!= "" && document.getElementById('game-cell1').innerHTML==document.getElementById('game-cell5').innerHTML && document.getElementById('game-cell5').innerHTML==document.getElementById('game-cell9').innerHTML) ||
        document.getElementById('game-cell3').innerHTML!= "" && document.getElementById('game-cell5').innerHTML!= "" && document.getElementById('game-cell7').innerHTML!= "" && document.getElementById('game-cell3').innerHTML==document.getElementById('game-cell5').innerHTML && document.getElementById('game-cell5').innerHTML==document.getElementById('game-cell7').innerHTML) 
        {
            return true;
        
        }
    
}   
*/

/*
if (checkWin()){
    alert ("Winner");
    reset(); 
    count = 1;
}   
function checkWin()
    {
        if (checkCondition('game-cell1','game-cell2','game-cell3')|| checkCondition('game-cell4','game-cell5','game-cell6')||checkCondition('game-cell7','game-cell8','game-cell9')||checkCondition('game-cell1','game-cell4','game-cell7') || checkCondition('game-cell2','game-cell5','game-cell8') || checkCondition('game-cell3','game-cell6','game-cell9') || checkCondition('game-cell1','game-cell5','game-cell9') || checkCondition('game-cell3','game-cell5','game-cell7'))
        {
            return true;
        
        }
    
    } 
    
/*
function checkCondition(x1,x2,x3)
    {
        if (document.getElementById(x1).innerHTML!= "" && document.getElementById(x2).innerHTML!= "" && document.getElementById('x3').innerHTML!= "" && document.getElementById(x1).innerHTML==document.getElementById(x2).innerHTML && document.getElementById(x2).innerHTML==document.getElementById(x3).innerHTML) 
        {
            return true;
        
        }
    
    }   

    */