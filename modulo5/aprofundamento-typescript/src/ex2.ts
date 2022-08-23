function obterEstatisticas(numeros: number[]) {
  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma = 0;

  for (let num of numeros) {
    soma += num;
  }

  type resultado = {
    maior: number;
    menor: number;
    media: number;
  };

  const estatisticas: resultado = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

//a. Entrada: numeros, saida: estatisticas

const amostraDeDados =  [2, 5, 4, 8, 9, 11, 12]

console.log(obterEstatisticas(amostraDeDados))
