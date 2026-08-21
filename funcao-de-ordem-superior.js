//Higher Order Function (HOF) - Função de Ordem Superior

function calcular(valorUm, valorDois){
    let total = somar(valorUm , valorDois);
    return total;
}

function somar(valorUm, valorDois){
    return valorUm + valorDois;
}

console.log(calcular(1, 2));