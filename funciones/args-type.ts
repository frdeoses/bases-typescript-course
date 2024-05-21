(() => {
  const addNumber = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola ${name}`;
  const saveTheWorld = (): string => `EEl mundo esta salvado!!`;

  let myFunction: () => string;

  // myFunction = 10;
  // console.log({ myFunction });

  // myFunction = addNumber;
  // console.log(myFunction(1, 2));

  // myFunction = greet;
  // console.log(myFunction('Fran'));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
