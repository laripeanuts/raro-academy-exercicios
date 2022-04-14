/**
 * Remove todos os valores "falsy" da lista de itens. Lembrando que false, 0, '',
 * null e undefined são valores falsy.
 * 
 * > Importante: O parâmetro "valores" não deve ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */

export function compact(items: unknown[]): unknown[]{
  let novoArray = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i]) {
      novoArray.push(items[i]);
    }
  }
  return novoArray;
};

