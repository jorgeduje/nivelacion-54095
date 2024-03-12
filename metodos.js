let productos = [
  {
    id: 1,
    nombre: "Camisa",
    precio: 25.99,
    categoria: "Ropa",
    disponible: true,
  },
  {
    id: 2,
    nombre: "Pantalón",
    precio: 39.99,
    categoria: "Ropa",
    disponible: false,
  },
  {
    id: 3,
    nombre: "Zapatos x4z",
    precio: 49.99,
    categoria: "Calzado",
    disponible: true,
  },
  {
    id: 4,
    nombre: "Teléfono móvil",
    precio: 599.99,
    categoria: "Electrónica",
    disponible: true,
  },
];

// map ---> recorre el arreglo y devuelve un nuevo array y siempre de la misma longitud
// que el original

let nuevoArray = productos.map((producto) => {
  return { nombre: producto.nombre, precio: producto.precio };
}); // []

console.log(nuevoArray);

// FILTER ---> recorre el arreglo y devuelve un nuevo array pero no necesariamente
// de la misma longitud

let arrayFiltrado = productos.filter((producto) => {
  return producto.categoria === "Ropa";
}); // [ ]

console.log(arrayFiltrado);

// FIND ---> recorre el arreglo y devuelve el primer elemento encontrado o undefined si no lo encuentra

let productoEncontrado = productos.find( (producto)=> {
    return producto.nombre === "Zapatos x4z"
}) //  {} 

console.log(productoEncontrado)