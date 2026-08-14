const car = ["fusca", "ferrari", "BMW"];
car.splice(0,1);
console.log(car); //porque o splice foi executado mesmo o array sendo "const"???

let fruits = [
    {id:1, name: "Banana"},
    {id:2, name: "Orange"},
    {id:3, name: "Raspberry"},
];

console.log(fruits);
console.log(fruits[0]);
fruits.splice(0,2);
console.log(fruits);

console.log("---------\n");

let numbers = [1, 2, 3, 4, 5];
numbers.splice(0,1, 9); // remove no indice 0, um elemento e adiciona o elemento o 9 no indice zero.
console.log(numbers);
let resultado = numbers.find(n => n !==9);
console.log(resultado);

console.log("--- Filtro ---");
let palavras = ["fofin", "cute", "bah", "Funny"];
let palavrasComF = palavras.filter(palavra => palavra.toLowerCase().startsWith("f"));
console.log(palavrasComF);
console.log(palavras.length > 1 ? "array é grande" : "pequeno");