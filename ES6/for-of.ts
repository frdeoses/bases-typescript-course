(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: 'ironman',
    weapon: 'Armorsuit',
  };

  const capitanAmereica: Avenger = {
    name: 'Capitan America',
    weapon: 'Shield',
  };

  const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolher',
  };

  const avengers = [ironman, capitanAmereica, thor];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }
})();
