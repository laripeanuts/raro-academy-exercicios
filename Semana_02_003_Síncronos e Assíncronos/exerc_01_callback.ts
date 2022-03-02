//** */ 1. As rosas não falam (https://www.letras.mus.br/cartola/44898/), música do compositor Cartola, possui a seguinte estrofe:
// ```
//  Queixo-me às rosas
//  Mas que bobagem
//  As rosas não falam
//  Simplesmente as rosas exalam
//  O perfume que roubam de ti, ai
// ```

// No código abaixo, esta música foi implementada, porém cada verso leva um tempo indefinido (aleatório) para ser "cantado" na tela. A consequência disso é que raramente a música será cantada da forma correta.

// Modifique os métodos de versos, utilizando callbacks, de forma que a música seja reproduzida na **`sequência correta`**. o tipo do callback já está definido em `callbackFn`

// METODO QUE ACHEI MAIS CORRETO

const asRosasNaoFalam = () => {
  type callbackFn = () => void;

  const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);
  
  const queixoMeAsRosas = (callback: callbackFn) => {
    setTimeout(() => {
      console.log('Queixo-me às rosas');  
      return callback();
    }, geraIntervaloAleatório());
  };

  const masQueBobagem = (callback: callbackFn) => {
    setTimeout(() => {
      console.log('Mas que bobagem');
      return callback();
    }, geraIntervaloAleatório());
  };

  const asRosasNaoFalam = (callback: callbackFn) => {
    setTimeout(() => {
      console.log('As rosas não falam');
      return callback();
    }, geraIntervaloAleatório());
  };

  const simplesmenteAsRosasExalam = (callback: callbackFn) => {
    setTimeout(() => {
      console.log('Simplesmente as rosas exalam');
      return callback();
    }, geraIntervaloAleatório());
  };

  const oPerfumeQueRoubamDeTi = (callback: callbackFn) => {
    setTimeout(() => {
      console.log('O perfume que roubam de ti, ai');
      return callback();
    }, geraIntervaloAleatório());
  };

  // Tentativa de cantar a música. Este bloco precisa ser modificado.
  queixoMeAsRosas(() => {
    masQueBobagem(() => {
      asRosasNaoFalam(() => {
        simplesmenteAsRosasExalam(() => {
          oPerfumeQueRoubamDeTi(() => {
            console.log("continua...")
          })
        })
      })
    })
  })
}

asRosasNaoFalam();

// METODO CALLBACK

const asRosasNaoFalamCallback = () => {
  type callbackFn = () => void;

  const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);
  
  const queixoMeAsRosas = ():ReturnType<callbackFn> => {
    setTimeout(() => {
      console.log('Queixo-me às rosas');  
      masQueBobagem();
    }, geraIntervaloAleatório());
  };

  const masQueBobagem = ():ReturnType<callbackFn> => {
    setTimeout(() => {
      console.log('Mas que bobagem');
      asRosasNaoFalam();
    }, geraIntervaloAleatório());
  };

  const asRosasNaoFalam = ():ReturnType<callbackFn> => {
    setTimeout(() => {
      console.log('As rosas não falam');
      simplesmenteAsRosasExalam();
    }, geraIntervaloAleatório());
  };

  const simplesmenteAsRosasExalam = ():ReturnType<callbackFn> => {
    setTimeout(() => {
      console.log('Simplesmente as rosas exalam');
      oPerfumeQueRoubamDeTi();
    }, geraIntervaloAleatório());
  };

  const oPerfumeQueRoubamDeTi = ():ReturnType<callbackFn>  => {
    setTimeout(() => {
      console.log('O perfume que roubam de ti, ai');
    }, geraIntervaloAleatório());
  };

  // Tentativa de cantar a música. Este bloco precisa ser modificado.
  queixoMeAsRosas();
}

asRosasNaoFalamCallback();

// METODO HADOUKEN 

function asRosasNaoFalamHadouken(){
  const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);
  
  // métodos de versos. Estes métodos deverão ser modificados.

  const  queixoMeAsRosas = ():void => {
    setTimeout(() => {
      console.log('Queixo-me às rosas')
      setTimeout(() => {
        console.log('Mas que bobagem');
        setTimeout(() => {
          console.log('As rosas não falam');
          setTimeout(() => {
            console.log('Simplesmente as rosas exalam');
            setTimeout(() => {
              console.log('O perfume que roubam de ti, ai');
            }, geraIntervaloAleatório());
          }, geraIntervaloAleatório());          
        }, geraIntervaloAleatório());
      }, geraIntervaloAleatório());
    }, geraIntervaloAleatório());
  };

  queixoMeAsRosas();
}

asRosasNaoFalamHadouken();
