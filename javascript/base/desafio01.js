const precoCombustivel = 5.5;
const combustivelPorKm = 1;
let kmRodado = 10;
let resultado = (kmRodado / combustivelPorKm)*precoCombustivel;
console.log("O preco foi: " + resultado.toFixed(2));