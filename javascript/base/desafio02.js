const precoGas = 5.78;
const precoEt = 4.79;
const combustivelPorKm = 1;
const kmRodado = 100;
const option = 2;
const combustivelGasto = kmRodado/combustivelPorKm;
let totalAPagar = 0;


switch(option){
    case 1: ///Gas
        totalAPagar = combustivelGasto*precoGas;
        break;
        
    case 2: ///Et
        totalAPagar = combustivelGasto*precoEt;
        break;
    
    default:
        console.log("ERRO!");
        return;
}

console.log("O total a ser pago é: " + totalAPagar.toFixed(2));