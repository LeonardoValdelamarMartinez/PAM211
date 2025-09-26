import { restar } from './util.js';

function operacion() 
{
  let resultado = restar(5, 3);
  console.log("Los números restados son 5 y 3 y el resultado es: " + resultado);

  resultado = restar(10, 4);
  console.log("Los números restados son 10 y 4 y el resultado es: " + resultado);

  resultado = restar(200, 8);
  console.log("Los números restados son 200 y 8 y el resultado es: " + resultado);
}
operacion();
