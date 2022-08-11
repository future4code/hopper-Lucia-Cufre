type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

//b. Criando a pasta tsconfig e o script no package.json "ex4": "tsc && node ./build/ex4.js", executando o mesmo no terminal (npm run ex4).
//c. é necessario activar a rota "rootDir": src na pasta tsconfig
//d. Podemos rodar o comando tsc para transpilar vários arquivos ao colocar seus nomes separados por um espaço
// agora sei que nao é necessario fazer os passos do ponto b para transpilar os arquivos ts, pode ser feito diretamente com o comando tsc e o nome do arquivo no terminal.
