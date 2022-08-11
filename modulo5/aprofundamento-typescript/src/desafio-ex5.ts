type dados = {
  nome: string;
  idade: number;
  dataDaConsulta: string;
};

const pacientes = [
  { nome: "Lucia", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Xavier", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Ana", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" },
];

function ordemAlfabetica(array: dados[]) {
  const pacientesOrdenados = array.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1;
    } else if (a.nome > b.nome) {
      return 1;
    } else {
      return 0;
    }
  });

  return pacientesOrdenados;
}

console.log(ordemAlfabetica(pacientes));
