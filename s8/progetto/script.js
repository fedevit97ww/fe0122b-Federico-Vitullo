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
var vestito = new Abbigliamento(6, 1727, 'estate', 'canotta', 1245, 6, 'bianco', 100, 122, 'negozio', 10);
var vestito2 = new Abbigliamento(7, 8712, 'autunno', 'cappello', 8945, 7, 'verde', 10, 12, 'magazzino', 8);
var vestito3 = new Abbigliamento(8, 9832, 'inverno', 'sciarpa', 1597, 6, 'giallo', 20, 24.4, 'negozio', 10);
//var globali
var select = document.querySelector('#vestiti');
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
        //let autoSelezionata = veicoli.find(auto => auto.id == idAutoSel)
        var vestitoSel;
        for (var i = 0; i < p.length; i++) {
            if (p[i].id == idVestito) {
                vestitoSel = p[i];
            }
        }
        var collect = document.querySelector('#collezione');
        collect.innerText = vestitoSel.collezione.toUpperCase();
        var capo = document.querySelector('#capo');
        capo.innerText = vestitoSel.capo.toUpperCase();
        var quantita = document.querySelector('#quantita');
        quantita.innerText = vestitoSel.quantita;
        var colore = document.querySelector('#colore');
        colore.innerText = vestitoSel.colore.toUpperCase();
        var ivaInclusa = document.querySelector('#ivaInclusa');
        ivaInclusa.innerText = vestitoSel.prezzoivainclusa + '€';
        var disponibile = document.querySelector('#disponibile');
        disponibile.innerText = vestitoSel.disponibile.toUpperCase();
        var saldo = document.querySelector('#saldo');
        saldo.innerText = vestitoSel.saldo + '%';
        var scontato = document.querySelector('#scontato');
        var sconto = document.querySelector('.btn-primary');
        sconto.addEventListener('click', function () {
            scontato.innerText = vestitoSel.getAcquistoCapo() + '€';
        });
    });
}
