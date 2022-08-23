//a. const minhaString:string = 22
// Reclama porque a variável esta condicionada a ser uma string e nao um numero

//b.

const meuNumero: number | string = "hola"
// para que aceite mais de uma condição utilizamos union type

//c. 

type person = {
    nome: string,
    idade: number,
    corFavorita: string
}
//d.
enum Arcoiris{
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil" ,
    VIOLETA = "Violeta"
}

const person1: person = {
    nome: "Lucia",
    idade: 26,
    corFavorita: Arcoiris.AMARELO
}

const person2: person = {
    nome: "Lorena",
    idade: 25,
    corFavorita: Arcoiris.AZUL
}

const person3: person = {
    nome: "Gabriela",
    idade: 50,
    corFavorita: Arcoiris.VERDE
}



