type DayOfTheWeek =
  | 'poniedziałek'
  | 'wtorek'
  | 'środa'
  | 'czwartek'
  | 'piątek'
  | 'sobota'
  | 'niedziela';

type Lesson = {
  day: DayOfTheWeek;
  subject: string;
  room: string;
  online: boolean;
};

const schedule: Lesson[] = [
  { day: 'poniedziałek', subject: 'Programowanie', room: 'A12', online: false },
  { day: 'wtorek', subject: 'Bazy danych', room: 'online', online: true },
  { day: 'czwartek', subject: 'Grafika', room: 'B03', online: false },
  { day: 'piątek', subject: 'UX', room: 'online', online: true },
];

const getLessonsByDay = (dayOfTheWeek: DayOfTheWeek) => {
  return schedule.filter(({ day }) => day === dayOfTheWeek);
};

const getLessonsDescriptions = (lessons: Lesson[]) => {
  return lessons.map(
    ({ subject, room, online }) =>
      `${subject} - ${room} - ${online ? 'online' : 'stacjonarne'}`,
  );
};

const getLessonsByMode = (mode: 'online' | 'stacjonarne') => {
  return schedule.filter(({ online }) =>
    mode === 'online' ? online : !online,
  );
};

const dayOfTheWeek: DayOfTheWeek = 'wtorek';

console.log(`Plan dla ${dayOfTheWeek}:`, getLessonsByDay(dayOfTheWeek));
console.log('----------------------------------');
console.log(`Zajęcia: ${getLessonsDescriptions(schedule).join('\n')}`);
console.log('----------------------------------');
console.log('Ilość wszystkich zajęc:', schedule.length);
console.log('----------------------------------');
console.log('Tylko online:', getLessonsByMode('online'));
console.log('----------------------------------');
console.log('Tylko stacjonarne:', getLessonsByMode('stacjonarne'));
