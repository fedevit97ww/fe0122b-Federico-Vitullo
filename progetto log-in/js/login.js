document.querySelector('#login1').addEventListener('click', function () {

    let user = document.querySelector('#user').value
    let psw = document.querySelector('#psw').value
    let mailLogin = document.querySelector('#mailLogin').value

    //var listaUtenti = JSON.parse(localStorage.getItem('utenti'))
    var listaUtenti = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'))

    let checkUser = listaUtenti.find(o => o.username == user && o.password == psw &&  o.email == mailLogin)

    if (checkUser == undefined) {
        Swal.fire({
            icon: 'error',
            title: 'Errore!',
            text: 'Il login non è andato a buon fine!',
        })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Ottimo!',
            text: 'Login complete!',
        })
        localStorage.setItem('nome', user);
        localStorage.setItem('email', mailLogin);
        localStorage.setItem('password',psw)
        localStorage.setItem('token','ok')
        
        setTimeout(function () {
            window.location = "privatearea/profile.html";

        }, 2000);

    }
})