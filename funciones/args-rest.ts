(() => {
  const fullName = (firstname: string, ...rest: string[]): string => {
    return `${firstname} ${rest.join(' ')}`;
  };

  const superman = fullName('Clark', 'Josep', 'Kent', 'Herrera');

  console.log({ superman });
})();
