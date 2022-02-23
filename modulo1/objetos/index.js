// EXERCICIOS DE INTERPRETACAO DE CODIGO

// 1. a) Matheus Nachtergaele
//       Virginia Cavendish
//       {canal: "Globo",  horario: "14h" }

// 2. a) {nome: "Juca", idade: 3, raca: "SRD"}
//       {nome: "Juba", idade: 3, raca: "SRD"}
//       {nome: "Jubo", idade: 3, raca: "SRD"}
//    b) Copia as propriedades e insere as mesmas no objeto novo.

// 3. a) false
//       undefined
//    b) Na funcao é chamado o objeto e uma de suas propriedades, assim no console ira imprimir
// o valor dessa propriedade. Backender tem como valor false, porem altura nao é uma propriedade existente
// nesse objeto, entao nao tem nenhum valor e por consecuencia vai imprimir undefined, indefinido. 

// EXERCICIOS DE ESCRITA DE CODIGO

// 1. a)
/*

    const pessoa = {
        nome: "Lucía", 
        apelidos: ["Luli", "Luchi", "Luci"]
     }
     

function frase(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)
}

frase(pessoa)

// b) 

const novaPessoa = {
    ...pessoa,
    apelidos: ["Lucu", "Cuchi", "Lu"]
}

frase(novaPessoa)

// 2. a)

const pessoaUm = {
    nome: "Silvana",
    idade: 56,
    profissao: "Cantora"
}


const pessoaDois = {
    nome: "Susana",
    idade: 45,
    profissao: "Dancarina"
}

function array(objetoUno, objetoDois){
    return [objetoUno.nome , objetoUno.nome.length , objetoUno.idade , objetoUno.profissao , objetoUno.profissao.length, objetoDois.nome , objetoDois.nome.length , objetoDois.idade , objetoDois.profissao , objetoDois.profissao.length]
}

console.log(array(pessoaUm, pessoaDois))
 
// OU 

/*
function array(objetoUno){
    const listado = [objetoUno.nome , objetoUno.nome.length , objetoUno.idade , objetoUno.profissao , objetoUno.profissao.length]
    return listado
}


console.log(array(pessoaUm))
console.log(array(pessoaDois))



// 3. 

const carrinho = []

const frutaUm = {
    nome: "Laranja",
    disponibilidade: true
}
const frutaDois = {
    ...frutaUm,
    nome: "Pessego"
}
const frutaTres = {
    ...frutaUm,
    nome: "Banana"
}

function comprei(fruta){
 carrinho.push(fruta)
 return carrinho
}

console.log(comprei(frutaUm), comprei(frutaDois), comprei(frutaTres))


//DESAFIOS

// 1. 

function dados(){
    const nome = prompt("Como se chama?")
    const idade = prompt("Quantos anos vc tem?")
    const profissao = prompt("Qual é sua profissao?")
    const info = {
        nome: nome,
        profissao: profissao,
        idade: idade
    }
    console.log(info)
    console.log(typeof(info))
}

dados()


// 2.

const filmes = () => {
    const filmeUno = {
        ano: 1996,
        nome: "Sissy that walk!"
    }
    const filmeDos = {
        ano: 2015,
        nome: "You better work!"
    }
    return `O primeiro filme foi lancado antes do segundo? ` + (filmeUno.ano < filmeDos.ano) 
    + ` 
    O primeiro filme foi lançado no mesmo ano do segundo? ` + (filmeUno.ano == filmeDos.ano)

}
 console.log(filmes())


// 3.

function stock(laranja){
  laranja.disponibilidade = !frutaUm.disponibilidade
  return laranja
}
console.log(stock(frutaUm))

// function stock(frutaUm){
//     frutaUm.disponibilidade = !frutaUm.disponibilidade
//     return frutaUm
//   }
//   console.log(stock(frutaUm))
*/

