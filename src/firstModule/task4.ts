const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const dayType = 'laboratorium';

if (hasLaptop && hasCharger) {
  console.log('Komplet');
} else {
  console.log('Wróć się po ładowarkę');
}

console.log(
  dayType === 'laboratorium' && hasNotebook && hasCharger && hasLaptop
    ? 'Jesteś przygotowany na laby'
    : 'Nie jesteś przygotowany na laby',
);

if (dayType === 'laboratorium') {
  console.log('Będzie ciężko');
} else {
  console.log('Będzie lajtowo');
}
