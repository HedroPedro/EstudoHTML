class Pessoa {
    falar(){
        console.log(`Meu nome é: ${this.nome}`);
    }

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const a = new Pessoa('Pedro', 18);
console.log(a);
a.falar();