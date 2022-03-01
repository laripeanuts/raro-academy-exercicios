// Exercícios: promises

// 1. Utilizando o enunciado e código do exercício "as rosas não falam", presentes no bloco de exercícios anterior, você deve implementar a mesma solução, porém utilizando promises e funções async/await (**os dois formatos**). **Dica**: Os `setTimeout`'s dos métodos dos versos devem ser sustituídos por timeouts promisificados. Uma possível implementação de timeout em modo promise é:

const rosasNaoFalamPromise = () => {
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

  const queixoMeAsRosas = () => {
    return timeout("Queixo-me às rosas");
  };

  const masQueBobagem = () => {
    return timeout("Mas que bobagem");
  };

  const asRosasNaoFalam = () => {
    return timeout("As rosas não falam");
  };

  const simplesmenteAsRosasExalam = () => {
    return timeout("Simplesmente as rosas exalam");
  };

  const oPerfumeQueRoubamDeTi = () => {
    return timeout("O perfume que roubam de ti, ai");
  };

    queixoMeAsRosas()
    .then(() => masQueBobagem())
    .then(() => asRosasNaoFalam())
    .then(() => simplesmenteAsRosasExalam())
    .then(() => oPerfumeQueRoubamDeTi())
    .catch(() => erro());
}

rosasNaoFalamPromise();