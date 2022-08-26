export type statement = { value: number; date: string; description: string };

type data = {
  name: string;
  CPF: number;
  birthDate:string
  balance: number;
  statement: statement[];
};

export const users: data[] = [
  {
    name: "Lucía",
    CPF: 256395478,
    birthDate: "30/09/1995",
    balance: 500,
    statement: [
      {
        value: 200,
        date:" 25/08/2022",
        description: "Padaria",
      },
      {
        value: 50,
        date: "24/08/2022",
        description: "Lanchonete",
      },
    ],
  },
];
