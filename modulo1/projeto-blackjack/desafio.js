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
 */

const saludo = confirm("Bem-vinde ao nosso jogo!" + "\n" + "Quer iniciar uma nova rodada?")
if (saludo == false) {
   alert("O jogo acabou.")
} else {

   const carta = comprarCarta()
   const carta1 = comprarCarta()
   const carta2 = comprarCarta()
   const carta3 = comprarCarta()

   const puntosC = carta2.valor + carta3.valor
   const puntosU = carta.valor + carta1.valor

   const arrayU = [carta.texto, carta1.texto]
   const arrayC = [carta2.texto, carta3.texto]
   
  
   if (arrayU == "A" || arrayC == "A") {
      arrayU = comprarCarta()
      arrayC = comprarCarta()
   }
  
   let pergunta = confirm(`Suas cartas são ${arrayU}. A carta revelada do computador é ${arrayC[0]}.` + "\n" + "Deseja comprar mais uma carta?")
   
   const cartaNova = comprarCarta()
   const novoArrayU = arrayU.push(cartaNova.texto)
   const somaU = Number(puntosU + cartaNova.valor)




   

//  while(somaU <= 21){
//    confirm(`Suas cartas são ${novoArrayU}. A carta revelada do computador é ${arrayC[0]}.` + "\n" + "Deseja comprar mais uma carta?")
// somaU += cartaNova
//  }

   // if(pergunta === true && somaU<21){
   //    confirm(`Suas cartas são ${novoArrayU}. A carta revelada do computador é ${arrayC[0]}.` + "\n" + "Deseja comprar mais uma carta?")

   // }





    



//   const novosPontos =  puntosU + comprarCarta()
//   const resultado = puntosU < puntosC
//   if (pergunta == true && puntosU <21){
//      puntosU = novosPontos
//       arrayU.push(comprarCarta().texto)
//    confirm(`Suas cartas são ${arrayU}. A carta revelada do computador é ${arrayC[0]}.` + "\n" + "Deseja comprar mais uma carta?")
//   }else{
//      switch(resultado){
//         case false:
//          alert(`Suas cartas são ${arrayU} . Sua pontuação ${puntosU}.` + "\n" +
//                `As cartas do computador são ${arrayC} . A pontuação do computador é ${puntosC}.` + "\n" +
//                `O Usuario ganhou!`)
//                break
//                default:
//                   alert(`Suas cartas são ${arrayU} . Sua pontuação ${puntosU}.` + "\n" +
//          `As cartas do computador são ${arrayC} . A pontuação do computador é ${puntosC}.` + "\n" +
//          `O computador ganhou!`)
//          break
//      }

//   }





   // comprarCarta().valor + puntosU ate < 21 || ate false 
   // pontos >= 21 = mensagem final






   // let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
   // const carta4 = comprarCarta()
   // const novosPontos = puntosU + carta4.valor

   // if (novosPontos < 21) {
   //    arrayU.push(carta4.texto)
   //    confirm(`Suas cartas são ${arrayU}. A carta revelada do computador é ${arrayC[0]}.` + "\n" + "Deseja comprar mais uma carta?")
   // } else if (pergunta == false || puntosU >= 21 && puntosU > puntosC) {
   //    alert(`Suas cartas são ${arrayU} . Sua pontuação ${puntosU}.` + "\n" +
   //       `As cartas do computador são ${arrayC} . A pontuação do computador é ${puntosC}.` + "\n" +
   //       `O Usuario ganhou!`)
   // } else {
   //    alert(`Suas cartas são ${arrayU} . Sua pontuação ${puntosU}.` + "\n" +
   //       `As cartas do computador são ${arrayC} . A pontuação do computador é ${puntosC}.` + "\n" +
   //       `O computador ganhou!`)
   // }





   // switch (puntosU) {
   //    case numeros:
   //       const carta4 = comprarCarta()
   //       arrayU.push(carta4.texto)
   //       confirm(`Suas cartas são ${arrayU}. A carta revelada do computador é ${arrayC[0]}.` + "\n" + "Deseja comprar mais uma carta?")
   //       break
   //    default:
   //       if (puntosU > puntosC) {
   //          alert(`Suas cartas são ${arrayU} . Sua pontuação ${puntosU}.` + "\n" +
   //             `As cartas do computador são ${arrayC} . A pontuação do computador é ${puntosC}.` + "\n" +
   //             `O Usuario ganhou!`)
   //       } else {
   //          alert(`Suas cartas são ${arrayU} . Sua pontuação ${puntosU}.` + "\n" +
   //             `As cartas do computador são ${arrayC} . A pontuação do computador é ${puntosC}.` + "\n" +
   //             `O computador ganhou!`)
   //          break
   //       }






   //    while (novosPontos >= limite) {
   //       if (pergunta == true) {
   //          const carta4 = comprarCarta()
   //          arrayU.push(carta4.texto)
   //          confirm(`Suas cartas são ${arrayU}. A carta revelada do computador é ${arrayC[0]}.` + "\n" + "Deseja comprar mais uma carta?")
   //       } else {
   //          if (puntosU > puntosC) {
   //             alert(`Suas cartas são ${arrayU} . Sua pontuação ${puntosU}.` + "\n" +
   //                `As cartas do computador são ${arrayC} . A pontuação do computador é ${puntosC}.` + "\n" +
   //                `O Usuario ganhou!`)
   //          } else {
   //             alert(`Suas cartas são ${arrayU} . Sua pontuação ${puntosU}.` + "\n" +
   //                `As cartas do computador são ${arrayC} . A pontuação do computador é ${puntosC}.` + "\n" +
   //                `O computador ganhou!`)

   //          }

   //       }
   // novosPontos++
   //    }

   // for (var i = 21 ; puntosU < i; i + puntosU) {
   //    arrayU.push(carta4.texto)
   //    confirm(`Suas cartas são ${arrayU}. A carta revelada do computador é ${arrayC[0]}.` + "\n"+ "Deseja comprar mais uma carta?")
   //  }
   //   const novosPontos = puntosU
   //   const limite = 21
   // while( novosPontos < limite){
   //    const carta4 = comprarCarta()
   //    arrayU.push(carta4.texto)
   //    confirm(`Suas cartas são ${arrayU}. A carta revelada do computador é ${arrayC[0]}.` + "\n"+ "Deseja comprar mais uma carta?")
   //    novosPontos++
   // }






   //       function mesangemFinal(){
   //          if(puntosU > puntosC){
   //             alert(`Suas cartas são ${arrayU} . Sua pontuação ${puntosU}.`+"\n"+
   //             `As cartas do computador são ${arrayC} . A pontuação do computador é ${puntosC}.`+"\n"+
   //             `O Usuario ganhou!`)
   //          }else{
   //             alert(`Suas cartas são ${arrayU} . Sua pontuação ${puntosU}.`+"\n"+
   //             `As cartas do computador são ${arrayC} . A pontuação do computador é ${puntosC}.`+"\n"+
   //             `O computador ganhou!`)
   //          }
   //       }

   //  while(puntosU < 21){
   //     if (pergunta == true) {
   //     const novaCarta = comprarCarta()
   //    arrayU.push(novaCarta.texto.valor)
   //      confirm(`Suas cartas são ${arrayU}. A carta revelada do computador é ${arrayC[0]}.` + "\n"+ "Deseja comprar mais uma carta?")
   //    puntosU++
   //    }else{
   //       mesangemFinal()

   //    }
   // }

}

