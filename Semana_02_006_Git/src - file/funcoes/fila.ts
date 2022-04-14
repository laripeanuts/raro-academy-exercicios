import { writeFile, readFile } from 'fs';
import { resolve } from 'path';

const ARQUIVO_DE_FILA = `${resolve('.')}/files/fila.txt`;

/**
 * Os métodos escritos abaixo implementam uma fila de mensagens escritas em
 * arquivo de texto, presente na pasta "files". A cada mensagem escrita nesta fila,
 * (através do método `escreveNaFila`) o código escreve a frase ao final do arquivo.
 * O método `consumirDafila` retira a primeira mensagem escrita no arquivo e a retorna.
 *
 * As funções abaixo estão todas escritas utilizando callbacks como soluções
 * para a manipulação dos arquvos.
 *
 * Tranforme a solução escrita abaixo em um código válido utilizando promises ou
 * async/await.
 */

// Ordem pra resolver! Dica! writeFileSync
// escreveArquivo
// leArquivo
// zerarAquivo
// escreveNaFila
// consumirDaFila

export async function zerarAquivo(): Promise<void> {
  return new Promise ((resolve, reject) => {
    escreveArquivo('');
    resolve();
  });
};

export async function leArquivo(): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(ARQUIVO_DE_FILA, 'utf8', (error, resultado) => {
      if (error) {
        reject(error);
      }
  
      resolve(resultado);
    });
  });
}

export async function escreveArquivo(texto: string): Promise<void> {
  return new Promise((resolve, reject) => {
    writeFile(ARQUIVO_DE_FILA, texto, 'utf8', function(error) {
      if (error) {
        reject(error);
      }
  
      resolve();
    });
});
}

export async function escreveNaFila(texto: string): Promise<void> {
  leArquivo().then((textoAtual) => {
    console.log('texto encontrado anteriormente no arquivo', textoAtual);
    const novoTexto = textoAtual ? `${textoAtual}\n${texto}` : texto;

    escreveArquivo(novoTexto).then(() => {
      console.log('texto escrito no arquivo');
    }).catch((error) => {
      console.log(error);

    });

  }).catch((error) => {
    console.log(error);

  })
}

export async function consumirDaFila() {
  leArquivo().then((textoAtual) => {

    console.log('texto encontrado anteriormente no arquivo', textoAtual);

    const [linhaConsumida, ...linhas] = textoAtual.split('\n');

    console.log('======== linha consumida', linhaConsumida);
    escreveArquivo(linhas.join('\n')).then(() => {
      console.log('texto escrito no arquivo');

    }).catch((error) => {
      console.log(error);

    });

  }).catch((error) => {
    console.log(error);

  });

  return "";
}
