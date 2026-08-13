let letters = ['a', 'b', 'c', 'd', 'e'];
console.log(letters);
letters.splice(0,1); //no indice 0, remove 1 elemento (romove a letra 'a'.)
console.log(letters);

console.log("---\n");

let lettersA = ['a', 'b', 'c', 'd', 'e'];
console.log(lettersA);
lettersA.splice(2,1); //no indice 2, remove 1 elemento (remove a letra 'c'.)
console.log(lettersA);

console.log("---\n");

let lettersB = ['a', 'b', 'c', 'd', 'e'];
console.log(lettersB);
lettersB.splice(-1,1); //no último indice, remove 1 elemento (remove a letta 'e')
console.log(lettersB);

console.log("---\n");

let lettersC = ['a', 'b', 'c', 'd', 'e'];
console.log(lettersC);
lettersC.splice(-3,1); //no indice -3, do final para o início, remove 1 elemento (remove a letra 'c')
console.log(lettersC);

console.log("---\n");

let lettersD = ['a', 'b', 'c', 'd', 'e'];
console.log(lettersD);
lettersD.splice(0,2); // remove dois elementos a partir do índice 0. (remove as letras 'a' e 'b')
console.log(lettersD);

console.log("---\n");

//slice
let lettersE = ['a', 'b', 'c', 'd', 'e'];
console.log(lettersE);
lettersE.slice(0,2); //apaga dois elementos a partir do indice 0. (mas não altera o array original)
let resultado = (lettersE.slice(0,2));
console.log(resultado); //resultado do slice
console.log(lettersE); //slice não altera o array original, portando imprime o array em seu estado original.