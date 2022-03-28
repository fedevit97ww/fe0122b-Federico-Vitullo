document.querySelector('#add_btn').addEventListener('click',function()
{

    let valore = document.querySelector('#task_txt').value;
    if(!valore)
    return

   
    let li = document.createElement('li')
    li.className = 'modLi'  
    li.innerText=valore
   
    document.querySelector('#tasks_list_html').append(li)
    document.querySelector('#task_txt').value = '';

    li.addEventListener('click',function(){
        li.remove()
        elimina(valore)
    })
    salva(valore)


})


function salva(testo){

    let elementiSalvati = localStorage.getItem('tasks_list_html')
   
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
   
    db.push(testo)
  
    localStorage.setItem('tasks_list_html',JSON.stringify(db))

}




function creaHtml(){
    let elementiSalvati = localStorage.getItem('tasks_list_html')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)

    db.forEach(function(elemento){
    
    let li = document.createElement('li')
    li.className = 'modLi'  
    li.innerText = elemento
    document.querySelector('#tasks_list_html').append(li)

    li.addEventListener('click',function(){
        li.remove()
        elimina(elemento)
        })

    })
}

creaHtml()


function elimina(elemento){
    let elementiSalvati = localStorage.getItem('tasks_list_html')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
    let indice = db.indexOf(elemento)
    db.splice(indice, 1)
    localStorage.setItem('tasks_list_html', JSON.stringify(db))


}
       
