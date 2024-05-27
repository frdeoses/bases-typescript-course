(() => {
  class Avenger {
    // private name: string;
    // public team: string;

    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }

    constructor(private name: string, private team: string, avgAge: number) {
      Avenger.avgAge = avgAge;
    }

    bio() {
      return ` ${this.name} (${this.team}) `;
    }
  }

  const antMan: Avenger = new Avenger('Antman', 'Capitan', 50);
  // console.log(antMan);
  // console.log(antMan.bio());
  // console.log(Avenger.getAvgAge());
  //   console.log(Avenger.avgAge);
})();
