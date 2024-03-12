

let persona = {
    nombre: "pepe",
    edad: 22
}

let laPropiedad = "edad"


// console.log( persona.laPropiedad )

// console.log( persona[laPropiedad] )


const mostrarPropiedad = ( prop )=>{
    return persona[prop]
}

console.log(mostrarPropiedad("nombre"))
console.log(mostrarPropiedad("edad"))


let mascota = {
    nombre: "Jack",
    raza: "callejero",
    color: "blanco"
}
let mascota2 = {
    nombre: "hola",
    raza: "callejero",
    color: "blanco"
}
let mascota3 = {
    nombre: "chau",
    raza: "callejero",
    color: "blanco"
}

// es importante el nombre pero no importa el orden 
let {nombre: nombre1} = mascota
let {nombre: nombre2} = mascota2
let {nombre: nombre3} = mascota3

console.log( nombre1)
console.log( nombre2 )
console.log( nombre3 )


{/* <h1>mascota.nombre</h1>
<h1>mascota.edad</h1>
<h1>mascota.color</h1> */}


// importa el orden, pero no el nombre 
let personas = [ "maria", "juan", "pepito" ]

let [ , , x3 ] = personas


console.log( x3 )

