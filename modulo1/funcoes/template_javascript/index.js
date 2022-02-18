// EXERCICIOS DE INTERPRETACAO DE CODIGO

/* 1. a) 10
         50
      b) NuN ou Erro
   2. a) Essa funcao primeiro transforma todas as letras em minusculas e apos isso verifica se no texto inserido acha a palavra "cenoura".
         Uma vez feito isso informa o resultado, se for true, quer dizer que todas as condicoes sao cumplidas, e false, no caso que nao foram. 
         é util pra saber, por exemplo se o usuario coloco a informacao que nos precisamos. 
      b) i. true
         ii. true
         iii. true


// EJERCICIOS DE ESCRITA DE CODIGO 

// 1. A)
/*

function mensagem(){
 let nome = "Lucía"
 let idade = 26
 let cidade = "Florianopolis"
 let sereiEstudante = "sou estudante"
 console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${sereiEstudante}`)
}
 console.log(mensagem())

 
 // B) 

 function formaFrase(nome, idade, cidade, profissao){
  const frase = "Eu sou " + nome + ", tenho " + idade + " anos, " + "moro em " + cidade + " e sou " + profissao
   console.log(frase)
 }
 formaFrase("Luciana", 28, "Buenos Aires", "cientista")

*/

// 2. A) 
/*

const soma = function(numeroUm, numeroDois){
const total = numeroUm + numeroDois
return total
}

console.log(soma(56, 85))

// B)

const maiorMenor = (numeroUm, numeroDois) => {
 const resultado = numeroUm >= numeroDois
 return resultado
}

console.log(maiorMenor(3, 5))

// C)

function parImpar(numero){
    const resultado = numero % 2 === 0
    return resultado
}

console.log(parImpar(6))

// D)

const informacao = function(string) {
    const frase = string
     return frase.length + frase.toUpperCase()
    
}

console.log(informacao(" Hola, como estas? "))
*/


// 3. 
/*

const numeros = (a, b) => {
    return "Números inseridos: " + a + " e " + b
}

const soma = (a, b) => {
    const resultado = a + b
    return "Soma: " + resultado
}


const substracao = (a, b) => {
    const resultado = a - b
    return "Diferenca: " + resultado
}

const multiplicacao = (a, b) => {
    const resultado = a * b
    return "Multiplicacao: " + resultado
}

const divisao = (a, b) => {
    const resultado = a / b
    return "Divisao: " + resultado
}

let a = Number(prompt("Digite um numero"))
let b = Number(prompt("Digite outro numero"))

console.log(numeros(a,b))
console.log(soma(a,b))
console.log(substracao(a,b))
console.log(multiplicacao(a,b))
console.log(divisao(a,b))

*/

// DESAFIOS


const idade = (anos) => {
    return anos
}
console.log(idade(3))

//Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. 
//Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

const tempo = (primeirTempo, segundoTempo) => primeirTempo + segundoTempo
console.log(tempo(3,9))

// const tempo = (primeirTempo, segundoTempo) => {
//     this.numero = primeirTempo
//     this.outroNumero = segundoTempo
//     console.log(numero + outroNumero)
// }

// const novo = new tempo(5,7)
// console.log(idade == tempo)
//DESISTO DESTE EXERCICIO E MUITO DIFICIL. NAO CONSIGO ACHAR RESPOSTA certa


// 2. 

function teorema(a, b){
    Math.hypot(a , b)
    const resultado = a + b
    return resultado 
}
  console.log(teorema(85,96))


