let titolo = document.getElementById('titolo').innerHTML = "Esercitazioni con i metodi di utilizzo dell'array"

document.getElementById('titolo').innerHTML = (titolo.toUpperCase())

console.log(titolo.length)

var primaP =  titolo.substring(0,13)
console.log(primaP)

ricerca = titolo.search('array')
console.log(ricerca)

var secondaP =  titolo.substring(44)
console.log(secondaP)
document.getElementById('nunzio').innerHTML = primaP.concat("  " + secondaP).toUpperCase()

var persone = [
    'Federico',
    'Erica',
    'Elisabetta',
    'Sergiu'
]

console.log(persone[2])

var numeri = [
    3,
    6,
    7,
    9
]

var studente = {
    matricola: 765,
    nome: "mario",
    corso: "informatica"
}

console.log(studente.nome)

function mostra()
{
document.getElementById('nunzia').innerHTML = "I ragazzi del gruppo sono: " + persone[0] + " e " + persone[3]
}

mostra()


function conto()
{
    document.getElementById('conti').innerHTML = numeri[0] * numeri[3]
}

conto()


console.log(persone.length)


var aggEl = numeri.push(5)
console.log(aggEl)
console.log(numeri)


var rimEl = numeri.pop()
console.log(rimEl)
console.log(numeri)


var shift = persone.shift()
console.log(shift)
console.log(persone)


var unShift = persone.unshift('Mario')
console.log(unShift)
console.log(persone)

