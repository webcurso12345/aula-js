// FOR
const listaDeAlunos = ['John', 'Mark', 'Gabi'];

for (let i = 0; i < listaDeAlunos.length; i++) {
    console.log(listaDeAlunos[i]);
}

// FOR OF
for (aluno of listaDeAlunos) {
    console.log(aluno);
}

// FOR IN
const pessoa = {
    nome: 'John',
    idade: 33,
    cidade: 'Chicago',
    profissao: 'Desenvolvedor Web'
}

console.log(`Nome: ${pessoa.nome} / Idade: ${pessoa.idade} / Cidade: ${pessoa['cidade']}`);

for (k in pessoa) {
    console.log(k, pessoa[k]);
}

// WHILE
let j = 5;

while (j >= 0) {
    console.log(j);
    j--;
}

// DO WHILE
let k2 = 0;
do {
    console.log(k2);
    k2++;
} while (k2 <= 5);