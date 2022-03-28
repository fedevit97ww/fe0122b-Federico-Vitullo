let navhead = document.querySelector('#navhead')
var bool = false
navhead.addEventListener('click', function () {

    if (bool == false) {
        document.querySelector('#tendina').style.display = 'block'
        bool = true
    } else if (bool == true) {
        document.querySelector('#tendina').style.display = '';
        bool = false
    }

}
)

document.getElementById('l1').innerHTML = 'Chi siamo';
document.getElementById('l2').innerHTML = 'Dove siamo';
document.getElementById('l3').innerHTML = 'Contatti';

let button = document.querySelectorAll('.btn')
//button[0].innerHTML = 'cambia'

for (let i = 0; i < button.length; i++) 
{
    scritta = 'cambio' + Number([i + 1])
    button[i].innerHTML = scritta
}

let giallo = document.getElementById('bott1')
giallo.addEventListener(
    'click', function () 
{
    document.getElementById('testo').style.backgroundColor = 'yellow'
}
)

let grande = document.getElementById('bott2')
grande.addEventListener('click', function ()
 {
    document.getElementById('testo').style.fontSize = '100px'
    document.getElementById('testo').style.backgroundColor = 'red'
 }
)
let stile = document.getElementById('bott3')
stile.addEventListener('click', function () {
    document.getElementById('testo').style.fontFamily = 'Verdana'
}
)
let corsivo = document.getElementById('bott4')
corsivo.addEventListener('click', function () {
    document.getElementById('testo').style.fontStyle = 'italic'
}
)
let sparisci = document.getElementById('bott5')
sparisci.addEventListener('click', function () {
    document.getElementById('testo').style.display = 'none'
}
)


let  underline = document.getElementById('elemento1')
underline.addEventListener('mouseover',function(){
underline.style.textDecoration = 'underline'
})

let  lineT = document.getElementById('elemento2')
lineT.addEventListener('mouseover',function(){
lineT.style.textDecoration = 'line-through'
})

let bg =  document.getElementById('elemento3')
bg.addEventListener('mouseover',function(){
bg.style.backgroundColor = 'red';
bg.style.width = '100px';
})

let  grande2 = document.getElementById('elemento4')
grande2.addEventListener('mouseover',function(){
grande2.style.fontWeight = 'bolder';
})








/*let bott1 = document.querySelector('#bott1');
bott1.addEventListener('click', function(){
document.querySelector('#testo').classList.toggle('yellow')});*/




