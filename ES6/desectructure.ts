(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activos: boolean;
    poder: number;
  };
  const avengers: Avengers = {
    nick: 'Samuel L. jackson',
    ironman: 'Robert jr ',
    vision: 'Paul',
    activos: true,
    poder: 1555,
  };

  console.log(avengers);

  const printAvenger = ({ ironman, ...resto }: Avengers) => {
    console.log(ironman);
    console.log(resto);
  };

  printAvenger(avengers);

  //   const { poder, vision } = avengers;

  const avengersArr: [string, boolean, number] = [
    'Capitan America',
    true,
    150.15,
  ];
  const [capi, ironmann] = avengersArr;

  console.log({ ironmann, capi });
})();
