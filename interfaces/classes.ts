(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutanPower(id: number): string;
  }
  interface Human {
    age: number;
  }

  class Mutan implements Xmen, Human {
    age: number;
    name: string;
    realName: string;

    mutanPower(): string {
      return this.name + ' ' + this.realName;
    }
  }
})();
