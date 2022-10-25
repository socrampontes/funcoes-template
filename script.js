/* //função nomeada 
function nomeFuncao (){
    //corpo da funcao
    //escopo

}

//função anonima
const funcao = function (){


}

//arrow function 

const funcaoArrow = () => {

}
// exemplo 

() => {

} */



const imprimirNome = (nome) => {
    /* console.log(nome) */

    return `Olá ${nome}`
}

//passando argumentos 
const meuNome = "marcos"
console.log(imprimirNome(meuNome))
console.log(imprimirNome("ozemela"))
imprimirNome("marcos")
/* imprimirNome("2022")
imprimirNome("joel")
 */


const imprimir = function (nome){
    console.log(`Olá ${nome}, isso é uma função não nomeada`)

}
 imprimir("joão")

 const somar1 = (nume1, nume2) => {
    const soma = nume1 + nume2
    return soma

}
console.log(somar1(2,4))
console.log(somar1(10,5))

const numeroPar = (num) =>{
    const par = num  % 2
    const verificarPar = par === 0

    console.log("resto", par)
    console.log(verificarPar)
    const soma = num + 10
    console.log(soma)
    const mult =num * num
    //num = 2 
    //num = num * num
    //num *= num


    return `o numero ${num} é par? ${verificarPar}. somando com 10 o resultando é ${soma} e multiplicado por ele mesmo é ${mult}`
}
//armazenando o retorno da função em uma variavel 
const resultado = numeroPar(4)
console.log(resultado)
//chamando a função apenas chamando no console sem armazenar 
console.log(numeroPar(4))

const numeroParDois = function (num){
    const par = num  % 2
    const verificarPar = par === 0

    console.log("resto", par)
    console.log(verificarPar)
    const soma = num + 10
    console.log(soma)
    const mult =num * num
    //num = 2 
    //num = num * num
    //num *= num


    return `o numero ${num} é par? ${verificarPar}. somando com 10 o resultando é ${soma} e multiplicado por ele mesmo é ${mult}`

}

const autenticar = (login, senha) => {
    const longinArmazenado = "marcospontes"
    const senhaArmazenada = "1234"

    const longiverificado = longinArmazenado === login
    const senhaverificada = senhaArmazenada === senha

    const logar = longiverificado && senhaverificada 
    return logar


}

console.log(autenticar("marcospontes", "1234"))
console.log(autenticar("marcospontes", "1234f"))






const function1 = (nome, anoDeNascimento, anoAtual = new Date().getFullYear()) => {
    const idade = anoAtual - anoDeNascimento >= 18
    console.log((function1), nome, anoDeNascimento, anoAtual,)
    
    return ` ${nome} é maior de idade? ${idade} `

}

console.log(function1("marcos", 1996)) 
console.log(function1("italo, 2012")) 
