/*
Criando objetos e mostrando atributos
 */

console.log("---------------");
console.log("--- Objeto ---");
console.log("---------------\n");

const car = {
    cor: "azul",
    ano: 1996,
    portas: 2,
}

console.log(car.cor);
car.cor = "vermelho"; //muda a cor para vermelho. (Atributo cor do objeto, passa a ser vermelho)
console.log(car.cor);