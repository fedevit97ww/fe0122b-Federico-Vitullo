let tk = localStorage.getItem('token')

if (tk == 'ok'){


var selectUser = document.querySelector('#user')
var selectMail = document.querySelector('#mail')
let nome = localStorage.getItem('nome')
let email = localStorage.getItem('email')
let psw = localStorage.getItem('password')
console.log(psw)
function cardDati(){
    
    selectUser.innerHTML = nome
    selectMail.innerHTML = email
    document.querySelector("#example-name").value = nome
    document.querySelector("#example-email").value = email
    document.querySelector("#example-psw").value = psw
};
cardDati();

document.querySelector('#logout').addEventListener('click', function(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    window.location.href="/login.html";
})

} else{
    window.location.href="/login.html";
}