// EXERCICIOS DE INTERPRETACAO DE CODIGO

// 1.  A) O codigo faz a comprobacao se o numero inserido pelo usuario
// é divisivel pelo numero 2. Se for vai imprimir "Passou no teste." se nao, "Nao passou no teste."
// B) Para numeros que nao tenham resto na hora de ser divididos pelo numero 2.
// C) Se o numero dividido por 2 tem resto, dara essa mensagem.

// 2. A) Esse codigo serve para informar a pessoa o preco da fruta escolhida.
// B) O preço da fruta Maçã é R$ 2.25 
// C) O preco da fruta passara a ser 5, porque o condicional nao foi "fechado" entao passou diretamente para o resultado da proxima condicao que estiver "fechada".
// Ou seja, que contenha o break.

// 3. A) Está chamando ao usuario inserir um numero no prompt, sendo que todo prompt transforma a informacao em string
// se quisermos usar numeros para realizar comparacoes com outros numeros precisamos converter essa string em number, 
// isso é feito envolvendo o prompt com o comando "Number()".
// B) Se o usuario digita o numero 10 a mensagem será "Esse numero passou no teste". Se inserir o numero -10 dara erro. 
// C) Sim, porque a variavel mensagem nao foi identificada ou definida dentro do escopo.

// EXERCICIOS DE ESCRITA DE CODIGO

// 1. 
/*
const idade = Number(confirm("Voce é maior de 18 anos?"))

if (idade == true){
    console.log("Voce pode dirigir!")
} else {
    console.log("Voce nao pode dirigir.")
}

*/

// 2. 
/*
const enunciado = alert("Em que turno voce estuda? Digite M (matutino), V (vespertino), N (noturno).")
const turno = prompt("Insira sua resposta aqui, por favor.").toUpperCase().trim()

if (turno == "M"){
    console.log("Bom dia!")
} else if (turno == "V"){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}
*/

// 3. 
/*
const enunciado = alert("Em que turno voce estuda? Digite M (matutino), V (vespertino), N (noturno).")
const turno = prompt("Insira sua resposta aqui, por favor.").toUpperCase().trim()

switch(turno){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    default:
        console.log("Boa noite!")
        break    
}
*/

// 4. 
/*
const genero = prompt("Qual genero de filme gostaria assistir?")
const preco = confirm("Valor do ingresso: R$16")

if (genero == "fantasia" && preco == true){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}
*/
// MESMO CODIGO, OUTRA VARIAVEL: na minha logica a pessoa nao escolhe o valor do ingreso do cinemaque quer pagar kkk,
/*
const genero = prompt("Qual genero de filme gostaria assistir?")
const preco = prompt("Qual valor de ingreso escolhe? VIP 25 / REGULAR 14").toUpperCase()

if (genero == "fantasia" && preco == "REGULAR"){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}
*/

// DESAFIOS

// 1. 
/*
const genero = prompt("Qual genero de filme gostaria assistir?")
const preco = confirm("Valor do ingresso: R$16")

if (genero == "fantasia" && preco == true){
    const lanche = prompt("Gostaria de um lanche? Temos pipoca, chocolate, balas. Digite sua escolha.")
    console.log("Bom filme!")
    console.log(`Voce escolhou: ${lanche}. Aproveite!`)
} else {
    console.log("Escolha outro filme :(")
}
*/

// 2.

// ingresos de jogos => vender 
// infos: 
//nombre compelto 
//tipo de juego: IN (internacional) DO (domestico)
// etapa de juego: SF semifinal, DT decisao de terceiro lugar, FI final
// categoria: 1 2 3 o 4
//cantidad de ingresos
// pedirle estas infos al usuario, ok. con prompt
// IMPRIMIR TOOODAS LAS INFORMACIONES + $ DE C/ INGRESO + VALOR TOTAL A PAGAR (UN*CANT)
// o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

