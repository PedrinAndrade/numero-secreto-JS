let nome = prompt('Informe seu nome usuário:');

alert(`${nome}, boas vindas ao jogo do número secreto!`);
let numeroSecreto = 8;
console.log(numeroSecreto);

let chute;
let tentativas = 1;

//Enquanto não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');

    //Se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

