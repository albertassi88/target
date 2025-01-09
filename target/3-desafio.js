const faturamento = require('./dados.json');

const faturamentoValido = faturamento.filter(dia => dia.valor > 0);

const menorValor = Math.min(...faturamentoValido.map(dia => dia.valor));

const maiorValor = Math.max(...faturamentoValido.map(dia => dia.valor));

const somaFaturamento = faturamentoValido.reduce((acc, dia) => acc + dia.valor, 0);
const mediaMensal = somaFaturamento / faturamentoValido.length;

const diasAcimaMedia = faturamentoValido.filter(dia => dia.valor > mediaMensal).length;

console.log(`Menor valor de faturamento: ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: ${maiorValor.toFixed(2)}`);
console.log(`Número de dias acima da média mensal: ${diasAcimaMedia}`);