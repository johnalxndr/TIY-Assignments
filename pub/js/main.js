var board = [
['R','N','B','Q','K','B','N','R'],
['P','P','P','P','P','P','P','P'],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' ',' '],
['p','p','p','p','p','p','p','p'],
['r','n','b','q','k','b','n','r'],];




//move kings pawn forward

var printBoard=function(){
    console.log(board.join('\n')+ '\n\n');};

function move(toY, toX, fromY,fromX){
    toX=toX -1;
    toY=toY -1;
    fromX=fromX -1;
    fromY=fromY -1;
    board[toY][toX]=board[fromY][fromX];
    board[fromY][fromX] = ' ';

printBoard();
}

move(5,5,7,5)
