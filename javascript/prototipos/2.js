const pessoa = {
    idade: 10
}

const renan = {
    nome: 'renan',
    __proto__: pessoa
}

console.log(renan.idade)