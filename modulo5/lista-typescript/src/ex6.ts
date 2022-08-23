type clientes = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

function exercicio6(array: clientes[]) {
  const novoArray = array.map((cliente) => {
    const initialValue = 0;
    const debito = cliente.debitos.reduce((a, b) => a + b, initialValue);
    const sub = cliente.saldoTotal - debito;
    const newSaldo = (cliente.saldoTotal = sub) 
    if (newSaldo < 0) {
      return cliente;
    }
  }).filter(Boolean);

  return novoArray
}

const clients: clientes[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

console.log(exercicio6(clients));
