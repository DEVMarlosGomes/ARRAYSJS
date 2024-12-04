// npm install prompt-sync

const prompt = require('prompt-sync')();
let senha = "";

while (senha !== "1234") {
  senha = prompt("Digite a senha: ");
}
console.log("Senha correta!");