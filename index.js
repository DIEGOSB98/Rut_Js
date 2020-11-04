const numbers = [7, 2, 3, 4, 5, 6, 7, 2].reverse();
// template
const input = document.querySelector('input');

const verifyRut = (rut) => {
    const result = getRut(rut).split('').map((x, i) => {
        return x * numbers[i];
    }).reverse();
    let digit = Math.floor(11 - (result.reduce((a, b) => a + b, 0) % 11));
    console.log(digit);
    return verifyDigit(rut, getDigit(digit));
}

const verifyDigit = (rut, digit) => {
    if (rut.length < 7) {
        return false;
    }
    const length = rut.length;
    const d = rut.substring(length - 1);
    console.log(d, digit);
    return d == digit
}
const getRut = (rut) => rut.toUpperCase().substring(0, rut.length - 1);
const getDigit = (digit) => digit === 10 ? 'k' : digit === 11 ? 0 : digit;

// events
input.addEventListener('input', (event) => {
    if (!verifyRut(event.target['value'])) {
        input.classList.add('is-invalid');
    } else {
        input.classList.remove('is-invalid')
        input.classList.add('is-valid');
    }
});
