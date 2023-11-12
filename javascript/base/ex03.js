const opcao = 1;
const compra = 19.5;
let totalPagar = 0;

if(opcao === 1){
    totalPagar = compra*0.9;
}else if(opcao === 2 || opcao === 3){
    totalPagar = compra*0.85;
}else if(opcao === 4){
    totalPagar = compra;
}else if(opcao === 5){
    totalPagar = compra*1.1;
}

console.log("O total a ser pago é: " + totalPagar.toFixed(2));