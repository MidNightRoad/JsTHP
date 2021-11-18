var factor = prompt("Donne un chiffre");
 function factorial (n) {
    if (n == 0 || n == 1)
      return 1 ;
    if (factor[n] > 0)
      return factor[n];
  return factor[n] = factorial(n-1) * n;
}
console.log(factorial(factor))