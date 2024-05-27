(() => {
  abstract class Mutante {
    constructor(public name: string, public realname: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return 'Mundo salvado';
    }
  }
  class Villain extends Mutante {
    conquistarMundo() {
      return 'Mundo conquistado';
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan');
  const magneto = new Villain('Magneto', 'Magnus');

  // console.log(wolverine.salvarMundo());
  // console.log(magneto);

  const printName = (character: Mutante) => {
    console.log(character.realname);
  };

  printName(wolverine);
})();
