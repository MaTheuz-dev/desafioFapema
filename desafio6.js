/*6. Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".*/

let nota = prompt("Digite uma nota entre 0 e 10");
if(nota>=7){
  console.log("Aprovado")
}else if(nota>=5 && nota<7){
  console.log("Recuperação");
}else{
  console.log("Reprovado");
}