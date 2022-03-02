let arrayItems = ['a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'a', 'e'];

type meuObj = Record<number, string>;

export const uniq = <T extends meuObj>(args: T[]): meuObj[] => {
  let novaLista: meuObj[] = [];
  let novoArr: T[] = args.reduce((acc: any, curr): T[] => (acc[curr] = (''), acc), {});
  let b = [];Object.keys(novoArr);
  // let resultado = b.split(',');  
  console.log("args: " + args)
  console.log("novoarr: " + novoArr)
  console.log("b: " + b)
  console.log("novaLista: " + novaLista)

  return novaLista;
};

console.log("console: " + uniq(arrayItems));

const unique = function(arr: Array<any>) {
  let novoArr: any = arr.reduce((acc: any, curr: any) => (acc[curr] = '', acc), {});
  return Object.keys(novoArr);
}; console.log(unique(arrayItems));

