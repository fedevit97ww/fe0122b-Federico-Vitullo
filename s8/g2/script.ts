class SonAccount {
    saldo: number;
    prelievi: number[] = [];
    versamenti: number[] = [];

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    oneDeposit(num: number): number {
        this.versamenti.push(num)
        return this.saldo += num;
    }

    oneWithDraw(num: number): number {
        this.prelievi.push(num)
        return this.saldo -= num;
    }
}

class MotherAccount extends SonAccount {
    constructor(saldo: number) {
        super(saldo)
    }
    interests():number {
        return (this.saldo / 100) * 10
    }
    addInterests(): number {
        return this.saldo += this.interests()
    }
}


 //let moneyPlus= document.querySelector('#versamento')
 

let figlio = new SonAccount(2000)

let saldoCorrente:any = document.querySelector('#saldoCorrente') 
saldoCorrente.value = figlio.saldo
let versa:any = document.getElementById('versa')

function getVal(){
    console.log('ciao')
    var num = Number((<HTMLInputElement>document.getElementById("versa")).value);
    console.log(num)
    figlio.oneDeposit(num)
    console.log(figlio.saldo)
}

versa.addEventListener('click', getVal)

let madre = new MotherAccount(1000)

//console.log(figlio.oneDeposit(100))
console.log(figlio.saldo)

console.log(madre.addInterests())
console.log(madre.saldo)
console.log(madre.addInterests())
console.log(madre.oneWithDraw(200))
console.log(madre.addInterests())
console.log(madre.oneDeposit(1800))
console.log(madre.oneDeposit(800))
console.log(madre.saldo)
console.log(madre.interests())

console.log(figlio.versamenti)
console.log(madre.versamenti)