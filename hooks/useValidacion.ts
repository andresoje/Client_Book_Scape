import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface ValidacionErrors {
    nombre?: string;
    email?: string;
    password?: string;
    passwordRepetida?: string;
}

interface UseValidacionProps<T> {
  stateInicial: T;
  validar: (valores: T) => ValidacionErrors;
  fn: () => void;
}

const useValidacion = <T>({
  stateInicial,
  validar,
  fn,
}: UseValidacionProps<T>) => {
  const [valores, guardarValores] = useState<T>(stateInicial);
  const [errores, guardarErrores] = useState<ValidacionErrors>({});
  const [submitForm, guardarSubmitForm] = useState<boolean>(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;

      if (noErrores) {
        fn(); // Fn = Función que se ejecuta en el componente
      }
      guardarSubmitForm(false);
    }
  }, [errores]);

  // Función que se ejecuta conforme el usuario escribe algo
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    guardarValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  // Función que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    guardarErrores(erroresValidacion);
    guardarSubmitForm(true);
  };

  // cuando se realiza el evento de blur
  const handleBlur = () => {
    const erroresValidacion = validar(valores);
    guardarErrores(erroresValidacion);
  };

  return {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur,
  };
};

export default useValidacion;
