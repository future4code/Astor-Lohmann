// EXERCICIOS DE INTERPRETAÇÃO CÓDIGO:


// 1a. Irá retornar: 5 50
// 1b. Nada será impresso no terminal

// 2a. Darvas Goli

// 2b. Amanda Caio

// 3. Devolve uma array da raiz quadrada dos números pares.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO.


// 4a.----------------------


// let infPessoal = function(){
//     const eu = "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//     console.log(eu)
// }

// console.log(infPessoal)

// 4b.-------------------------


// function infPessoal (nome, idade, cidade, estudante) {
//     if (estudante === true) {
//             console.log ("Eu sou  ${nome} , tenho  ${idade} anos, moro em  ${cidade} e sou estudante.")
//         } else if (estudante === false) {
//             console.log ("Eu sou  ${nome} , tenho  ${idade} anos, moro em  ${cidade} e não sou estudante.")
//         }
//     }
//     const resultado = infPessoal("Astor", 27, "Florianópolis", false)

// 5a.-----------------------


// function funcSoma (a, b) {
//     const soma = a+b    
//     return soma
//    }

//    console.log(funcSoma(2,3))

// 5b.--------------------------


// function func1 (a, b) {
//     const resultado = console.log(a >= b)
//     return resultado
// }
//    const resultado = console.log(func1(2,1))

//5c.-----------------------------


// function repetirMensagem(mensagem) {
//     let repetidor = 0;
//     while (repetidor < 10) {
//         console.log(mensagem)
//         repetidor = repetidor + 1;
//     }
//   }
//   console.log(repetirMensagem("abc"));

// 6a.-------------------------------


// const arrayMain = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function mostrarArray (array){
//     for (let elemento of array)
//     return array.length
// }
// console.log(mostrarArray(arrayMain))

// 6b.---------------------------------


// function verificarNum (numero){
//     const resultado = console.log(numero%2 === 0)
//     return resultado
// }
// console.log(verificarNum(3))

// 6c.-----------------------------------


// const arrayMain = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function mostrarArrayPar (array){
//     const arrayPar = []
//     for (let elemento of array)
//     if (elemento%2 === 0){
        
//         arrayPar.push(elemento);
//     }
//     return arrayPar.length
// }
// console.log(mostrarArrayPar(arrayMain))

// 6d.-------------------------------------


// const arrayMain = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function mostrarArrayPar (array){
//     const arrayPar = []
//     for (let elemento of array) {
//         const resultado = console.log(elemento%2 === 0)
//         return resultado
//     }
//        if (resultado === true){        
//         arrayPar.push(elemento);
//     }
// }
//     return arrayPar.length

//console.log(mostrarArrayPar(arrayMain))



// Desafio

// Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro.

const funcao1 = (parametro) => {
    const resultado = console.log(parametro)
    return resultado
}
console.log(funcao1(bunda))




