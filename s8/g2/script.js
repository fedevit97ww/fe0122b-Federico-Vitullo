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
var SonAccount = /** @class */ (function () {
    function SonAccount(saldo) {
        this.prelievi = [];
        this.versamenti = [];
        this.saldo = saldo;
    }
    SonAccount.prototype.oneDeposit = function (num) {
        this.versamenti.push(num);
        return this.saldo += num;
    };
    SonAccount.prototype.oneWithDraw = function (num) {
        this.prelievi.push(num);
        return this.saldo -= num;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(saldo) {
        return _super.call(this, saldo) || this;
    }
    MotherAccount.prototype.interests = function () {
        return (this.saldo / 100) * 10;
    };
    MotherAccount.prototype.addInterests = function () {
        return this.saldo += this.interests();
    };
    return MotherAccount;
}(SonAccount));
//let moneyPlus= document.querySelector('#versamento')
var figlio = new SonAccount(2000);
var saldoCorrente = document.querySelector('#saldoCorrente');
saldoCorrente.value = figlio.saldo;
var versa = document.getElementById('versa');
function getVal() {
    console.log('ciao');
    var num = Number(document.getElementById("versa").value);
    console.log(num);
    figlio.oneDeposit(num);
    console.log(figlio.saldo);
}
versa.addEventListener('click', getVal);
var madre = new MotherAccount(1000);
//console.log(figlio.oneDeposit(100))
console.log(figlio.saldo);
console.log(madre.addInterests());
console.log(madre.saldo);
console.log(madre.addInterests());
console.log(madre.oneWithDraw(200));
console.log(madre.addInterests());
console.log(madre.oneDeposit(1800));
console.log(madre.oneDeposit(800));
console.log(madre.saldo);
console.log(madre.interests());
console.log(figlio.versamenti);
console.log(madre.versamenti);
