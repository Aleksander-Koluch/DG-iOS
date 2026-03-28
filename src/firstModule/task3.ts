const shoppingList = [
  { name: 'chleb', quantity: 2, urgent: true },
  { name: 'mleko', quantity: 1, urgent: false },
  { name: 'jajka', quantity: 10, urgent: true },
  { name: 'makaron', quantity: 3, urgent: false },
];

for (const { name } of shoppingList) {
  if (!name) continue;
  console.log(`Produkt: ${name}`);
}

const onlyUrgentProductsFilter = shoppingList.filter((el) => el.urgent);
const onlyUrgentProducts = onlyUrgentProductsFilter.map((el) => el.name);
console.log(onlyUrgentProducts);

const upperCaseProducts = shoppingList.map((el) =>
  el.name ? el.name.toUpperCase() : '',
);
console.log(upperCaseProducts);

console.log(upperCaseProducts.sort());
