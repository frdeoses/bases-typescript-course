(() => {
  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumeraciones
  // ? enum {acuaman = 0}
  enum Power {
    acuaman = 0,
    batman = 1,
    flash = 5,
    superman = 100,
  }
  const fuerzaFlash: Power = Power.flash;
  const fuerzaSuperman: Power = Power.flash;
  const fuerzaBatman: Power = Power.flash;
  const fuerzaAcuaman: Power = Power.flash;

  console.log('Enumeraciones: ' + Power.acuaman);
  console.log('Enumeraciones: ' + Power.superman);
  console.log('Enumeraciones: ' + Power.flash);
  console.log('Enumeraciones: ' + Power.batman);

  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada';
  }
  console.log('Funcion activar_batiseñal: ' + activar_batiseñal());

  function pedir_ayuda(): void {
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
