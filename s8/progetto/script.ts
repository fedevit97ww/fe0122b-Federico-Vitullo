fetch('Abbigliamento.json')
    .then(response => response.json())
    .then(risposta => {
        let contVestiti: any = [];
        risposta.forEach((item: Abbigliamento) => {

            var vestiti = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
            contVestiti.push(vestiti)
            console.log(vestiti);
            console.log('xxxxxxxxxxxxx')
            console.log('xxxxxxxxxxxxx')
            console.log('Il prezzo IVA esclusa del capo ' + item.capo + ' è di ' + item.prezzoivaesclusa + ' applicando uno sconto del ' + item.saldo + '%' + ' il totale imponibile risulta: ' + vestiti.getSaldocapo());

            console.log('Il prezzo del capo ' + item.capo + ' scontato del ' + item.saldo + '% è: ' + vestiti.getAcquistoCapo() + ' IVA inclusa');
        });


        for (let i = 0; i < contVestiti.length; i++) {
            console.log(contVestiti[i].getSaldocapo());
        }

        //elementi creati a mano
        contVestiti.push(vestito)
        contVestiti.push(vestito2)
        contVestiti.push(vestito3)
        //
        populateSelectOptions(contVestiti)
    })


//CLASSE//
class Abbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;

    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {
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
    getSaldocapo(): number {
        return Number((this.prezzoivaesclusa - (this.prezzoivaesclusa * this.saldo) / 100).toFixed(2))
    }
    getAcquistoCapo(): number {
        return Number((this.getSaldocapo() * 1.22).toFixed(2))
    }
}
//oggetti creati post richiesta get
let vestito = new Abbigliamento(6, 1727, 'estate', 'canotta', 1245, 6, 'bianco', 100, 122, 'negozio', 10)
let vestito2 = new Abbigliamento(7, 8712, 'autunno', 'cappello', 8945, 7, 'verde', 10, 12, 'magazzino', 8)
let vestito3 = new Abbigliamento(8, 9832, 'inverno', 'scarpe', 1597, 6, 'giallo', 20, 24.4, 'negozio', 10)

//var globali
var select: any = document.querySelector('#vestiti')
let scontato: any = document.querySelector('#scontato')
let sconto: any = document.querySelector('.btn-primary');
let saldo: any = document.querySelector('#saldo');
let disponibile: any = document.querySelector('#disponibile');
let ivaInclusa: any = document.querySelector('#ivaInclusa');
let colore: any = document.querySelector('#colore');
let collect: any = document.querySelector('#collezione');
let capo: any = document.querySelector('#capo');
let quantita: any = document.querySelector('#quantita');
let foto = document.querySelector('#immagineAutoSelezionata');

///funzioni
function populateSelectOptions(p: any) {
    for (var i = 0; i < p.length; i++) {
        var option = document.createElement('option')
        option.setAttribute('value', p[i].id)
        option.innerText = `${p[i].capo.toUpperCase()} `
        select.append(option)
    }

    select.addEventListener('change', function mostraVestiti() {
        var idVestito = select.value;
        var vestitoSel: any;
        sconto.addEventListener('click', () => {
            scontato.innerText = vestitoSel.getAcquistoCapo() + '€';
        });
        try{
        for (var i = 0; i < p.length; i++) {
            if (p[i].id == idVestito) {
                vestitoSel = p[i]
            }
        }
        collect.innerText = vestitoSel.collezione.toUpperCase();
        capo.innerText = vestitoSel.capo.toUpperCase();
        quantita.innerText = vestitoSel.quantita;
        colore.innerText = vestitoSel.colore.toUpperCase();
        ivaInclusa.innerText = vestitoSel.prezzoivainclusa + '€';
        disponibile.innerText = vestitoSel.disponibile.toUpperCase();
        saldo.innerText = vestitoSel.saldo + '%';
        foto?.setAttribute('src','img/' + vestitoSel.codprod + '.png');
        scontato.innerText = '';

     } catch{
        collect.innerText = '';
        capo.innerText = '';
        quantita.innerText = '';
        colore.innerText = '';
        ivaInclusa.innerText = '';
        disponibile.innerText ='';
        saldo.innerText = '';
        scontato.innerText = '';
        foto?.setAttribute('src','');
     }
    });


}
