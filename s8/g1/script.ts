let giocatore1: number = Math.floor((Math.random() * (100 - 1) + 1));
let giocatore2: number = Math.floor((Math.random() * (100 - 1) + 1));

console.log('giocatore1' + " " + giocatore1);
console.log('giocatore2' + " " + giocatore2);

let numero: number = Math.floor((Math.random() * (100 - 1) + 1));
console.log(numero);

let diff1 = Math.abs(numero - giocatore1);
let diff2 = Math.abs(numero - giocatore2);

if (diff1 > diff2 && diff2 != 0) {
    console.log('gioc2 ci è andato più vicino');

} else if (diff1 < diff2 && diff1 != 0) {
    console.log('gioc1 ci è andato più vicino');

} else if (giocatore1 == giocatore2) {
    console.log('hanno pareggiato');

} else if (giocatore1 == numero) {
    console.log('gioc1 ha vinto');

} else if (giocatore2 == numero) {
    console.log('gioc2 ha vinto');
}

