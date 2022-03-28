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


let utente = new FirstUser(10,2);


console.log(utente.chiamata(5))
console.log(utente.ricarica(3))
console.log(utente.numero404())
console.log(utente.getNumeroChiamate())
console.log(utente.azzeraChiamate())



/*let credito1:any = document.getElementById('s1');
credito1.innerHTML = Majeed.caricaMoney +'€';

let chiamate1:any = document.getElementById('c1');
chiamate1.innerHTML = Majeed.numeroChiamate;

let chiama:any = document.getElementById('chiama')

chiama.addEventListener('click',function(){
 alert('ciao')
})*/