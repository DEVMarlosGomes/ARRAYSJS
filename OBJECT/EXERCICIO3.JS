let pessoa = {
    nome: "Carlos",
    idade: 28,
    cumprimento: function() {
      return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
  };
  
  // Executando o método cumprimento e exibindo a mensagem
  console.log(pessoa.cumprimento());
  