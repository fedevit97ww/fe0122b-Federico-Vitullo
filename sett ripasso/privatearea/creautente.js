fetch('https://sofin.wp-admin.it/public/api/v1/user')
.then(response => response.json())
.then(() => {

    document.querySelector('#boh').addEventListener('click', function () {
            
        let newNome = document.querySelector('#newNome').value
        let newLn = document.querySelector('#newLn').value
        let newMail = document.querySelector('#newMail').value
        let newPw = document.querySelector('#newPw').value
        let newRoleID = document.querySelector('#newRoleId').value


        fetch(
            'https://sofin.wp-admin.it/public/api/v1/user', 
            {
                method: 'POST', 
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
                text: 'Hai creato '+ newNome,
            })
            setTimeout(function(){
                window.location.href = 'basic-table.html'
            },2000)
        })


    })


})