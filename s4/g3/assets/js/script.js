function sottrazione(corrente, passato ,destinazione){
var data = document.getElementById(corrente).value ;// non serve trasformarlo in numero
 data -= document.getElementById(passato).innerHTML *1;
 document.getElementById(destinazione).innerHTML = (data) ;

}

/*function operazioni() {
    var num = 9;
    function moltiplicazione()
     {
        console.log(num * num);
    }
  
  moltiplicazione();
   
}
operazioni();
*/
operazioni = () =>{
    var num=9;
    moltiplicazione=()=> console.log(num*num);
moltiplicazione()
}
operazioni();



/*function saluta(){
    console.log('ciao')
}*/

(saluta = () => console.log('Ciao a tutti')) ();


function controlloEta()
{
var eta = document.getElementById('tuaeta').value ;
var riferimento = 18;
var massimo = 121;
if (eta < riferimento)  {alert('non puoi');}
else if (eta > massimo)  {alert('stai crepando');}
else {
    alert('puoi accedere'); //scoprire come creare un link ad una pagina 
}

}
function verifica(){
    var anni =document.getElementById('tuaeta').value *1;
    var anniGiusti = 22;
    if (anni != anniGiusti) {console.log("non hai l'età giusta");}
 else if (anni == anniGiusti) {console.log("hai l'età giusta");}

} //da chiedere come far funzionare questa function insieme alla console
verifica()

