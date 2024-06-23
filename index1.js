///Calculadora de partidas Rankeadas
///O Que deve ser utilizado

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções

//## Objetivo:

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//## Saída

let vitorias = 30;
let derrotas= 5;

function calcularNivel(vitorias, derrotas) {
    const saldoRank = vitorias - derrotas;
  
    let nivel;
  
    if (saldoRank < 10) {
      nivel = "Ferro";
    } else if (saldoRank >= 10 && saldoRank <= 20) {
      nivel = "Bronze";
    } else if (saldoRank >= 21 && saldoRank <= 50) {
      nivel = "Prata";
    } else if (saldoRank >= 51 && saldoRank <= 80) {
      nivel = "Ouro";
    } else if (saldoRank >= 81 && saldoRank <= 90) {
      nivel = "Diamante";
    } else if (saldoRank >= 91 && saldoRank <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }

    
  // Retorna o resultado
  return `O Herói tem um saldo de ${saldoRank} vitórias e está no nível de ${nivel}`;
}

const resultado = calcularNivel(vitorias, derrotas);

console.log(resultado);