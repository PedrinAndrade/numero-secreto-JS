let nome = prompt('Informe seu nome usuário:');

alert(`${nome}, boas vindas ao jogo do número secreto!`);
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

//Enquanto não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');

    //Se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
        break;
    
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tenativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);