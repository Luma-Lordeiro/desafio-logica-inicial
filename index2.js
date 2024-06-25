///Escrevendo as classes de um Jogo
///**O Que deve ser utilizado**
///- Variáveis
///- Operadores
///- Laços de repetição
///- Estruturas de decisões
///- Funções
///- Classes e Objetos

///## Objetivo:
///Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
///- nome
///- idade
///- tipo (ex: guerreiro, mago, monge, ninja )

///além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

///- exibir a mensagem: "o {tipo} atacou usando {ataque}")
///- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
///- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

///se mago -> no ataque exibir (usou magia)
///se guerreiro -> no ataque exibir (usou espada)
///se monge -> no ataque exibir (usou artes marciais)
///se ninja -> no ataque exibir (usou shuriken)

///## Saída

///Ao final deve se exibir uma mensagem:
///- "o {tipo} atacou usando {ataque}"
  ///ex: mago atacou usando magia
  ///guerreiro atacou usando espada

  // Utilizado para entrada de dados
class Hero {
 
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipos = ["mago", "guerreiro", "monge", "ninja"];
        this.ataques = ["magia", "espada", "artes marciais", "shuriken"]
        this.tipo = tipo % this.tipos.length;
    }
    getTipo() {
        return this.tipos[this.tipo];
    }
    getAtaque() {
        return this.ataques[this.tipo];
    }
    ataque() {
        console.log(`O ${this.getTipo()} atacou usando ${this.getAtaque()}`);
    }
    info() {
        console.log(`Nome: ${this.nome}, idade: ${this.idade}, Tipo: ${this.getTipo()}`);
    }
}
let nome = input.question('Informe do heroi: ');
let idade = input.questionInt('Informe a idade do heroi: ');
let tipo = input.question('Informe o tipo heroi [mago, guerreiro, monge ou ninja]: ');

let heroi = new Heroi(nome, idade, tipo.toLowerCase()); 
heroi.atacar(); 