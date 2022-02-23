//4. ainda com o mesmo exemplo dos alunos, implementar agora um método chamado `orderBy`. Esse método deverá receber um parâmetro do tipo array de objetos, e outro parâmetro, um array de strings. O método deverá retornar um novo array, com os objetos ordenados de acordo com o critério do array de strings. Importante: O array original deve ser mantido intacto. Abaixo, segue um exemplo do funcionamento esperado:

const alunos2 = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

function orderBy(alunos: any[], chaves: string[ ]){
  let alunosMod = collect(alunos, chaves);
  return chaves.reverse().map(function(chave) {
    return alunosMod.sort(function(itemA, itemB) {
      let x = itemA[chave];
      let y = itemB[chave];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }).pop();
}

function collect(itens: any[], chaves: string[]) {
  return itens.map(function(item) {
    const novoAluno: any = {};
    chaves.map(function(chave) {
      return novoAluno[chave] = item[chave];
      });
    return novoAluno;
    });
}

 console.log(orderBy(alunos2, ["nota", "nome"]));
