// como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// colocando o comando process.argv[i]

const nome = process.argv[2]
const idade = Number(process.argv[3])
const seteAnos = idade + 7

if (nome, idade){
    console.log(`\u001b[34m Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${seteAnos}`)
}else{
    console.log("\u001b[31m Esperava 2 parâmetros só recebi um.")
}
// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
//console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${seteAnos}`)
