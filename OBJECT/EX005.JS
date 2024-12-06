// 
console.log(pessoa.nome); // "João"
console.log(pessoa.idade); // 30


console.log(pessoa["profissao"]); // "Desenvolvedor"

//pessoa.idade = 31;
console.log(pessoa); // 31
//

//const pessoa = {
    nome: "Ana",
    idade: 25
  };
  
  // Adicionando o objeto 'endereco' depois
  pessoa.endereco = {
    rua: "Avenida Central",
    numero: 456,
    cidade: "Rio de Janeiro",
    estado: "RJ"
  };
  
  console.log(pessoa.endereco.cidade); // Rio de Janeiro

  //const pessoas = [
  {
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira"
  },
  {
    nome: "Carlos",
    idade: 35,
    profissao: "Professor"
  },
];
pessoas.push({
  nome: "Pedro",
  idade: 40,
  profissao: "Médico"
});

console.log(pessoas[2].nome); // Pedro //