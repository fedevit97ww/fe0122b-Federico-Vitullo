fetch('Abbigliamento.json')
    .then(response => response.json())
    .then(risposta => {
        risposta.forEach((item: Abbigliamento) => {

            var vestiti = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);

            console.log(vestiti);
            console.log('xxxxxxxxxxxxx')
            console.log('xxxxxxxxxxxxx')
            console.log('Il prezzo IVA esclusa del capo ' + item.capo + ' è di ' + item.prezzoivaesclusa + ' applicando uno sconto del ' + item.saldo + '%' + ' il totale imponibile risulta: ' + vestiti.getSaldocapo());

            console.log('Il prezzo del capo ' + item.capo + ' scontato del ' + item.saldo + '% è: ' + vestiti.getAcquistoCapo() + ' IVA inclusa');

            
        
        
        })
      
        console.table(vestito);
        console.table(vestito2);
        console.table(vestito3);

        console.log(vestito.getSaldocapo());
        console.log(vestito2.getSaldocapo());
        console.log(vestito3.getSaldocapo());

        console.log(vestito.getAcquistoCapo());
        console.log(vestito2.getAcquistoCapo());
        console.log(vestito3.getAcquistoCapo());
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

let vestito = new Abbigliamento(6, 1727, 'estate', 'canotta', 1245, 6, 'bianco', 100, 122, 'negozio', 10)
let vestito2 = new Abbigliamento(7, 8712, 'autunno', 'cappello', 8945, 7, 'verde', 10, 12, 'magazzino', 8)
let vestito3 = new Abbigliamento(8, 9832, 'inverno', 'sciarpa', 1597, 6, 'giallo', 20, 24.4, 'negozio', 10)

