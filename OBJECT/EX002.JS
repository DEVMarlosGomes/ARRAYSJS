const pessoa = {
    nome: "João",
    idade: 30,
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP"
    }
  };
  
  // Acessando propriedades do objeto 'endereco'
  console.log(pessoa.nome);          // João
  console.log(pessoa.endereco.rua);  // Rua das Flores
  console.log(pessoa.endereco.cidade); // São Paulo