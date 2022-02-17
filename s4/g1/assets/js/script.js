
function changeBackcolor(){
    document.getElementById('titolo').style.backgroundColor = 'red';
}
function changeButtonstyle(){
    document.getElementById('button1').style.backgroundColor = 'green';
    document.getElementById('button1').style.color = 'blue';
}
function ripristino(){
    document.getElementById('button1').style.backgroundColor ='';
    document.getElementById('button1').style.color = '';
    document.getElementById('titolo').style.backgroundColor = '';
    document.getElementById('grow').style.fontSize = '';
    document.getElementById('grow').style.backgroundColor = '';
    document.getElementById('grow').style.color = '';
}
function growUp(){
    document.getElementById('grow').style.fontSize = '3rem';
}
function tema(){
    document.getElementById('grow').style.backgroundColor = 'black';
    document.getElementById('grow').style.color = 'white';
}
