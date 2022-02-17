var operazioneCliccata = false;


function prendiDato(dato){

    if (dato =='+'||dato =='-'||dato =='*'|| dato =='/' ) {
        if (operazioneCliccata == false){
            document.getElementById('display').value += dato;//concatena i valori presi dal this.id dove lancio la funzione e li scrive a display
            operazioneCliccata = true;
        }
   
        
    }
    if (Number.isInteger(dato) || dato == '.'){
         document.getElementById('display').value += dato;
         operazioneCliccata = false;
    }
}

function operazione() {
   document.getElementById('display').value = eval(document.getElementById('display').value);
}

function cancella() {
    document.getElementById('display').value =" ";
}



