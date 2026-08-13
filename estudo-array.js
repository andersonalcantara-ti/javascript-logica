console.log("Olá Mundo");
console.log("---------------\n");

console.log("---------------");
console.log("--- Arrays ---");
console.log("---------------\n");

let characters = ["warrior", "amazon",]
console.log("Tamanho do array é: " + characters.length);
console.log(characters[1], characters[0], characters[3]);
characters.push("archer"); //adiciona o item no final do array
console.log(characters);
console.log(characters[2]);
characters.pop(); //remove o último item do array
console.log(characters);
characters.unshift("paladin"); //adiciona novo item no começo do array
console.log(characters);
characters.shift(); //remove o primeiro item do array
console.log(">>>");
console.log(characters);
characters.splice(0,1); //no indice 0, remove 1 item. (Na posição 0, remove 1 item.)
console.log(characters);
