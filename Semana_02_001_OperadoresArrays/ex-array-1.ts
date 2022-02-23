// 1. Abaixo você tem a lista de todos os ingredientes necessários para fazer um Hambúrguer. Utilizando o reduce, como você pode fazer para unir todos os itens do array em uma única string?

const ingredientes: string[] = [
  '2 hambúrgueres',
  'alface',
  'queijo',
  'molho especial',
  'cebola',
  'picles',
  'pão com gergelim'
];

// METODO 1 
const resultado = ingredientes.reduce(function(acumulador: string, atual: string):string { 
  return acumulador + atual;
})

console.log(`Exercício 1 - Metodo 1: ${resultado} `);

// METODO 2 
const fazUmBigMac = (ingredientes: string[]): string => {
  return ingredientes.reduce((acumulador: string, atual: string, teste): string => acumulador + atual)
}

console.log(`Exercício 1 - Metodo 2: ${fazUmBigMac(ingredientes)} `);