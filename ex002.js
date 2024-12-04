// Exercício 2
const animais = ["Gato", "Cachorro", "Pássaro"];
animais.push("Elefante");
animais.splice(animais.indexOf("Gato"), 1);
console.log("Lista de animais atualizada:", animais);