// 3. Implementar o método de pick que receba um parâmetro do tipo array de objetos, e outro parâmetro do tipo array de strings. Este método deverá retornar todos os itens do array original, porém, mantendo somente os atributos com os nomes passados no segundo atributo. Importante: o array original deve ser mantido intacto. Abaixo, segue um exemplo do funcionamento esperado:

 // METODO 1 MAP

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

type meuObj = Record<string, unknown>

function pick<T extends meuObj>(itens: T[], ...chaves: (keyof T)[]) {
  return itens.map(function(item) {
    const novoItens: meuObj = {};
    chaves.map(function(chave) {
      return (novoItens as T)[chave] = item[chave];
      });
    return novoItens;
  });
}

console.log(pick(alunos, "nome", "bolsista"));

// METODO 2 COLECT

 function colect(item: any[], chaves: string[]) {
  return item.map(function(item) {
    return chaves.map(function(chave) {
      return item[chave];
    })
  })
}
console.log(colect(alunos, ["nome", "nota"]));

// METODO 3 OMIT

function omit(item: any[], chave: string[]) {
  return item.map(function(item) {
    const obj = {...item};
    chave.forEach(function(chave){
      delete obj[chave];
    })
    return obj
  })
}

console.log(omit(alunos, ["nome", "nota"]));

// METODO 4 COMPLEX OBJ

//  type complexObject = Record<string, unknown>
//  const pick1 = <T extends complexObject>(
//    records: T[],
//    ...args: (keyof T)[]
//  ): complexObject[] => {
//    const resultado: complexObject[] = [];

//    for(const item of records) {
//      const objeto: complexObject = {}
//      for(const chave of args) {
//        (objeto as T)[chave] = item[chave];
//      } 
//      resultado.push(objeto);
//    }
//    return resultado;
// }

// function pick(items, chaves) {
//   return items.map(function(item) {
//     return chaves
//   })
// }

// console.log(
//   JSON.stringify(
//   pick(alunos, ["nome", "nota"]),
//   null,
//   2
//   )
// );


// // METODO CLASS OBJ
// class Aluno {
//   constructor(nome: string, nota: number, bolsista: boolean) {
//     this.nome = nome;
//     this.nota = nota;
//     this.bolsista = bolsista;
//   }

//   nome: string;
//   nota: number;
//   bolsista: boolean;
// }

// const alunos: Aluno[] = [
//   new Aluno("João", 7.3, false),
//   new Aluno("Maria", 9.2, true),
//   new Aluno("Pedro", 9.8, false),
//   new Aluno("Ana", 8.7, true),
// ];

// // function pick(alunos: Aluno[], chaves: string[]) {
// //   return alunos.map(function(aluno) {
// //     const novoAluno: any = {};
// //     chaves.map(function(chave) {
// //       return novoAluno[chave] = aluno[chave];
// //       });
// //     return novoAluno;
// //     });
// // }
// // console.log(pick(alunos, ["nome", "nota"]));.

// const alunos2 = [
//   { nome: "João", nota: 7.3, bolsista: false },
//   { nome: "Maria", nota: 9.2, bolsista: true },
//   { nome: "Pedro", nota: 9.8, bolsista: false },
//   { nome: "Ana", nota: 8.7, bolsista: true },
// ]; 

// console.log(alunos)
// console.log(alunos2)
