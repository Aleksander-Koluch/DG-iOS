const grades = [3.0, 4.0, 5.0, 3.5, 4.5];
const minAvg = 3.5;

const avgGrades = (gradesTable: number[]) => {
  if (gradesTable.length === 0) {
    return 'Nie podano ocen';
  }
  const avg =
    gradesTable.reduce((acc, grade) => acc + grade, 0) / gradesTable.length;

  const status = avg >= minAvg ? 'zaliczone' : 'niezaliczone';

  let classification = '';

  if (avg >= 4.5) {
    classification = 'bdb';
  } else if (avg >= 4.0) {
    classification = 'db';
  } else {
    classification = 'dst';
  }

  return {
    average: avg.toFixed(2),
    status,
    classification,
  };
};

console.log(avgGrades(grades));
