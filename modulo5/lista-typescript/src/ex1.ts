function exercicio1(nome:string, data:string): string{
const date = data.split("/")
return `Olá me chamo ${nome}, nasci no dia ${date[0]} do mês de ${date[1]} do ano de ${date[2]}`
}

console.log(exercicio1("lucia", "30/09/1995"))