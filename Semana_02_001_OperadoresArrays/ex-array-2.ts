//2. A lista de meses abaixo está incompleta (e incorreta!). Utilize os métodos do array para adicionar os meses faltantes. Como adicionar os meses de "fev", "mai", "ago", "nov" nas posições corretas?

const meses = ["jan", "mar", "mar", "abr", "jun", "jul", "set", "out", "dez"];

//splice(indice, deleteCount, Element+)
meses.splice(1, 0, "fev");
meses.splice(2, 1);
meses.splice(4, 0, 'mai');
meses.splice(7, 0, 'ago');
meses.splice(10, 0, 'nov');

console.log(`Exercício 2: ${meses} `);