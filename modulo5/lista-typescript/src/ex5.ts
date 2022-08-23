//este array como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”.

type array = {
  name: string;
  email: string;
  role: string;
};

function exercicio5(array: array[]):string[] {
  const newArray = array.filter((usuario) =>
   usuario.role === "admin").map((usuario) => usuario.email);
  return newArray
}

const usuarios: array[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

console.log(exercicio5(usuarios))
