const prompt = require('prompt-sync')();
let entrada;

do {
  entrada = Number(prompt("Digite um número entre 1 e 10: "));
} while (entrada < 1 || entrada > 10);

console.log("Número válido:", entrada);