//Um parente seu decidiu abrir um restaurante; e, recentemente,
//ele descobriu que você está fazendo um curso de programação. Além de pedir
//para você arrumar alguns computadores antigos dele, configurar a internet e
//outros pedidos clássicos, ele prometeu te pagar caso você implementasse um sistema para o restaurante.
//Os pratos deste restaurante possuem  um nome, um custo, um valor de venda, e um array de ingredientes.
//Cada uma das vendas deve conter o nome do prato e o nome do cliente que realizou a compra.

type prod = {
  nome: string;
  custo: number;
  valorVenda: number;
  ingredientes: string[];
};

const arrayProd: prod[] = [
  {
    nome: "Papa",
    custo: 0,
    valorVenda: 0,
    ingredientes: [],
  },
];

const cadastroProd = (novo: prod) => {
  arrayProd.push(novo);
  return arrayProd;

  /*   const novoProduto = novo
  const novoArray = [...arrayProd, novoProduto] */
};

cadastroProd({
  nome: "fideo",
  custo: 25,
  valorVenda: 30,
  ingredientes: ["molho", "pan"],
});

console.log(arrayProd);
