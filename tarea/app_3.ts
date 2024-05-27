// Crear interfaces
interface Car {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Car): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
};

const batimovil: Car = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log('...... gogogo!!!');
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface EstadoAnímico {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: EstadoAnímico = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: EstadoAnímico): void => {
  if (guason.reir) {
    console.log('JAJAJAJA');
  }
};

// Cree una interfaz para la siguiente funcion
interface GoticCity {
  (ciudadanos: string[]): number;
}

const ciudadGotica: GoticCity = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
    */

interface Properties {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void; // en consola una breve descripcion.
}

class Persona implements Properties {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void {
    console.log('Hola world !!');
  }
}
