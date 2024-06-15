const pessoa1 = {
    nome: 'Samuel',
    sobrenome: 'Bueno',
    idade: 52,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} fala a idade atual ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();