(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }
  // interface Human {
  //   age: number;
  // }

  let addNumbersFunction: addTwoNumbers;

  addNumbersFunction = (a: number, b: number) => {
    return 10;
  };
})();
