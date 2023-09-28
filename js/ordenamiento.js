//Ejercicio1
function ordenar(arr) {
  const ordenamiento = arr.sort((a, b) => b - a);
  return ordenamiento;
}

const arr = [9, 3, 1, 6, 5, 88, -1, 2, 7];
const ordenamientoDes = ordenar(arr);
console.log(
  `El ordenamiento de manera descendente queda de la sig, manera : ${ordenamientoDes}`
);

//Ejercicio2
function ordenarLista() {
  const ordenarAsc = ["b", "h", "w", "e", "a"];
  let ordenamientoCatacteres = ordenarAsc.sort();
  return ordenamientoCatacteres;
}
const catacteresOrdenados = ordenarLista();
console.log(
  `Los caracteres se estan ordenando de manera ascendente de la sig. manera ${catacteresOrdenados}`
);

//Ejercicio3
class Alumno {
  constructor(nombre, calificacion) {
    this.nombre = nombre;
    this.calificacion = calificacion;
  }

  obtenerPromedio(calificacion) {
    const promedio =
      this.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0) /
      this.calificaciones.length;
    return promedio;
  }
}

class Salon {
  constructor() {
    this.alumnos = [];
  }

  agregarAlumno(alumno) {
    this.alumnos.push(alumno);
  }

  ordenarPorPromedio() {
    this.alumnos.sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
  }
}

const alumno1 = new Alumno("Carlos", [90, 85, 78, 92, 88]);
const alumno2 = new Alumno("Jose", [95, 88, 76, 89, 100]);
const alumno3 = new Alumno("Melina", [88, 90, 82, 87, 78]);

const salon = new Salon();
salon.agregarAlumno(alumno1);
salon.agregarAlumno(alumno2);
salon.agregarAlumno(alumno3);

salon.ordenarPorPromedio();

console.log("Alumnos ordenados por promedio:");
console.log(salon.alumnos);

//Ejercicio5
function coordenadas() {
  const coordenadasX = [
    [7, 3],
    [2, 2],
    [1, 0],
    [4, 3],
  ];
  let cercaCoordenadas = coordenadasX.sort();
  return cercaCoordenadas;
}

const ordenadasCoord = coordenadas();
console.log(`Las coordenadas mas cerca son : ${ordenadasCoord}`);
