(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy el unico apocalipsis...');
      }

      return Apocalipsis.instance;
    }

    changeName(name: string) {
      this.name = name;
    }
  }

  // class Xmen extends Mutante {
  //   salvarMundo() {
  //     return 'Mundo salvado';
  //   }
  // }
  // class Villain extends Mutante {
  //   conquistarMundo() {
  //     return 'Mundo conquistado';
  //   }
  // }

  const apocalipsis = Apocalipsis.callApocalipsis();
  const apocalipsis1 = Apocalipsis.callApocalipsis();

  apocalipsis1.changeName('Fran');

  // console.log(apocalipsis, apocalipsis1);
  // console.log(magneto);

  // const printName = (character: Mutante) => {
  //   console.log(character.realname);
  // };

  // printName(wolverine);
})();
