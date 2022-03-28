class datiUtente {
    constructor(username, email, password) {
        this.id = (() => {
            let newId = localStorage.getItem('id') == null ? 1 : Number(localStorage.getItem('id')) + 1
            localStorage.setItem('id', newId)
            return newId  //serve per valorizzare l'id altrimenti non lo trova
        })()
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

document.querySelector('#registra').addEventListener('click', function () {

   //preventDefault //e nei parametri della function e --> e.preventDefault

    var control = true;
    var controlUser = true;

    let campi = document.querySelectorAll('.nunzio') 

    var valori = Array.from(campi).map(element => element.value)

    var [username,email,password,password2] = valori

    var listaUtenti = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'))

    var checkUser = listaUtenti.find(o => o.email == email || o.username == username)


    if ( checkUser == undefined) {
        console.log('Dati validi')
    } else {
        control = false
        controlUser = false
    }

    campi.forEach(function (campo) {
        if (campo.value == "") {
            campo.style.border = "1px solid red"
            // alert('i campi devono essere compilati')
            control = false
        } else {
            console.log(campo.id + "  valido")
            campo.style.border = ""
            // alert('il form è corretto')
        }
    })

    if (password2 != password) {
        alert('Le password devono combaciare')
        control = false;
    } else {
        console.log('Password combaciano')
    }

    if (control) {
        //salvo i dati e li pusho in local storage
        let utentiSalvati = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'))
        let dati = new datiUtente(username, email, password)
        utentiSalvati.push(dati)
        localStorage.setItem('utenti', JSON.stringify(utentiSalvati))

        swal("Ottimo!", "Registrazione andata a buon fine!", "success");

      
        
        setTimeout(function () {
            window.location = "login.html";

        }, 2000);

    } else {
        if (controlUser == false) {
            swal("Attenzione", "Dati già esistenti", "warning")
        } else {
            swal("Attenzione", "Compila tutti i campi correttamente", "warning")
        }

    }

});

