// EXERCICIOS DE INTERPRETACAO DE CODIGO

// 1. a. undefined
//    b. null
//    c. 11
//    d. 3
//    e. (11)  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//    f. 9
//NAO ENTENDI A LOGICA DO E.

// 2. SUBI NUM ONIBUS EM MIRROCOS 27

// EXERCICIOS DE ESCRITA DE CODIGO

// 1) 


const nome = prompt("Como é seu nome?")
const email = prompt("Qual é seu email?")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)


// 2)

const comidas = [ "nhoques" , "canelones" , "pizza" , "tarta de zapallo" , "fiambre primavera"]

//a. 

console.log(comidas)

// b.

console.log("Essas sao minhas comidas preferidas:")
console.log( comidas[0] )
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

// c.

const comidaUsuario = prompt("Qual é sua comida preferida?")
comidas[1] = comidaUsuario
console.log(comidas)


// 3)

const listaDeTarefas = []

const PrimeiraTarefa = prompt("O que voce faz primeiro quando chega no trabalho?")
const SegundaTarefa = prompt("E como segundo passo?")
const TerceiraTarefa = prompt("E por ultimo?")

listaDeTarefas[0] = PrimeiraTarefa
listaDeTarefas[1] = SegundaTarefa
listaDeTarefas[2] = TerceiraTarefa

console.log(listaDeTarefas)

const indice = prompt("Digite o numero da tarefa realizada")
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)

//DESAFIOS

// 1)

const frase = "Que hermoso dia de sol"
const fraseA = frase.split(" ")
console.log(fraseA)

// 2)

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
//const aba = frutas.indexOf("Abacaxi")
//console.log( aba , frutas.length)
console.log(frutas.indexOf("Abacaxi") , frutas.length)