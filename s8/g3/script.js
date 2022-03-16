//reddito lordo tasse da pagare reddito netto //
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
//ogg lavoratore che ha un reddito lordo
//get tasse 
//get irpef
//get inps
//get reddito annuo netto
//
var Lavoratori = /** @class */ (function () {
    function Lavoratori(redditoLordo) {
        this.redditoLordo = redditoLordo;
    }
    return Lavoratori;
}());
var Edilizia = /** @class */ (function (_super) {
    __extends(Edilizia, _super);
    function Edilizia(redditoLordo) {
        return _super.call(this, redditoLordo) || this;
    }
    Edilizia.prototype.getIrpef = function () {
        return (this.redditoLordo / 100) * 1.2;
    };
    Edilizia.prototype.getInps = function () {
        return (this.redditoLordo / 100) * 1.4;
    };
    Edilizia.prototype.getTasse = function () {
        return (this.redditoLordo / 100) * 32;
    };
    Edilizia.prototype.getRedditoNetto = function () {
        return this.redditoLordo - (this.getIrpef() + this.getInps() + this.getTasse());
    };
    return Edilizia;
}(Lavoratori));
var Avvocati = /** @class */ (function (_super) {
    __extends(Avvocati, _super);
    function Avvocati(redditoLordo) {
        return _super.call(this, redditoLordo) || this;
    }
    Avvocati.prototype.getIrpef = function () {
        return (this.redditoLordo / 100) * 1.56;
    };
    Avvocati.prototype.getInps = function () {
        return (this.redditoLordo / 100) * 1.8;
    };
    Avvocati.prototype.getTasse = function () {
        return (this.redditoLordo / 100) * 28;
    };
    Avvocati.prototype.getRedditoNetto = function () {
        return this.redditoLordo - (this.getIrpef() + this.getInps() + this.getTasse());
    };
    return Avvocati;
}(Lavoratori));
var butt = document.querySelector('#newCalc');
var edil = document.querySelector('#edil');
var avv = document.querySelector('#avv');
edil.addEventListener('click', function (e) {
    e.target.classList.add('edile');
});
avv.addEventListener('click', function (e) {
    e.target.classList.remove('edile');
});
butt.addEventListener('click', function () {
    var valore = document.getElementById('Reddito');
    var numVal = Number(valore.value);
    if (edil.classList.contains('edile')) {
        var lav = new Edilizia(numVal);
    }
    else {
        var lav = new Avvocati(numVal);
    }
    var inps = document.getElementById('inps');
    inps.value = Math.ceil(lav.getInps());
    var irpef = document.getElementById('irpef');
    irpef.value = Math.ceil(lav.getIrpef());
    var tasse = document.getElementById('tasse');
    tasse.value = Math.ceil(lav.getTasse());
    var redditoNetto = document.getElementById('ReddN');
    redditoNetto.value = Math.ceil(lav.getRedditoNetto());
    valore.value = '';
    valore.placeholder = lav.redditoLordo;
});
