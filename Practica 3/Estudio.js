function mostrarResultado(resultado) {
console.log("El resultado de la suma es: " + resultado);
  // tu código aquí
}

function sumar(a, b, callback) {
  // tu código aquí
  let resultado = a + b;
  callback(resultado);
}

sumar(5, 10, mostrarResultado);