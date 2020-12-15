

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
        
    }
}

function reset(){
    for (var i=1; i<10 ; i++){
        document.getElementById('game-cell'+i).innerHTML = ""; 
    }
    count = 1;
}

