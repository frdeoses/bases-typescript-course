(() => {
  const fullName = (
    firstname: string,
    lastname?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstname} ${lastname || '-----'}`.toUpperCase();
    }
    return `${firstname} ${lastname || '-----'}`;
  };

  const name = fullName('tony', 'Stark', true);

  console.log({ name });
})();
