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

// Ex 3:

let valorA = prompt("Insira um valor para A")
let valorB = prompt("Insira um valor para B")

console.log(RetornarTrueOuFalse(valorA,valorB))

function RetornarTrueOuFalse(A,B){
    if(A % 2 == 0 && B > 5){
        return true
    }else{
        return false
    }
}

// Ex 4

console.log(OrdenarNúmeros(3,2,1))

function OrdenarNúmeros(a,b,c){
    let numeroArray = [a,b,c]
    let numeroAux = 0
    
    for(let index = 0; index < numeroArray.length; index++){
        if(numeroArray[index] > numeroArray[index + 1]){
            numeroAux = numeroArray[index]
            numeroArray[index] = numeroArray[index + 1]
            numeroArray[index + 1] = numeroAux
            index = 0
        }
        console.log(index)
    }
    return numeroArray
}

// Ex 5 

array = [4,6,7,8,9,10,12,13,14,15]

console.log(LimitarValores(9,13))

function LimitarValores(LimiteMenor,LimiteMaior){
    let arrayAux = []
    let contador = 0
    
    for(let index = 0; index < array.length; index++){
        if(array[index] >= LimiteMenor && array[index] <= LimiteMaior){
            arrayAux[contador] = array[index]
            contador++
        }
    }
    return arrayAux
}