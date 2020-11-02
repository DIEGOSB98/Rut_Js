const numericalSeries = [7, 2, 3, 4, 5, 6, 7, 2].reverse();

const getDigit = (rut) => {
    const result = rut.split('').map((x, i) => {
        const number = numericalSeries[i];
        return x * number;
    }).reverse();
    const digit = Math.floor(11 - (result.reduce((a, b) => a + b, 0) % 11));
    return digit === 10 ? 'K' : digit === 11 ? 0 : digit;
}

console.log(getDigit('30686957'));
