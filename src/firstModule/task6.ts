type Movies = {
  title: string;
  category: string;
  rating: number;
  watched: boolean;
}[];

const movies: Movies = [
  { title: 'Arrival', category: 'sci-fi', rating: 8.1, watched: true },
  { title: 'Whiplash', category: 'drama', rating: 8.5, watched: false },
  { title: 'Dune', category: 'sci-fi', rating: 8.0, watched: false },
  { title: 'Inside Out', category: 'animation', rating: 8.1, watched: true },
];

const unwatchedMovies = movies.filter((el) => !el.watched);
const bestGradeMovies = movies.filter((el) => el.rating > 8.0);

const getAvgRating = (movies: Movies) =>
  (movies.reduce((sum, m) => sum + m.rating, 0) / movies.length).toFixed(2);

console.log(
  'Nieobejrzane filmy:',
  unwatchedMovies.map((el) => el.title),
);

console.log(
  'Ocena > 8:',
  bestGradeMovies.map(({ title }) => title),
);

console.log('Średnia ocen:', getAvgRating(movies));
