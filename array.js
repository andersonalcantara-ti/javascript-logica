/*
Estuadando Arrays
Cenário: Construir uma lista, e depois percorrer a lista pra mostrar valor de uma das casas
 */

console.log("---------------");
console.log("--- Arrays ---");
console.log("---------------\n");

let frutas = ["laranja", "maçã", "uva", "pera", "caqui"];
console.log(frutas);
console.log();
console.log(frutas[2]); //acessa o segundo elemento dentro do array. (Contagem começa com 0,1,2,3...)
console.log();
console.log("O quarto elemento é: " + frutas[4]);
console.log("O elemenro zero é: " + frutas[0]);
console.log();

frutas[0] = "banana"; //Altera o valor do item na posição 0.
console.log("O elemenro zero agora é: " + frutas[0]);

console.log();
console.log("O array possui " + frutas.length + " itens."); //mostra a quantidade de itens no array
console.log();

frutas.push("tangerina"); //adiciona um item no final da lista.
console.log(frutas);
console.log("O array possui " + frutas.length + " itens.");