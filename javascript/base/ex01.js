const nota1 = 6;
const nota2 = 4;
const nota3 = 3;
const media = ((nota1 + nota2 + nota3)/3).toFixed(2);

console.log(media);

if(media > 7){
    console.log("Aprovado");
}else if(media <= 7 && media >= 5){
    console.log("Exame");
}else{
    console.log("Reprovado");
}