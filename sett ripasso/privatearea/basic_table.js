fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {
        var ciao = data



        function creaTabella() {
            var select = document.querySelector('#tab')

            ciao.forEach(function (elemento) {
                let riga = document.createElement('tr');
                let cancella = document.createElement('button');
                let modifica = document.createElement('a');
                cancella.innerText = 'Cancella'
                modifica.innerText = 'Modifica'
                modifica.href = 'edit.html?id=' + elemento.id
                cancella.classList.add('delete')
                modifica.classList.add('modifica')
                select.append(riga)

                for (let prop in elemento) {

                    if (prop == 'name' || prop == 'lastname' || prop == 'email' || prop == 'role') {

                        let contenuto = typeof elemento[prop] == 'object' ? elemento[prop].nicename : elemento[prop];
                        let cella = document.createElement('td')
                        cella.innerText = contenuto
                        riga.append(cella)
                        riga.append(cancella)
                        riga.append(modifica)
                    };
                };


                //Cancella
                cancella.setAttribute('id', elemento.id)
                let deleta = riga.querySelector(".delete")
                deleta.addEventListener('click', function () {

                    Swal.fire({
                        title: 'Sei sicuro di voler eliminare ' + elemento.name + '?',
                        showDenyButton: true,
                        confirmButtonText: 'Elimina',
                        denyButtonText: 'Non eliminare',
                    })
                        .then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                                Swal.fire('Utente ' + elemento.name + ' eliminato!', '', 'success')

                                fetch(
                                    'https://sofin.wp-admin.it/public/api/v1/user/' + elemento.id, {
                                    method: 'DELETE', // or 'PUT'
                                    headers: {
                                        'Content-Type': 'application/json',
                                    }
                                }
                                )
                                    .then(response => response.json())
                                    .then(() => {
                                        riga.remove()
                                    })

                            } else if (result.isDenied) {
                                Swal.fire('Non sono stati effettuati cambiamenti', '', 'info')
                            }
                        })

                })
                //Fine Cancella



            });


        };
        creaTabella();


    })

let search = document.querySelector('#search')
search.addEventListener('click', function () {
    fetch('https://sofin.wp-admin.it/public/api/v1/user')
        .then(response => response.json())
        .then(data => {
            var ciao = data

            let cercaNome = document.querySelector('#cercaNome').value
            let cercaMail = document.querySelector('#cercaMail').value

            let utentiCercati = ciao.filter(o => o.name.search(cercaNome) != -1)
            //document.querySelector('#prova').innerHTML = utentiCercati
            //console.log(ciao.filter(o => o.email.search(cercaMail) != -1))
            let table = document.querySelector('tbody')
            table.classList.add('nascondi')
        })

})
