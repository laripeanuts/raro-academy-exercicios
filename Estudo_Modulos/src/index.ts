interface NumerosParametros {
  n1: number;
  n2: number;
}

const soma = (nums: NumerosParametros) => nums.n1 + nums.n2;

console.log(soma({n1: 5, n2: 10}));