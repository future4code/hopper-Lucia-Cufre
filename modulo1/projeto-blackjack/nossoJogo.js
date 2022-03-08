/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 

console.log("Boas vindas ao jogo de Black")

const carta = comprarCarta()
const carta1 = comprarCarta()
const pontosU = carta.valor + carta1.valor

const carta2 = comprarCarta()
const carta3 = comprarCarta()
const pontosC = carta2.valor + carta3.valor

if (confirm("Quer iniciar uma nova rodada?") == false) {
   console.log("O jogo acabou.")
} else {
   //iniciar nova rodada
   console.log(`Usuario - cartas: ${carta.texto} ${carta1.texto} pontuação ${pontosU} `)
   console.log(`Computador - cartas: ${carta2.texto} ${carta3.texto} pontuação ${pontosC} `)
}

if (pontosU > pontosC){
   console.log("O usuario ganhou!")
} else if (pontosC > pontosU){
   console.log("O computador ganhou!")
} else {
   console.log("É um empate!")
}

*/


