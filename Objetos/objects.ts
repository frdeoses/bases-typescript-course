(() => {
  let flash: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: 'Fran',
    age: 24,
    powers: ['Super velocidad', 'Viajar enn el tiempo'],
  };
  let superman: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: 'Clark kent',
    age: 24,
    powers: ['Super velocidad', 'Viajar enn el tiempo'],
  };

  //   flash = {
  //     name: 'Clark kennt',
  //     age: 60,
  //     powers: ['Super velocidad'],
  //     getName() {
  //       return this.name;
  //     },
  //   };

  console.log(flash);
})();
