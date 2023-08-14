interface ValidarCrearCuentaErrors {
    email?: string;
    password?: string;
  }
  
  export default function validarIniciarSesion(valores: {
    email: string;
    password: string;
  }): ValidarCrearCuentaErrors {
    let errores: ValidarCrearCuentaErrors = {};
  

    // validar el email
    if (!valores.email) {
      errores.email = "Escriba su correo electrónico";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
      errores.email = "Email no válido";
    }
  
    // validar el password
    if (!valores.password) {
      errores.password = "El password es obligatorio";
    } else if (valores.password.length < 6) {
      errores.password = "Se requiere un mínimo de 6 caracteres";
    }
  
    return errores;
  }
  