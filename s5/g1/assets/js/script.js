var data = new Date();
document.getElementById('data').innerHTML = data;

var anno = data.getFullYear()
//console.log(anno)
document.getElementById('anno').innerHTML = `L'anno attuale è il  ${anno}`;


var mese = data.toLocaleDateString('it-IT',{month:'long',})
document.getElementById('mese').innerHTML = `Il mese attuale è   ${mese}`;

var giorno = data.toLocaleDateString('it-IT',{weekday:'long'})
document.getElementById('giorno').innerHTML = `Il giorno è   ${giorno}`;

const evento = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long',day: 'numeric'  };

console.log(evento.toLocaleDateString('it-IT',options))

//var ora = `${(data.getHours()).toString()}:${(data.getMinutes()).toString()}:${(data.getSeconds()).toString()} `
//console.log(ora)

//opzione1
/*function Orologio(){
    var data = new Date()
    document.getElementById('digital').innerHTML = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} `
}
setInterval(Orologio,1000)*/
//opzione2
/*setInterval(function(){
    var data = new Date()
    document.getElementById('digital').innerHTML = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} `
},1000)*/


//opzione3
setInterval(function(){
    var data = new Date()
    document.getElementById('digital').innerHTML = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} `
},1000)

// var hour = addZero(data.getHours())
//var minutes = addZero(data.getMinutes())
//var seconds = addZero(data.getSeconds())