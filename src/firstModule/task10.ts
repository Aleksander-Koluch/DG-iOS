const activities = [
  { type: 'bieg', minutes: 35, calories: 320 },
  { type: 'rower', minutes: 50, calories: 410 },
  { type: 'spacer', minutes: 20, calories: 90 },
  { type: 'siłownia', minutes: 60, calories: 450 },
];

const totalMinutes = activities.reduce((acc, { minutes }) => acc + minutes, 0);
const totalCalories = activities.reduce(
  (acc, { calories }) => acc + calories,
  0,
);
const longActivities = activities.filter(({ minutes }) => minutes > 30);

const avgTime = totalMinutes / activities.length;

console.log(`
Łączny czas: ${totalMinutes} min
Łączne kalorie: ${totalCalories} kcal
Długie aktywności: ${longActivities.length}
Średni czas wszystkich ćwiczeń: ${avgTime.toFixed(1)} min
`);
