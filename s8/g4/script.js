//interfaccia smartphone
//con number carica e numero chiamate
//metodi void : public void chiamat, public void ricarica 
//public 404():number --> restituisce il valore della carica disponibile.
//get numero chiamate()--> restituisce il valore della variabile numero chiamate
//azzera chiamate()
//saldo residuo ogni utente e quante chiamate efettuate
//Verificare il saldo residuo di ogni utente e quante chimate sono state effettuate
var FirstUser = /** @class */ (function () {
    function FirstUser(caricaMoney, numeroChiamate) {
        this.caricaMoney = caricaMoney;
        this.numeroChiamate = numeroChiamate;
    }
    FirstUser.prototype.ricarica = function (soldi) {
        this.caricaMoney += soldi;
    };
    FirstUser.prototype.chiamata = function (minuti) {
        this.caricaMoney -= (0.20 * minuti);
        this.numeroChiamate += 1;
    };
    FirstUser.prototype.numero404 = function () {
        return this.caricaMoney;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var utente = new FirstUser(10, 2);
console.log(utente.chiamata(5));
console.log(utente.ricarica(3));
console.log(utente.numero404());
console.log(utente.getNumeroChiamate());
console.log(utente.azzeraChiamate());
/*let credito1:any = document.getElementById('s1');
credito1.innerHTML = Majeed.caricaMoney +'€';

let chiamate1:any = document.getElementById('c1');
chiamate1.innerHTML = Majeed.numeroChiamate;

let chiama:any = document.getElementById('chiama')

chiama.addEventListener('click',function(){
 alert('ciao')
})*/ 
