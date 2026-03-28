const repairs = [
  { id: 1, client: 'Anna', device: 'laptop', status: 'nowe' },
  { id: 2, client: 'Piotr', device: 'telefon', status: 'w trakcie' },
  { id: 3, client: 'Ola', device: 'tablet', status: 'zakończone' },
];

const findRepairById = repairs.find((el) => el.id === 2);

const updateStatus = (
  repairsArray: Record<string, any>[],
  id: number,
  newStatus: string,
) => {
  return repairsArray.map((el) =>
    el.id === id ? { ...el, status: newStatus } : el,
  );
};

const updatedRepairs = updateStatus(repairs, 2, 'zakończone');

console.log('Znalezione zgłoszenie po ID: ', findRepairById);
console.log(
  'Zgłoszenia w trakcie: ',
  repairs.filter((el) => el.status === 'w trakcie').length,
);

console.log('Oryginalna tablica: ', repairs);
console.log('---');
console.log('Zaktualizowana tablica: ', updatedRepairs);
