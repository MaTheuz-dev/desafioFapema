/*15. Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções:
x = 10     y = 20     z = x+y
console.log(z) */

function refatorar(a,b){
  let c = a+b;
  return c;
}

let x = 10;
let y = 20;

let z = refatorar(x,y);

console.log(z);