// ---Dados da compra--- 
// Nome do cliente:  Soter Padua 
// Tipo do jogo:  Nacional 
// Etapa do jogo:  Final 
// Categoria:  1 
// Quantidade de Ingressos:  10 ingressos 
// ---Valores--- 
// Valor do ingresso:  R$ 1980
// Valor total:  R$ 19800



const boasVindas = alert("Boa noite, vamos lá comprar esses ingressos! Primeiro preciso de algumas informacoes.")
const nombre = prompt("Digite seu nome completo, por favor.")
const tipoJuego = prompt("O jogo ao qual quer assistir é internacional ou nacional?").toLowerCase().trim()
const etapaJuego = prompt("Qual etapa do jogo quer assistir? Semifinal, decisao de terceiro lugar ou final.").toLowerCase().trim()
const categoria = Number(prompt("Qual categoria quer assistir? 1, 2, 3 ou 4"))
const ingresos = Number(prompt("Quantos ingresos gostaria comprar?"))

// si hago una funcion puedo llamar esta condicion afuera con las variables necesarias

function informaciones(param1, param2, param3, param4, param5) {

    console.log("---Dados da compra---")
    console.log(`Nome do cliente: ${param1}`)
    switch (param2) {
        case "internacional":
            console.log("Tipo do jogo: Internacional")
            break
        default:
            console.log("Tipo do jogo: Nacional")
            break
    }
    switch (param3) {
        case "final":
            console.log("Etapa do jogo: Final")
            break
        case "semifinal":
            console.log("Etapa do jogo: Semifinal")
            break
        default:
            console.log("Etapa do jogo: Decisao de terceiro lugar")
            break
    }
    switch (param4) {
        case 1:
            console.log("Categoria: 1")
            break
        case 2:
            console.log("Categoria: 2")
            break
        case 3:
            console.log("Categoria: 3")
            break
        default:
            console.log("Categoria: 4")
            break
    }

    console.log(`Quantidade de ingressos: ${param5} ingressos`)

    console.log("---Valores---")
    //internacionales mult por 4.10

    if (param2 == "nacional" && param3 == "semifinal") {
        switch (param4) {
            case 1:
                let unidad1 = 1320
                let total1 = unidad1 * param5
                console.log(`Valor do ingresso: R$ ${unidad1}`)
                console.log(`Valor total: R$ ${total1}`)
                break
            case 2:
                let unidad2 = 880
                let total2 = unidad2 * param5
                console.log(`Valor do ingresso: R$ ${unidad2}`)
                console.log(`Valor total: R$ ${total2}`)
                break
            case 3:
                let unidad3 = 550
                let total3 = unidad3 * param5
                console.log(`Valor do ingresso: R$ ${unidad3}`)
                console.log(`Valor total: R$ ${total3}`)
                break
            default:
                let unidad4 = 220
                let total4 = unidad4 * param5
                console.log(`Valor do ingresso: R$ ${unidad4}`)
                console.log(`Valor total: R$ ${total4}`)
                break
        }
    } else if (param2 == "nacional" && param3 == "final") {
        switch (param4) {
            case 1:
                let unidad1 = 1980
                let total1 = unidad1 * param5
                console.log(`Valor do ingresso: R$ ${unidad1}`)
                console.log(`Valor total: R$ ${total1}`)
                break
            case 2:
                let unidad2 = 1320
                let total2 = unidad2 * param5
                console.log(`Valor do ingresso: R$ ${unidad2}`)
                console.log(`Valor total: R$ ${total2}`)
                break
            case 3:
                let unidad3 = 880
                let total3 = unidad3 * param5
                console.log(`Valor do ingresso: R$ ${unidad3}`)
                console.log(`Valor total: R$ ${total3}`)
                break
            default:
                let unidad4 = 330
                let total4 = unidad4 * param5
                console.log(`Valor do ingresso: R$ ${unidad4}`)
                console.log(`Valor total: R$ ${total4}`)
                break
        }
    } else {
        switch (param4) {
            case 1:
                let unidad1 = 660
                let total1 = unidad1 * param5
                console.log(`Valor do ingresso: R$ ${unidad1}`)
                console.log(`Valor total: R$ ${total1}`)
                break
            case 2:
                let unidad2 = 440
                let total2 = unidad2 * param5
                console.log(`Valor do ingresso: R$ ${unidad2}`)
                console.log(`Valor total: R$ ${total2}`)
                break
            case 3:
                let unidad3 = 330
                let total3 = unidad3 * param5
                console.log(`Valor do ingresso: R$ ${unidad3}`)
                console.log(`Valor total: R$ ${total3}`)
                break
            default:
                let unidad4 = 170
                let total4 = unidad4 * param5
                console.log(`Valor do ingresso: R$ ${unidad4}`)
                console.log(`Valor total: R$ ${total4}`)
                break
        }
    }

    if (param2 == "internacional" && param3 == "semifinal") {
        switch (param4) {
            case 1:
                let unidad1 = 1320 * 4.10
                let total1 = unidad1 * param5
                console.log(`Valor do ingresso: R$ ${unidad1}`)
                console.log(`Valor total: R$ ${total1}`)
                break
            case 2:
                let unidad2 = 880 * 4.10
                let total2 = unidad2 * param5
                console.log(`Valor do ingresso: R$ ${unidad2}`)
                console.log(`Valor total: R$ ${total2}`)
                break
            case 3:
                let unidad3 = 550 * 4.10
                let total3 = unidad3 * param5
                console.log(`Valor do ingresso: R$ ${unidad3}`)
                console.log(`Valor total: R$ ${total3}`)
                break
            default:
                let unidad4 = 220 * 4.10
                let total4 = unidad4 * param5
                console.log(`Valor do ingresso: R$ ${unidad4}`)
                console.log(`Valor total: R$ ${total4}`)
                break
        }
    } else if (param2 == "internacional" && param3 == "final") {
        switch (param4) {
            case 1:
                let unidad1 = 1980 * 4.10
                let total1 = unidad1 * param5
                console.log(`Valor do ingresso: R$ ${unidad1}`)
                console.log(`Valor total: R$ ${total1}`)
                break
            case 2:
                let unidad2 = 1320 * 4.10
                let total2 = unidad2 * param5
                console.log(`Valor do ingresso: R$ ${unidad2}`)
                console.log(`Valor total: R$ ${total2}`)
                break
            case 3:
                let unidad3 = 880 * 4.10
                let total3 = unidad3 * param5
                console.log(`Valor do ingresso: R$ ${unidad3}`)
                console.log(`Valor total: R$ ${total3}`)
                break
            default:
                let unidad4 = 330 * 4.10
                let total4 = unidad4 * param5
                console.log(`Valor do ingresso: R$ ${unidad4}`)
                console.log(`Valor total: R$ ${total4}`)
                break
        }
    } else {
        switch (param4) {
            case 1:
                let unidad1 = 660 * 4.10
                let total1 = unidad1 * param5
                console.log(`Valor do ingresso: R$ ${unidad1}`)
                console.log(`Valor total: R$ ${total1}`)
                break
            case 2:
                let unidad2 = 440 * 4.10
                let total2 = unidad2 * param5
                console.log(`Valor do ingresso: R$ ${unidad2}`)
                console.log(`Valor total: R$ ${total2}`)
                break
            case 3:
                let unidad3 = 330 * 4.10
                let total3 = unidad3 * param5
                console.log(`Valor do ingresso: R$ ${unidad3}`)
                console.log(`Valor total: R$ ${total3}`)
                break
            default:
                let unidad4 = 170 * 4.10
                let total4 = unidad4 * param5
                console.log(`Valor do ingresso: R$ ${unidad4}`)
                console.log(`Valor total: R$ ${total4}`)
                break
        }
        }

    }



    console.log(informaciones(nombre, tipoJuego, etapaJuego, categoria, ingresos))












