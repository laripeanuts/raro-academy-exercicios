const ehPrimo = (num: number) => {
  for(let i = 0; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

ehPrimo(5)