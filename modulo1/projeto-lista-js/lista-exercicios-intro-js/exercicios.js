// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Qual é a altura do retangulo?"))
  const largura = Number(prompt("Qual é a largura do rectangulo?"))
  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual é o ano atual"))
  const anoNasc = Number(prompt("Em que ano voce nasceu?"))
  console.log(anoAtual - anoNasc)

}

// EXERCÍCIO 03
function calculaIMC(Peso, Altura) {
  // implemente sua lógica aqui
  return Peso / (Altura * Altura)
}

// EXERCÍCIO 04 

function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Como e seu nome?")
  const idade = prompt("Qual é sua idade?")
  const email = prompt("Me informe seu email por favor")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
} 

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  
  const corUno = prompt("qual sua primeir cor fav?")
  const corDos = prompt("Qual sua seg cor fav?")
  const corTres = prompt("Qual sua terceira cor fav?")
  const cores = [ corUno , corDos , corTres ]
  console.log(cores)
}

// EXERCÍCIO 06 

function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 const saludo = string.toUpperCase()
 return saludo
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidade = custo / valorIngresso
  return quantidade

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui 
 return string1.length === string2.length
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  array [5, 6, 8]
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  array 
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array
  let aReserva = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = aReserva
  return array
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNasc = Number(prompt("Me informe o ano de nascimento"))
  const anoId = Number(prompt("Em que ano foi emitida sua identidade?"))
  let idade = anoAtual - anoNasc
  let anosRenov = anoAtual - anoId
  console.log(( idade <= 20 && anosRenov >= 5 ) || ( idade > 20 && idade <= 50 && anosRenov >= 10) || (idade > 50 && anosRenov >= 15))

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const multiplo = ano % 400 == 0
  const multiploUm = ano % 4 == 0
  const multiploDois = ano % 100 != 0
  return multiploUm && multiploDois || multiplo
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const horarios = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  let anos = idade == "sim"
  let estudos = ensinoMedio == "sim"
  let disponibilidade = horarios == "sim"
  console.log(anos && estudos && disponibilidade)
}
