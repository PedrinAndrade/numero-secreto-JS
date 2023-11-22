let nome = prompt('Informe seu nome usuário:');

alert(`${nome}, boas vindas ao jogo do número secreto!`);
let numeroSecreto = 8;
console.log(numeroSecreto);

let chute = prompt('Escolha um número entre 1 e 10');
let pontos = 0;

//Se o chute for igual ao número secreto
if (numeroSecreto == chute) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    pontos += 100;

    if (pontos >= 100) {
        alert('Você é o vencedor!');
    }
    
} else {
    alert('Você errou!');
    alert('Tente ganhar novamente!');
}