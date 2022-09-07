// Ex 1:

let numero = parseInt(prompt("Insira um número para verificar se é par ou impar"))
console.log(VerificarParOuImpar(numero))

function VerificarParOuImpar(numeroParametro){
    if(numeroParametro % 2 == 0){
        return true
    }else{
        return false
    }
}