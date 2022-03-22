// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  array
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  array
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array
  return array.sort(function compararNumeros(a, b) {
    return a - b
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  array
  let pares = function (numero) {
    return numero % 2 == 0
  }
  let numeroPar = array.filter(pares)

  return numeroPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numerosElevados = []

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0)
      numerosElevados.push(Math.pow(array[i], 2))
  }
  return numerosElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  array
  let maior = -Infinity
  for (let numero of array) {
    if (numero > maior) {
      maior = numero
    }
  }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maior
  let menor
  let divisivel
  if (num1 > num2) {
    maior = num1
  } else {
    maior = num2
  }
  if (num1 < num2) {
    menor = num1
  } else {
    menor = num2
  }
  if (maior % menor === 0) {
    divisivel = true
  } else {
    divisivel = false
  }
  let diferenca = maior - menor
  const objeto = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: divisivel,
    diferenca: diferenca
  }
  return objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = []
  for (let i = 0; numerosPares.length < n; i += 2) {
    numerosPares.push(i)
  }
  return numerosPares

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA == ladoB && ladoB == ladoC) {
    return "Equilátero"
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    return "Isósceles"
  } else {
    return "Escaleno"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayNovo = []
  const arrayOrdenado = retornaArrayOrdenado(array)
  arrayNovo.push(arrayOrdenado[arrayOrdenado.length - 2])
  arrayNovo.push(arrayOrdenado[1])
  return arrayNovo
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let objeto = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  filme = objeto
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  return {
    ...pessoa,
    nome: "ANÔNIMO"
  }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = []
  for (pessoa of pessoas) {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
      pessoasAutorizadas.push(pessoa)
    }
  }
  return pessoasAutorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = []
  for (pessoa of pessoas) {
    if (pessoa.altura <= 1.4 || pessoa.idade <= 14 || pessoa.idade >= 60) {
      pessoasNaoAutorizadas.push(pessoa)
    }
  }
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  contas.map(function (elemento, index) {
    let totalCompras = contas[index].compras.reduce(function (valorInicial, valorAtual) {
      return valorInicial + valorAtual
    }, 0)
    contas[index].saldoTotal = contas[index].saldoTotal - totalCompras
    contas[index].compras = []
  })
  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
  
    return 0;
  });
  return consultas

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  
  consultas.sort((a, b) =>
  {
    a = a.dataDaConsulta.split("/").reverse().join()
    b = b.dataDaConsulta.split("/").reverse().join()
    return a.localeCompare(b)
  })

  return consultas
}