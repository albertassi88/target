function verificaFibonacci(numero) {
    let a = 0, b = 1;
    while (b < numero) [a, b] = [b, a + b];
    return b === numero || numero === 0 
        ? `O número ${numero} pertence à sequência de Fibonacci.` 
        : `O número ${numero} não pertence à sequência de Fibonacci.`;
} 
console.log(verificaFibonacci(5));  