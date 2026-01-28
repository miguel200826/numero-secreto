//Criar uma função que exibe "Olá, mundo!" no console. CONCLUIDO!!
//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

//function olaMundo(nome){
//    console.log(`Olá ${nome} !`);
//}
//olaMundo ("Miguel");

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

//function exibirDobro(numero){
//    console.log(numero * 2);
//}
//exibirDobro (100);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

//function exibirMedia (numero1,numero2,numero3){
//  return console.log((numero1 + numero2 + numero3) / 3); 
//}
//exibirMedia (10,20,30);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

//function numeroMaior(num1,num2){
// return num1 > num2 ? num1 : num2;
//}
//console.log(numeroMaior (200,100))

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

//function resultadoMultiplicacao(numero){
//    return numero * numero
//}
//console.log(resultadoMultiplicacao (1))
//-----------------------------------------------------------------------
//Para remover o último elemento, você pode usar o método pop.
//frutas.pop();
// Saída: ["Maçã", "Uva", "Laranja"]
// console.log(frutas); 
// -----------------------------------------------------------------------
//Adicionando novos elementos
//Para adicionar um elemento ao final da array, você pode usar o método push.

//frutas.push("Morango");
//console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja", "Morango"]
//--------------------------------------------------------------------------------

// let listaGenerica = []
//let linguagensDeProgramacao = [ 'JavaScript','C','C++', 'Kotlin', 'Python'];
//linguagensDeProgramacao.push("Java","Ruby","Golang");
//nomes1 = ["Miguel","Rafael","Gabriel"];
//console.log(nomes1[0]);
//nomes2["Luiz","Guilherme","Bruno"];
//console.log(nomes2[1]);
//nomes3 = ["João","Manuel","Satoru"];
//console.log(nomes3[2]);
//------------------------------------------------------------------------------------
//Web Speech API    
//Assim, no arquivo app.js, iremos remover o código da linha 9 (responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});) e adicionar o seguinte código no lugar dele:

 //if ('speechSynthesis' in window) {
 //       let utterance = new SpeechSynthesisUtterance(texto);
 //       utterance.lang = 'pt-BR'; 
 //       utterance.rate = 1.2; 
 //       window.speechSynthesis.speak(utterance); 
 //   } else {
 //       console.log("Web Speech API não suportada neste navegador.");
 //   }
// Não se preocupe muito com o que o código faz em cada linha. O que precisamos saber aqui é que estamos criando um código
//  que também será um leitor de tela, em “pt-BR”, definindo a taxa de fala para 1.2.



let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto ');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}   
exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela ("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
       let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);
       }else{
            exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);
       }
       tentativas++;
       limparCampo()

    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
    if (quantidadeDeElementosNaLista === numeroLimite){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push( numeroEscolhido);
        console.log (listaNumerosSorteados);
        return numeroEscolhido;

    }
}
function  limparCampo(){
chute = document.querySelector("Input");
chute.value = "";
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
       document.getElementById("reiniciar").setAttribute("disable", true);

}

function calculadoraNova(numero1,numero2){
    
}


