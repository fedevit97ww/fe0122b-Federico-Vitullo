/* 1)Creare variabile per il budget
 2)funzione che scala il budget progressivamente
 3)messaggi di avviso a metà e fine budget --> alert situazione corrente
 4)output che mostra progressivamente il budget che scala

*/
/*function Budgetdec(){
    var budget = 1000;
    var decremento;
    while(budget > 0 ){
        decremento= Math.round(Math.random()*100);
       
        console.log(budget);
        console.log(' - '+ decremento)

        if(budget <= 500 && budget >= 450){
            console.log('sei circa a metà dei tuoi soldi')
        }
        if(decremento > budget){
            
            decremento = budget;
            console.log('Non hai denaro a disposizione') 
        }
        budget -= decremento;
        document.querySelector('#test').innerHTML += `<p> Hai speso ${decremento}. Il budget rimasto è ${budget} </p>`
    }
}
Budgetdec()*/


function menoBudget(){
    let budget = document.querySelector('#test p:last-child') ? document.querySelector('#test p:last-child').innerHTML : 1000
    let soldi = document.getElementById('soldi').value
    budget -= soldi
    var p = document.createElement('p')
    p.classList.add('ciao')
    p.innerHTML =  budget 
    document.querySelector('#test').append(p)
    if(budget <= 600 && budget >= 400 ){
        alert('stai finendo i tuoi soldi')
    }
    if( budget <= 0)
    {
      alert('non hai più denaro')
    }
}
document.querySelector('button').addEventListener('click',menoBudget)


