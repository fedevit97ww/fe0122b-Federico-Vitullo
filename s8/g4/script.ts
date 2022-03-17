//interfaccia smartphone
//con number carica e numero chiamate
//metodi void : public void chiamat, public void ricarica 
//public 404():number --> restituisce il valore della carica disponibile.
//get numero chiamate()--> restituisce il valore della variabile numero chiamate
//azzera chiamate()
//saldo residuo ogni utente e quante chiamate efettuate


//classi first-user second-user third user
//con metodi public void chiamata, public void ricarica

interface Smartphone{
caricaMoney:number;
numeroChiamate:number;
ricarica(soldi:number):void; //--> aumenta i soldi nel telefonino
chiamata(minuti:number):void; //--> effettua una chiamata di durata in minuti specificata nel parametro esplicito, questo aggiornerà la carica ed aumenterà il numero chiamate 0.20  al minuto
numero404():number; //--> mi da il valore della carica del telefono
getNumeroChiamate():number //--> mi dice il numero delle chiamate
azzeraChiamate():number //--> svuota il numero chiamate
}

//Verificare il saldo residuo di ogni utente e quante chimate sono state effettuate

class FirstUser implements Smartphone{
    public caricaMoney: number;
    public numeroChiamate: number;
    constructor(caricaMoney:number,numeroChiamate: number){
        this.caricaMoney = caricaMoney;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(soldi:number): void {
    this.caricaMoney += soldi;
    }
    chiamata(minuti:number): void {
    this.caricaMoney -= (0.20 * minuti);
    this.numeroChiamate += 1
    }
    numero404():number{
        return this.caricaMoney;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): number {
       return this.numeroChiamate = 0;
    }
}

class SecondUser implements Smartphone{
    public caricaMoney: number;
    public numeroChiamate: number;
    constructor(caricaMoney:number,numeroChiamate: number){
        this.caricaMoney = caricaMoney;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(soldi:number): void {
    this.caricaMoney += soldi;
    }
    chiamata(minuti:number): void {
    this.caricaMoney -= (0.20 * minuti);
    this.numeroChiamate += 1
    }
    numero404():number{
        return this.caricaMoney;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): number {
       return this.numeroChiamate = 0;
    }
}

class ThirdUser implements Smartphone{
    public caricaMoney: number;
    public numeroChiamate: number;
    constructor(caricaMoney:number,numeroChiamate: number){
        this.caricaMoney = caricaMoney;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(soldi:number): void {
    this.caricaMoney += soldi;
    }
    chiamata(minuti:number): void {
    this.caricaMoney -= (0.20 * minuti);
    this.numeroChiamate += 1
    }
    numero404():number{
        return this.caricaMoney;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): number {
       return this.numeroChiamate = 0;
    }
}

let Majeed = new ThirdUser(10,2);
let Erica = new FirstUser(15,0);
let Elisabetta = new SecondUser (20,0);
let Sergiu = new FirstUser(0,0);

let credito1:any = document.getElementById('s1');
credito1.innerHTML = Majeed.caricaMoney +'€';

let chiamate1:any = document.getElementById('c1');
chiamate1.innerHTML = Majeed.numeroChiamate;
