// O método responde a frase incorretamente, pois cita a frase do filme Comando para Matar. O console.log está se referindo ao valor da variavel Let dentro do escopo que ele tem acesso. Não fizemos validacao que a frase correta fosse implementada. Uma forma de corrigir é passando o console.log para dentro do if.

function exterminadorDoFuturo() {
  let frase =
  "Eu como Boinas Verdes no café da manhã. E agora eu estou com muita fome";

  if (true) {
    let frase = "hasta la vista, baby"
    console.log(frase);
  }
}

exterminadorDoFuturo();

