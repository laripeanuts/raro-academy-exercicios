// METODO OBJETO

export class movie {
  nome: string;
  ano: number;
  diretor: string;
  premios: Array<string>;
}

let movie1: movie = {
  nome: "Pulp Fiction",
  ano: 1994,
  diretor: "Quentin Tarantino",
  premios: ["Oscar: Melhor Roteiro Original"]
}

let movie2: movie = {
  nome: "A Chegada",
  ano: 2016,
  diretor: "Dennis Villeneuve",
  premios: ["Critic's Choice Award: Melhor Roteiro Adaptado"]
}

let movie3: movie = {
  nome: "Encontro e Desencontros",
  ano: 2003,
  diretor: "Sofia Copolla",
  premios: ["Oscar: Melhor Roteiro Original"]
}

let movie4: movie = {
  nome: "Cinema Paradiso",
  ano: 1988,
  diretor: "Giuseppe Tornatore",
  premios: ["Oscar: Melhor Filme Estrangeiro"]
}

let movie5: movie = {
  nome: "Que Horas Ela Volta",
  ano: 2016,
  diretor: "Anna Muylaert",
  premios: ["Grande Prêmio do Cinema Brasileiro: Melhor Longa-Metragem"]
}

let movieList = [movie1, movie2, movie3, movie4, movie5];
console.log(movieList)

// METEODO ARRAY

let filme1 = {
  "nome": "Pulp Fiction",
  "ano": 1994,
  "diretor": "Quentin Tarantino",
  "premios": "Oscar: Melhor Roteiro Original"
};

let filme2 = {
  "nome": "A Chegada",
  "ano": 2016,
  "diretor": "Denis Villeneuve",
  "premios": "Critic's Choice Award: Melhor Roteiro Adaptado"
};

let filme3 = {
  "nome": "Encontro e Desencontros",
  "ano": 2003,
  "diretor": "Sofia Copolla",
  "premios": "Oscar: Melhor Roteiro Original"
};

let filme4 = {
  "nome": "Cinema Paradiso",
  "ano": 1988,
  "diretor": "Giuseppe Tornatore",
  "premios": "Oscar: Melhor Filme Estrangeiro"
};

let filme5 = {
  "nome": "Que Horas Ela Volta? ",
  "ano": 2015,
  "diretor": "Anna Muylaert",
  "premios": "Grande Prêmio do Cinema Brasileiro: Melhor Longa-Metragem"
};

let filmesLista = [filme1, filme2, filme3, filme4, filme5];

console.log(filmesLista)

//MÉTODO FUNÇAÕ

function filmes (nome: string, ano: number, diretor: string, premio: Array<string>){
  this.nome = nome;
  this.ano = ano;
  this.diretor = diretor;
  this.premio = premio;
}
 let filmeA = new filmes("Pulp Fiction", 1994, "Quentin Tarantino", ["Oscar: Melhor Roteiro"])
 let filmeB = new filmes("A Chegada", 2016, "Denis Villeneuve", ["Critic's Choice Award: Melhor Roteiro"])
 let filmeC = new filmes("Encontro e Desencontros", 2003, "Sofia Copolla", ["Oscar: Melhor Roteiro Original"])
 let filmeD = new filmes("Cinema Paradiso", 1988, "Giuseppe Tornatore", ["Oscar: Melhor Filme Estrangeiro"])
 let filmeE = new filmes("Que Horas Ela Volta?", 2015, "Anna Muylaert", ["Oscar: Melhor Roteiro"])

let colecaoFilmes = [filmeA, filmeB, filmeC, filmeD, filmeE]
console.log(colecaoFilmes)
