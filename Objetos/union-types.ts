(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = 'Fran';

  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'Bruce',
    age: 43,
    powers: [1],
  };

  console.log(typeof myCustomVariable);
})();
