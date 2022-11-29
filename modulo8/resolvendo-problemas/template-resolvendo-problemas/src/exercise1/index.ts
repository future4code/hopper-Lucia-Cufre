// string
// adicionar caractere
//remover caractere
// substituir caractere
// one edit se for o resultado de uma das operacoes
//determinar se uma string é one edit de outra

//function oneEdit
// se tamanho entre as duas é maior que 1

function isOneEdit(strA: string, strB: string){
    if(Math.abs(strB.length - strA.length) > 1){
        return false
    }

    if(strA.length > strB.length) return strA.includes(strB)
    if(strB.length > strA.length) return strB.includes(strA)

    let charsDiff = 0
    for(let i = 0; i < strA.length; i++){
        if(strA[i] !== strB[i]) charsDiff++
    }

    return charsDiff === 1
}