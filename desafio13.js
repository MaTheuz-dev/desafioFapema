/*13. Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.*/

function areaCirculo (raioCirc, piValor){
  return (raioCirc**2)*(piValor);
}

let raio = prompt("Digite o raio do círculo, e calcularemos a área");

let result = areaCirculo(raio, 3.1415);

console.log("A área do círculo é: "+result);