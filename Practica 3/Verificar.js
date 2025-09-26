const verificarUsuario = (usuario) => {
  return new Promise((resolve, reject) => {
    const esAdmin = (usuario === "admin");

    if (esAdmin) {
      resolve(" Acceso concedido");
    } else {
      reject(" Acceso denegado");
    }
  });
};

const usuarioIngresado = "admin";

verificarUsuario(usuarioIngresado)
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error));
