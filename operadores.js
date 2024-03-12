
let tipoClima = "lluvioso"

// si, llevalo
// no, no hace falta

// condicion ? lo que quiero cuando se cumpla : lo quiero cuando no se cumpla
const llevoParaguas = clima => clima === "lluvioso" ? "si, llevalo" : "no, no hace falta"

console.log( llevoParaguas(tipoClima) )

// or || ---> va dar true cuando por lo menos una condicion sea true
// and && ---> va dar true cuando todas las condiciones evaluen como true


console.log( 2 > 1 || false || false || false || 10 < 2 )

console.log( 2 > 1 && true && true && true && 10 < 12 )


// truthy --> "hola" - 12 - [] - {}
// falsy --> "" - 0 - undefined - null - NaN

// AND ---> devuelve el ultimo truthy o el primer falsy 
console.log( "hola" && true && undefined && {} && "chau" && 0 && null)

// OR ---> devuelve el ultimo fasly o el primer truthy 
console.log( 0 || ""|| null || "hola" || "chau"|| undefined )

const llevoParaguas2  = (clima)=> {
    return clima === "lluvioso" && "si, llevalo" 
}