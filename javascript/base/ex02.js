const peso = 71;
const altura = 1.80;
const IMC = ((peso)/(altura*altura)).toFixed(2);

console.log(IMC);

if(IMC < 18.5){
    console.log("Abaixo do peso");
}else if(IMC >= 18.5 && IMC <= 25){
    console.log("Peso ideal");
}else if(IMC > 25 && IMC <= 30){
    console.log("Acima do peso");
}else if(IMC > 30 && IMC <= 35){
    console.log("Obesidade 1");
}else{
    console.log("Obesidade 2");
}