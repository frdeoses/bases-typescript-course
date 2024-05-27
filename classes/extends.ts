(() => {
  class Avenger {
    constructor(public name: string, public realname: string) {
      // console.log('Constructor Avengr llamado!!!');
    }

    protected getFullName() {
      return `${this.name} ${this.realname} `;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realname: string, public isMutan: boolean) {
      super(name, realname);
      // console.log('Constructor Xmeen llamado!!!');
    }

    get fullName() {
      // console.log(super.getFullName());
      return `${this.name} - ${this.realname} `;
    }

    set fullName(name: string) {
      this.name = name;
    }
  }

  const wolverie = new Xmen('Wolvewrine', 'Logan', true);

  // console.log(wolverie);
  // wolverie.getFullNameDesdeXmen();

  // console.log(wolverie.fullName);

  wolverie.fullName = 'Fran';

  // console.log(wolverie.fullName);
})();
