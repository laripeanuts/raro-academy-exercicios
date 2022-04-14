// Exercícios: async e await

// 1. Utilizando o enunciado e código do exercício "as rosas não falam", presentes no bloco de exercícios anterior, você deve implementar a mesma solução, porém utilizando promises e funções async/await (**os dois formatos**). **Dica**: Os `setTimeout`'s dos métodos dos versos devem ser sustituídos por timeouts promisificados. Uma possível implementação de timeout em modo promise é:

// const timeout = (ms: number): Promise<void> => {
// return new Promise(resolve => setTimeout(resolve, ms));
// };

const desafioAsRosasNaoFalam = async () => {
  const geraIntervaloAleatório = (): number =>
    Math.floor(Math.random() * 3 * 1000);

  const erro = () => console.log("ERRO!");

  const timeout = (frase: string): Promise<void> => {
    const ms = geraIntervaloAleatório();
    return new Promise(resolve => {
      setTimeout(() => {
          console.log(frase);
          resolve();
        }, ms);
    });
  };

  const queixoMeAsRosas = async () => {
    return timeout("Queixo-me às rosas");
  };

  const masQueBobagem = async () => {
    return timeout("Mas que bobagem");
  };

  const asRosasNaoFalam = async () => {
    return timeout("As rosas não falam");
  };

  const simplesmenteAsRosasExalam = async () => {
    return timeout("Simplesmente as rosas exalam");
  };

  const oPerfumeQueRoubamDeTi = async () => {
    return timeout("O perfume que roubam de ti, ai");
  };

  await queixoMeAsRosas()
  .then(() => masQueBobagem())
  .then(() => asRosasNaoFalam())
  .then(() => simplesmenteAsRosasExalam())
  .then(() => oPerfumeQueRoubamDeTi())
  .catch(() => erro());
}

desafioAsRosasNaoFalam()