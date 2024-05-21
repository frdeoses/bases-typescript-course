(() => {
  const fullName = (firstname: string, lastname?: string): String => {
    return `${firstname} ${lastname || '-----'}`;
  };

  const name = fullName('tony');

  console.log({ name });
})();
