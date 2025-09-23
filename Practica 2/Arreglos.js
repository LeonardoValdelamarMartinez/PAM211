const productos =[
    {nombre : "Laptop", precio: 12000},
    {nombre : "Mouse", precio: 250},
    {nombre : "Teclado", precio: 750},
    {nombre : "Monitor", precio: 3000} 
];

const mayor1000 = productos.filter(producto => producto.precio > 1000);
const nombres = productos.map(producto => producto.nombre);

mayor1000.forEach(producto => {
    console.log("Producto: " + producto.nombre + " precio: " + producto.precio);
});

console.log(nombres);


