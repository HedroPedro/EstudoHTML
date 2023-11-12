const opcao = "DUAS VEZES";
const compra = 19.5;
let totalPagar = 0;

if(opcao === "DEBITO"){
    totalPagar = compra*0.9;
}else if(opcao === "A VISTA" || opcao === "PIX"){
    totalPagar = compra*0.85;
}else if(opcao === "DUAS VEZES"){
    totalPagar = compra;
}else if(opcao === "+ DUAS VEZES"){
    totalPagar = compra*1.1;
}

console.log("O total a ser pago é: " + totalPagar.toFixed(2));