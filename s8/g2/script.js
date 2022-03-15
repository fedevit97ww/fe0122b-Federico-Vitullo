var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//superclass
var SonAccount = /** @class */ (function () {
    function SonAccount(saldo) {
        this.prelievi = [];
        this.versamenti = [];
        this.saldo = saldo;
    }
    SonAccount.prototype.oneDeposit = function (num) {
        this.versamenti.push(num);
        console.log(this.versamenti);
        return this.saldo += num;
    };
    SonAccount.prototype.oneWithDraw = function (num) {
        this.prelievi.push(num);
        console.log(this.prelievi);
        return this.saldo -= num;
    };
    return SonAccount;
}());
//sottoclasse
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(saldo) {
        return _super.call(this, saldo) || this;
    }
    MotherAccount.prototype.interests = function () {
        return Math.round((this.saldo / 100) * 10);
    };
    MotherAccount.prototype.addInterests = function () {
        return this.saldo += this.interests();
    };
    return MotherAccount;
}(SonAccount));
//oggetti
var figlio = new SonAccount(2000);
var madre = new MotherAccount(1000);
//
//istruzioni ogg figlio
var saldoCorrente = document.querySelector('#saldoCorrente');
saldoCorrente.placeholder = figlio.saldo;
var versa = document.getElementById('versa');
versa.addEventListener('click', function () {
    getVers(figlio);
    saldoCorrente.placeholder = figlio.saldo;
});
var prel = document.getElementById('preleva');
prel.addEventListener('click', function () {
    getPrel(figlio);
    saldoCorrente.placeholder = figlio.saldo;
});
//fine ogg figlio
//istruzioni ogg madre
var saldoCorrenteM = document.querySelector('#saldoCorrenteM');
saldoCorrenteM.placeholder = madre.saldo;
var int = document.querySelector('#interessi');
int.innerHTML = madre.interests();
var saldofinale = document.getElementById('saldofinale');
saldofinale.innerHTML = "Saldo pi\u00F9 interessi : ".concat(madre.addInterests());
var versaM = document.getElementById('versaM');
versaM.addEventListener('click', function () {
    getVers(madre);
    saldoCorrenteM.placeholder = madre.saldo;
    var int = document.querySelector('#interessi');
    int.innerHTML = madre.interests();
    saldofinale.innerHTML = "Saldo pi\u00F9 interessi : ".concat(madre.saldo + madre.interests());
});
var prelM = document.getElementById('prelevaM');
prelM.addEventListener('click', function () {
    getPrel(madre);
    saldoCorrenteM.placeholder = madre.saldo;
    var int = document.querySelector('#interessi');
    int.innerHTML = madre.interests();
    saldofinale.innerHTML = "Saldo pi\u00F9 interessi : ".concat(madre.saldo + madre.interests());
});
//fine ogg madre
//funzione per prendere il valore nell'input di versamento
function getVers(el) {
    if (el == figlio) {
        var campoV = document.getElementById("versamento");
        var campoVal = Number(campoV.value);
        el.oneDeposit(campoVal);
        campoV.value = '';
    }
    else if (el == madre) {
        var campoV = document.getElementById("versamentoM");
        var campoVal = Number(campoV.value);
        el.oneDeposit(campoVal);
        campoV.value = '';
    }
}
// per prendere il valore nell'input di prelievo
function getPrel(el) {
    if (el == figlio) {
        var campoV = document.getElementById("prelievo");
        var campoVal = Number(campoV.value);
        el.oneWithDraw(campoVal);
        campoV.value = '';
    }
    else if (el == madre) {
        var campoV = document.getElementById("prelievoM");
        var campoVal = Number(campoV.value);
        el.oneWithDraw(campoVal);
        campoV.value = '';
    }
}
