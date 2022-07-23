enum Trabalho {
    Atriz,
    Padeiro
}

type Trabalhadores = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Trabalhadores = {
    nome: 'Maria',
    idade: 29,
    profissao: Trabalho.Atriz
}

let pessoa2: Trabalhadores = {
    nome: 'Roberto',
    idade:  19,
    profissao: Trabalho.Padeiro
}

let pessoa3: Trabalhadores = {
    nome: 'Laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Trabalhadores = {
    nome: 'Carlos',
    idade: 19,
    profissao: Trabalho.Padeiro
}