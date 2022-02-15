var dati1 = 0;
var dati2 = 0;
var dati3 = 0;
const fissa = 1;


var testo = 'Questa è una tabella sulle ore di studio';
document.getElementById('testotabella').innerHTML = testo;

/*function somma1() {
    var datiUno=document.getElementById('dato1').innerHTML*(fissa);
     datiUno+=document.getElementById('dato4').innerHTML*(fissa);
     datiUno+=document.getElementById('dato7').innerHTML*(fissa) ;
     document.getElementById('ris1').innerHTML= (datiUno);
 }
 somma1();
 function somma2() {
    var datiUno=document.getElementById('dato2').innerHTML*(fissa);
     datiUno+=document.getElementById('dato5').innerHTML*(fissa);
     datiUno+=document.getElementById('dato8').innerHTML*(fissa) ;
     document.getElementById('ris2').innerHTML= (datiUno);
 }
 somma2();

 function somma3() {
    var datiUno=document.getElementById('dato3').innerHTML*(fissa);
     datiUno+=document.getElementById('dato6').innerHTML*(fissa);
     datiUno+=document.getElementById('dato9').innerHTML*(fissa) ;
     document.getElementById('ris3').innerHTML= (datiUno);
 }
 somma3();*/ //sostituite con un'unica funzione qui sotto

function somma(a, b, c, d) {
    var datiUno = document.getElementById(a).innerHTML * (fissa);// il per 1(fissa)serve a trasformare una stringa numerica in html in un numero, var è per la creazione della variabile datiUno
    datiUno += document.getElementById(b).innerHTML * (fissa);// con questo procedimento aumento il valore di datiUno sommando a quanto detto nel parametro a il valore del parametro b
    datiUno += document.getElementById(c).innerHTML * (fissa);
    document.getElementById(d).innerHTML = (datiUno);//scrivo il risultato delle somme in un elemento html da me selezionato
}
/*somma('dato1','dato4','dato7','ris1');
somma('dato2','dato5','dato8','ris2');
somma('dato3','dato6','dato9','ris3');*/ //sostituite col bottone r.54 html

function sottrazione() {
    var dato = document.getElementById('ris3').innerHTML * (fissa);
    dato -= document.getElementById('ris1').innerHTML * 1;
    document.getElementById('differenza').innerHTML = "La differenza è : " + (dato);
}

var num = '5 ';
var boolean = true;
console.log(num + boolean)
var num = 5;
var boolean = true;
console.log(num + boolean)

var nome = 'Federico';
var cognome = 'Vitullo';
document.getElementById('author').innerHTML = "L'autore di questa tabella è: " + (nome + "  " + cognome);

{
    let nome = 'Mario';
    nome = 'Mario'; //non verrà visualizzato dal consolelog alla riga 63 perchè rimane dentro un blocco (block scope)
    console.log(nome);
}
console.log(nome);

