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
var SecondUser = /** @class */ (function () {
    function SecondUser(caricaMoney, numeroChiamate) {
        this.caricaMoney = caricaMoney;
        this.numeroChiamate = numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (soldi) {
        this.caricaMoney += soldi;
    };
    SecondUser.prototype.chiamata = function (minuti) {
        this.caricaMoney -= (0.20 * minuti);
        this.numeroChiamate += 1;
    };
    SecondUser.prototype.numero404 = function () {
        return this.caricaMoney;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var ThirdUser = /** @class */ (function () {
    function ThirdUser(caricaMoney, numeroChiamate) {
        this.caricaMoney = caricaMoney;
        this.numeroChiamate = numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (soldi) {
        this.caricaMoney += soldi;
    };
    ThirdUser.prototype.chiamata = function (minuti) {
        this.caricaMoney -= (0.20 * minuti);
        this.numeroChiamate += 1;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.caricaMoney;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var Majeed = new ThirdUser(10, 2);
var Erica = new FirstUser(15, 0);
var Elisabetta = new SecondUser(20, 0);
var Sergiu = new FirstUser(0, 0);
var credito1 = document.getElementById('s1');
credito1.innerHTML = Majeed.caricaMoney + '€';
var chiamate1 = document.getElementById('c1');
chiamate1.innerHTML = Majeed.numeroChiamate;
