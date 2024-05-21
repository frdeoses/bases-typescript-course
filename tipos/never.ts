(() => {
  // Funcion que va a terminar con un error en caso de ser never
  const error = (msj: string): never | number => {
    if (false) {
      throw new Error(msj);
    }

    return 1;
  };

  error('Auxilio');
  console.log('Hola world');
})();
