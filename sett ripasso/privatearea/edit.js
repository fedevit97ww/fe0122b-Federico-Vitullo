    let param = new URLSearchParams(location.search)
    let id = param.get('id')

    fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json())
    .then(data => {var ciao = data;

        let utente = ciao.find(u => u.id == id)

        document.querySelector('#newNome').value = utente.name
        document.querySelector('#newMail').value = utente.email
        document.querySelector('#newLn').value = utente.lastname
        document.querySelector('#newRoleId').value = utente.role_id 
        document.querySelector('#newPw').value = utente.password

        document.querySelector('#boh').addEventListener('click', function () {
            
        let newNome = document.querySelector('#newNome').value
        let newLn = document.querySelector('#newLn').value
        let newMail = document.querySelector('#newMail').value
        let newPw = document.querySelector('#newPw').value
        let newRoleID = document.querySelector('#newRoleId').value

            fetch(
                'https://sofin.wp-admin.it/public/api/v1/user/' + utente.id, 
                {
                    method: 'PUT', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name : newNome,
                        lastname : newLn,
                        email : newMail,
                        role_id : newRoleID,
                        password : newPw
                    }),
                }
            )
            .then(response => response.json())
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Ottimo!',
                    text: 'Utente' + utente.id+' Aggiornato!',
                })
                setTimeout(function(){
                    window.location.href = 'basic-table.html'
                },2000)
            })


        })


})