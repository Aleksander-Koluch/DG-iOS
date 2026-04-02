const expenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5];

const sum = expenses.reduce((acc, value) => acc + value, 0);
const avg = sum / expenses.length;
const highest = Math.max(...expenses);

const toFixedHandler = (value: number) =>
  !isNaN(value) ? `${value.toFixed(2).replace('.', ',')} PLN` : null;

console.log(`Suma wydatków: ${toFixedHandler(sum)}`);
console.log(`Średnia wydatków: ${toFixedHandler(avg)}`);
console.log(`Największy wydatek: ${toFixedHandler(highest)}`);
