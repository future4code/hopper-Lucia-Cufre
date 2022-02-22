//EXERCICIOS DE INTERPRETACAO DE CODIGO
// 1. 1 = true 2 = false 3 = true 
// a. false 
// b. false
// c. true
// d. boolean
// 2. O problema está em que tudo aquilo que for inserido num prompt
// reage como string, entao para poder fazer a soma primeiro
// preciso mudar o tipo pra number. Caso contrario o + na soma ira concatenar
// em lugar de somar, os valores. 
// 3. let primeiroNumero = Number(prompt ("Digite um numero"))
//    let segundoNumero = Number(prompt("Digite um numero"))
//    const soma = primeiroNumero + segundoNumero
//    console.log(soma)

//EXERCICIOS DE ESCRITA DE CODIGO
// 1)

/*let idade1 = Number(prompt("Quantos anos voce tem?"))
let idade2 = Number(prompt("E me diz, quantos anos sua melhor amiga tem?"))

console.log("Sua idade é maior do que a do seu melhor amiga?")
console.log(idade1 > idade2)
console.log(idade1 - idade2)*/

// 2)
/*let numPar = Number(prompt("Escreva um numero par aqui"))

console.log( numPar % 2 )
// c. Sempre que coloca um numero par o resto é 0
// d. Sempre que coloca um numero impar o resto é 1*/

// 3)

/*let idade = Number(prompt("Qual é sua idade?"))

console.log( idade * 12 )
console.log(idade * 365)
console.log(idade * 8760)*/

// 4)

/*let numeroUno = Number(prompt("Escreva um numero"))
let numeroDos = Number(prompt("Escreva mais um numero porfi"))

console.log("O primeiro numero é maior que o segundo?" , numeroUno > numeroDos)

console.log("O primeiro numero é igual ao segundo?" , numeroUno === numeroDos)

let resto1 = numeroUno % numeroDos
let resto2 = numeroDos % numeroUno
let a = 0
 
console.log("O primeiro numero é divisivel com o segundo?" , resto1 === a)
console.log("O segundo numero é divisivel com o primeiro?" , resto2 === a)*/

// DESAFIO!!

// 1) a.

/*let KELVIN = (77 - 32)*(5/9) + 273.15
console.log((KELVIN))

//b.

let GRAUS_FAHRENHEIT = (80)*(9/5) + 32
console.log((GRAUS_FAHRENHEIT))

//c.

let GRAUS_FAHRENHEIT = (30)*(9/5) + 32
let KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
console.log(GRAUS_FAHRENHEIT , KELVIN)*/

//d.

/*let CELSIUS = Number(prompt("Insira um valor"))
let GRAUS_FAHRENHEIT = (CELSIUS)*(9/5) + 32
let KELVIN = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
console.log(GRAUS_FAHRENHEIT , KELVIN)
*/

// 2) a.

/*let valorHora = 0.05
let consumo = 280
let valorPago = consumo * valorHora 
console.log(valorPago)
*/

// b.

/*let valorHora = 0.05
let consumo = 280
let desconto = 15
let valorPago = consumo * valorHora 
console.log(valorPago - (valorPago * desconto / 100))*/

// 3) a.
/*
let lb = 20
let kg = lb * 0.45
console.log("20lb equivalem a" , kg , "kg")
*/

// b.
/*
let oz = 10.5
let kg = oz * 35.27
console.log("10.5oz equivalem a" , kg , "kg")*/

// c.

/* mi = 100
let mt = mi * 1609
console.log("100mi equivalem a" , mt , "m")*/

// d.
/*
let ft = 50
let mt = ft * 0.3048
console.log("50ft equivalem a" , mt , "m")*/

// e.
/*
let gal = 103.56
let lt = gal * 3.7854
console.log("103.56gal equivalem a" , lt , "l")*/

// f.
/*
let xic= 450
let lt = xic * 0.150
console.log("450xic equivalem a" , lt , "l")*/

// g. 
/*
const quantia = Number(prompt("Qual valor em libras gostaria converter?"))
const lb = quantia
const kg = lb * 0.45
console.log("O total de" , quantia , "libras, equivalem" , kg , "kilogramas")
*/



