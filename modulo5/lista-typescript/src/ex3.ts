enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

function exercicio3(
  nome: string,
  ano: number,
  genero: GENERO,
  pontuação: number
) {
  type filme = {
    nome: string;
    anoLancamento: number;
    genero: GENERO;
    pontuação?: number;
  };

  if (pontuação !== null){
    return 
  }
  const pelicula: filme = {
    nome: nome,
    anoLancamento: ano,
    genero: genero,
    pontuação: pontuação
  }

  return pelicula
}

console.log(exercicio3("lala", 1995, GENERO.ACAO, 30 ))
