//superclass

class SonAccount {
    saldo: number;
    prelievi: number[] = [];
    versamenti: number[] = [];
    constructor(saldo: number) {
        this.saldo = saldo;
    }
    oneDeposit(num: number): number {
        this.versamenti.push(num)
        console.log(this.versamenti)
        return this.saldo += num;
    }
    oneWithDraw(num: number): number {
        this.prelievi.push(num)
        console.log(this.prelievi)
        return this.saldo -= num;
    }
}
//sottoclasse
class MotherAccount extends SonAccount {
    constructor(saldo: number) {
        super(saldo)
    }
    interests(): number {
        return Math.round((this.saldo / 100) * 10)
    }
    addInterests(): number {
        return this.saldo += this.interests()
    }
    
}

//oggetti
let figlio = new SonAccount(2000)
let madre = new MotherAccount(1000)
//

//istruzioni ogg figlio
let saldoCorrente: any = document.querySelector('#saldoCorrente');
saldoCorrente.placeholder = figlio.saldo;

let versa: any = document.getElementById('versa')
versa.addEventListener('click', () => {
    getVers(figlio);
    saldoCorrente.placeholder = figlio.saldo;
})

let prel: any = document.getElementById('preleva')
prel.addEventListener('click', () => {
    getPrel(figlio);
    saldoCorrente.placeholder = figlio.saldo;
})
//fine ogg figlio


//istruzioni ogg madre
let saldoCorrenteM: any = document.querySelector('#saldoCorrenteM');
saldoCorrenteM.placeholder = madre.saldo;
let int: any = document.querySelector('#interessi');
int.innerHTML = madre.interests();
let saldofinale: any = document.getElementById('saldofinale');
saldofinale.innerHTML = `Saldo più interessi : ${madre.addInterests()}`;


let versaM: any = document.getElementById('versaM');
versaM.addEventListener('click', () => {
    getVers(madre);
    saldoCorrenteM.placeholder = madre.saldo;
    let int: any = document.querySelector('#interessi');
    int.innerHTML = madre.interests();
    saldofinale.innerHTML = `Saldo più interessi : ${madre.saldo + madre.interests()}`;
    
})

let prelM: any = document.getElementById('prelevaM')
prelM.addEventListener('click', () => {
    getPrel(madre);
    saldoCorrenteM.placeholder = madre.saldo;
    let int: any = document.querySelector('#interessi');
    int.innerHTML = madre.interests();
    saldofinale.innerHTML = `Saldo più interessi : ${madre.saldo + madre.interests()}`;
})

//fine ogg madre


//funzione per prendere il valore nell'input di versamento
function getVers(el: any) {
    if (el == figlio) {
        let campoV: any = document.getElementById("versamento");
        let campoVal = Number(campoV.value);
        el.oneDeposit(campoVal);
        campoV.value = '';
    } else if (el == madre) {
        let campoV: any = document.getElementById("versamentoM");
        let campoVal = Number(campoV.value);
        el.oneDeposit(campoVal);
        campoV.value = '';
    }
}

// per prendere il valore nell'input di prelievo
function getPrel(el: any) {
    if (el == figlio) {
        let campoV: any = document.getElementById("prelievo");
        let campoVal = Number(campoV.value);
        el.oneWithDraw(campoVal);
        campoV.value = '';
    } else if (el == madre) {
        let campoV: any = document.getElementById("prelievoM");
        let campoVal = Number(campoV.value);
        el.oneWithDraw(campoVal);
        campoV.value = '';
    }
}




