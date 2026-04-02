const tripCosts = [
  { label: 'nocleg', amount: 420, paidBy: 'Anna' },
  { label: 'paliwo', amount: 260, paidBy: 'Piotr' },
  { label: 'jedzenie', amount: 180, paidBy: 'Anna' },
  { label: 'bilety', amount: 140, paidBy: 'Ola' },
];

const totalTripCost = tripCosts.reduce((acc, { amount }) => acc + amount, 0);
const costByPersonObj: Record<string, number> = {};

for (const { paidBy, amount } of tripCosts) {
  costByPersonObj[paidBy] = (costByPersonObj[paidBy] || 0) + amount;
}

const maxValue = Math.max(...Object.values(costByPersonObj));
const maxPerson = Object.entries(costByPersonObj).find(
  ([, value]) => value === maxValue,
);

const settlements = Object.entries(costByPersonObj).map(([name, paid]) => {
  const diff = paid - totalTripCost / Object.keys(costByPersonObj).length;
  return `${name}: ${Math.abs(diff).toFixed(2)} zł ${diff > 0 ? 'do otrzymania' : 'do oddania'} \n`;
});

console.log(`
    Łączny koszt wyjazdu: ${totalTripCost} zł
    Osoba, która zapłaciła najwięcej to: ${maxPerson}
    `);

console.log(costByPersonObj);
console.log(settlements);
