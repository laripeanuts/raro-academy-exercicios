/**
 * Retorna um array com todos os elementos únicos.
 * 
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 * 
 * @param items array com itens de qualquer tipo.
 * 
 * @returns somente os itens definidos.
 */
export const uniq = <T>(args: T[]): T[] => {
  let resultado = args.sort().reduce((inicio, atual) => {
    if (inicio.length === 0 || inicio[inicio.length - 1] !== atual) {
     inicio.push(atual);
    }
 
    return inicio;
  }, [])
 
  return resultado;
}