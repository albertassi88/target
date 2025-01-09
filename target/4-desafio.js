// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 


const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const calcularTotalFaturamento = (faturamento) => {
    return Object.values(faturamento).reduce((total, valor) => total + valor, 0);
};

const exibirPercentuais = (faturamento) => {
    const total = calcularTotalFaturamento(faturamento);
    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / total) * 100;
        console.log(`O estado ${estado} representa ${percentual.toFixed(2)}% do faturamento total.`);
    }
};

exibirPercentuais(faturamento);
