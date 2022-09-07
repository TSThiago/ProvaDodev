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

// Ex 2:

numero = parseInt(prompt("Insira um número para fazer a soma"))
console.log(SomarAteNumero(numero))

function SomarAteNumero(numeroParametro){
    let valor = 0
    for(let index = 0; index <= numeroParametro; index++){  
        valor = valor + index
    }
    return valor
}
