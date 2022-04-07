```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
    let vezes = arrayDeNumeros.filter(x => x === numeroEscolhido).length;
  if (vezes !== 0){
  return "O número " + numeroEscolhido + " aparece " + vezes + "x"
  } else {
    return "Número não encontrado"
  }
}
```