
// ANCHOR ---> copia por valor vs copia por referencia 

let a = 1
let b = a

console.log( a )
console.log( b )

a = 5 

console.log( a )
console.log( b )

let persona = {
    nombre : "maria",
    edad: 22
}

let copiaPersona = persona

copiaPersona.nombre = "carmen"

console.log(persona)
console.log(copiaPersona)


let numeros = [1, 5, 2]
let copiaNumeros = numeros

copiaNumeros.push(12)

console.log( numeros )
console.log( copiaNumeros )

let personaNueva = {
    nombre : "maria",
    edad: 22
}

let copiaPersonaNueva = { ...personaNueva }

console.log(personaNueva)
console.log(copiaPersonaNueva)

personaNueva.nombre = "juan"

copiaPersonaNueva.edad = 35

console.log(personaNueva)
console.log(copiaPersonaNueva)

let numeritos  = [ 1, 6, 2, 14 ]
let copiaNumeritos = [...numeritos]

numeritos.push(15)
copiaNumeritos.push(22)

console.log(numeritos)
console.log(copiaNumeritos)