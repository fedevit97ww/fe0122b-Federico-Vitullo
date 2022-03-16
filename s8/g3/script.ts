//reddito lordo tasse da pagare reddito netto //

//ogg lavoratore che ha un reddito lordo
//get tasse 
//get irpef
//get inps
//get reddito annuo netto
//

abstract class Lavoratori {
    redditoLordo: number;
    constructor(redditoLordo: number) {
        this.redditoLordo = redditoLordo;
    }
    abstract getIrpef(): number;
    abstract getInps(): number;
    abstract getTasse(): number;
    abstract getRedditoNetto(): number;
}

class Edilizia extends Lavoratori {
    constructor(redditoLordo: number) {
        super(redditoLordo)
    }
    getIrpef(): number {
        return (this.redditoLordo / 100) * 1.2
    }
    getInps(): number {
        return (this.redditoLordo / 100) * 1.4
    }
    getTasse(): number {
        return (this.redditoLordo / 100) * 32
    }
    getRedditoNetto(): number {
        return this.redditoLordo - (this.getIrpef() + this.getInps() + this.getTasse())
    }
}


class Avvocati extends Lavoratori {
    constructor(redditoLordo: number) {
        super(redditoLordo)
    }
    getIrpef(): number {
        return (this.redditoLordo / 100) * 1.56
    }
    getInps(): number {
        return (this.redditoLordo / 100) * 1.8
    }
    getTasse(): number {
        return (this.redditoLordo / 100) * 28
    }
    getRedditoNetto(): number {
        return this.redditoLordo - (this.getIrpef() + this.getInps() + this.getTasse())
    }
}
let butt: any = document.querySelector('#newCalc')

let edil:any = document.querySelector('#edil')

let avv:any = document.querySelector('#avv')

edil.addEventListener('click',function(e:any){
e.target.classList.add('edile')
})

avv.addEventListener('click',function(e:any){
e.target.classList.remove('edile')
})


butt.addEventListener('click', () => {
    let valore: any = document.getElementById('Reddito');
    let numVal = Number(valore.value);

    if(edil.classList.contains('edile')){
       var lav = new Edilizia(numVal);
    } else{
       var lav = new Avvocati(numVal)
    }


    let inps: any = document.getElementById('inps');
    inps.value = Math.ceil(lav.getInps());

    let irpef: any = document.getElementById('irpef');
    irpef.value = Math.ceil(lav.getIrpef());

    let tasse: any = document.getElementById('tasse');
    tasse.value = Math.ceil(lav.getTasse());

    let redditoNetto: any = document.getElementById('ReddN');
    redditoNetto.value = Math.ceil(lav.getRedditoNetto());

    valore.value = '';
    valore.placeholder = lav.redditoLordo;
});

