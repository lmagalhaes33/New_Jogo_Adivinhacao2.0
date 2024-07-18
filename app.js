/*let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo de adivinhação";

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Escolha um numero entre 1 e 10";
*/
let listaNumerosDaSorte = [];
let nrmLimite = 10;
let numeroSecreto = geraNrmSecreto();
let tentativas = 1;

function exibeTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibeMsgInicial(){
    exibeTextoNaTela("h1", "Jogo de adivinhação");
    exibeTextoNaTela('p', "Escolha um numero entre 1 e 10");
}
exibeMsgInicial();

function verificarChute(){
    console.log(numeroSecreto);
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibeTextoNaTela("h1", "Acertou!");
        let tentativa = tentativas > 1 ? "Tantativas" : "Tantativa";
        let mensagemTentativas = `Parabens voce acertou com ${tentativas} ${tentativa}`;
        exibeTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else{
        if (chute > numeroSecreto){
            exibeTextoNaTela("p", "Numero secreto Menor ");
        }else {
            exibeTextoNaTela("p", "Numero secreto Maior");
        }
        tentativas++;
        limparCampo();
    }
    console.log(numeroSecreto);
}

function geraNrmSecreto(){
    let numeroEscolhido = parseInt(Math.random() * nrmLimite + 1);
    let quantidadeElementos = listaNumerosDaSorte.length;

    if(quantidadeElementos == nrmLimite){
        listaNumerosDaSorte = [];
    }
    if(listaNumerosDaSorte.includes(numeroEscolhido)){
        return geraNrmSecreto();
    }else{
        listaNumerosDaSorte.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
 
function limparCampo (){
    chute = document.querySelector("input");
    chute.value = "";
    chute.focus();
}
 function reiniciarJogo(){
    numeroSecreto = geraNrmSecreto();
    limparCampo();
    tentativas = 1;
    exibeMsgInicial();
    document.getElementById("reiniciar",).setAttribute("disabled", true);
 }

