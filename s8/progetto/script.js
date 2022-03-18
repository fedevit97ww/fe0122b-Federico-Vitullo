fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (risposta) {
    var contVestiti = [];
    risposta.forEach(function (item) {
        var vestiti = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        contVestiti.push(vestiti);
        console.log(vestiti);
        console.log('xxxxxxxxxxxxx');
        console.log('xxxxxxxxxxxxx');
        console.log('Il prezzo IVA esclusa del capo ' + item.capo + ' è di ' + item.prezzoivaesclusa + ' applicando uno sconto del ' + item.saldo + '%' + ' il totale imponibile risulta: ' + vestiti.getSaldocapo());
        console.log('Il prezzo del capo ' + item.capo + ' scontato del ' + item.saldo + '% è: ' + vestiti.getAcquistoCapo() + ' IVA inclusa');
    });
    for (var i = 0; i < contVestiti.length; i++) {
        console.log(contVestiti[i].getSaldocapo());
    }
    //elementi creati a mano
    contVestiti.push(vestito);
    contVestiti.push(vestito2);
    contVestiti.push(vestito3);
    //
    populateSelectOptions(contVestiti);
});
//CLASSE//
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getSaldocapo = function () {
        return Number((this.prezzoivaesclusa - (this.prezzoivaesclusa * this.saldo) / 100).toFixed(2));
    };
    Abbigliamento.prototype.getAcquistoCapo = function () {
        return Number((this.getSaldocapo() * 1.22).toFixed(2));
    };
    return Abbigliamento;
}());
//oggetti creati post richiesta get
var vestito = new Abbigliamento(6, 1727, 'estate', 'canotta', 1245, 6, 'bianco', 100, 122, 'negozio', 10);
var vestito2 = new Abbigliamento(7, 8712, 'autunno', 'cappello', 8945, 7, 'verde', 10, 12, 'magazzino', 8);
var vestito3 = new Abbigliamento(8, 9832, 'inverno', 'scarpe', 1597, 6, 'giallo', 20, 24.4, 'negozio', 10);
//var globali
var select = document.querySelector('#vestiti');
var scontato = document.querySelector('#scontato');
var sconto = document.querySelector('.btn-primary');
var saldo = document.querySelector('#saldo');
var disponibile = document.querySelector('#disponibile');
var ivaInclusa = document.querySelector('#ivaInclusa');
var colore = document.querySelector('#colore');
var collect = document.querySelector('#collezione');
var capo = document.querySelector('#capo');
var quantita = document.querySelector('#quantita');
var foto = document.querySelector('#immagineAutoSelezionata');
///funzioni
function populateSelectOptions(p) {
    for (var i = 0; i < p.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', p[i].id);
        option.innerText = "".concat(p[i].capo.toUpperCase(), " ");
        select.append(option);
    }
    select.addEventListener('change', function mostraVestiti() {
        var idVestito = select.value;
        var vestitoSel;
        sconto.addEventListener('click', function () {
            scontato.innerText = vestitoSel.getAcquistoCapo() + '€';
        });
        try {
            for (var i = 0; i < p.length; i++) {
                if (p[i].id == idVestito) {
                    vestitoSel = p[i];
                }
            }
            collect.innerText = vestitoSel.collezione.toUpperCase();
            capo.innerText = vestitoSel.capo.toUpperCase();
            quantita.innerText = vestitoSel.quantita;
            colore.innerText = vestitoSel.colore.toUpperCase();
            ivaInclusa.innerText = vestitoSel.prezzoivainclusa + '€';
            disponibile.innerText = vestitoSel.disponibile.toUpperCase();
            saldo.innerText = vestitoSel.saldo + '%';
            foto === null || foto === void 0 ? void 0 : foto.setAttribute('src', 'img/' + vestitoSel.codprod + '.png');
            scontato.innerText = '';
        }
        catch (_a) {
            collect.innerText = '';
            capo.innerText = '';
            quantita.innerText = '';
            colore.innerText = '';
            ivaInclusa.innerText = '';
            disponibile.innerText = '';
            saldo.innerText = '';
            scontato.innerText = '';
            foto === null || foto === void 0 ? void 0 : foto.setAttribute('src', '');
        }
    });
}
