(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: 'Fran',
    age: 24,
    powers: [1, 2],
  };

  let superman: Hero = {
    name: 'Clark kent',
    age: 24,
    powers: [1],
    getName() {
      return this.name;
    },
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
