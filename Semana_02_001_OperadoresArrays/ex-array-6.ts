// 6. Dada a lista de usuarios do nosso sistema, manipule o array, para gerar em duas estruturas separadas a coleção de usuários que estão ativos e a coleção de usuários que estão inativos.

const usuarios = [
  { nome: "Diego", idade: 23, ativo: true },
  { nome: "Gabriel", idade: 15, ativo: false },
  { nome: "Lucas", idade: 30, ativo: false },
];

const ativos = (usuarios: { ativo: boolean; }) => usuarios.ativo;
const inativos = (usuarios: { ativo: boolean; }) => !usuarios.ativo;

const usuariosAtivos = usuarios.filter(ativos)
const usuariosInativos = usuarios.filter(inativos)

console.log(usuariosAtivos);
console.log(usuariosInativos);