export type deposit = { value: number; date: string; description: string };

export type payAccount = {
  expirationDate: string;
  accountDescription: string;
  value: number;
  holderCpf: number;
  id: number
};

export type statement = {
  deposit: deposit[];
  payAccount: payAccount[];
};

type data = {
  name: string;
  CPF: number;
  birthDate: string;
  balance: number;
  statement: statement[];
};

export const users: data[] = [
  {
    name: "Lucía",
    CPF: 256395478,
    birthDate: "30/09/1995",
    balance: 1500,
    statement: [
      {
        deposit: [
          {
            value: 200,
            date: " 25/08/2022",
            description: "Depósito de dinheiro",
          },
          {
            value: 50,
            date: "24/08/2022",
            description: "Depósito de dinheiro",
          },
        ],
        payAccount: [
          {
            expirationDate: "02/09/2022",
            accountDescription: "Pagar",
            value: 600,
            holderCpf: 236589,
            id: 1
          },
          {
            expirationDate: "03/08/2022",
            accountDescription: "Pagar",
            value: 150,
            holderCpf: 458712,
           id: 2
          }
        ],
      },
    ],
  },
  {
    name: "Gabi",
    CPF: 5263598785,
    birthDate: "01/12/1970",
    balance: 1000,
    statement: [
      {
        deposit: [],
        payAccount: [],
      },
    ],
  },
];



/* 
if (!expirationDate) {
  const dateNow = Date.now();
  const date = new Date(dateNow);
  users.map((u) => {
    u.statement.map((u) => {
      u.payAccount.map((u) => {
        u.expirationDate = date.toLocaleDateString();
      });
    });
  });
} */