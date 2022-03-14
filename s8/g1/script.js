var giocatore1 = Math.floor((Math.random() * (100 - 1) + 1));
var giocatore2 = Math.floor((Math.random() * (100 - 1) + 1));
console.log(giocatore1);
console.log(giocatore2);
var numero = Math.floor((Math.random() * (100 - 1) + 1));
console.log(numero);
var diff1 = Math.abs(numero - giocatore1);
var diff2 = Math.abs(numero - giocatore2);
if (diff1 > diff2 && diff2 != 0) {
    console.log('gioc2 ci è andato più vicino');
}
else if (diff1 < diff2 && diff1 != 0) {
    console.log('gioc1 ci è andato più vicino');
}
else if (giocatore1 == giocatore2) {
    console.log('hanno pareggiato');
}
else if (giocatore1 == numero) {
    console.log('gioc1 ha vinto');
}
else if (giocatore2 == numero) {
    console.log('gioc2 ha vinto');
}
//giocatore1 dice 5
//giocatore dice 12
//numero = 10
// 12 -10 = 2 //  5-10 = -5 if ris gioc2 -numero > ris gioc1 -numero allora gioc2 è andato più vicino
