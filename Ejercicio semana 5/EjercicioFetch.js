// Ejercicio: Realizar un programa que pida al usuario un continente, busque los paises en una api y luego localmente filtre los paises del continente ingresado por el usuario.


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Continentes = [
  "Europe",
  "Americas",
  "Africa",
  "Oceania",
  "Asia",
  "Antarctic",
];
console.log("Continentes disponibles: ");
Continentes.forEach((element) => {
  console.log(element);
});

rl.question("Ingrese el continente: ", (continente) => {
  rl.close();

  console.log("Cargando todos los paises...");
  let paises;
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      paises = data;

      // 3. Filtrar los países del continente ingresado
      let paisesContinente = paises.filter(
        (pais) => pais.region === continente
      );
      paisesContinente.forEach((element) => {
        console.log(element.name.official);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
