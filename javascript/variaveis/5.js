/*const x = Symbol(12);
const y = x;

console.log(x === y);*/

const x = {
    nome: 'x',
    idade: 30,
    falar: () => {
        console.log(`${this.nome}`);
    }
};

const y = x.falar;
x.falar();
y();