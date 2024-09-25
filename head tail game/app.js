var player1 = prompt('enter head name')
var player2 = prompt('enter tail name')

var toss = Math.random() * 2
var change = Math.floor(toss)

if(change == 0){
    document.write(player1 + "head wins")
}
else{
    document.write(player2 + "tail wins")
}