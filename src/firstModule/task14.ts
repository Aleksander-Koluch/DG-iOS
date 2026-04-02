type Task = { id: number; title: string; done: boolean };

let todos: Task[] = [
  { id: 1, title: 'Oddać projekt', done: false },
  { id: 2, title: 'Przeczytać rozdział', done: true },
  { id: 3, title: 'Przygotować prezentację', done: false },
];

const addTask = (tasks: Task[], newTask: Task) => {
  return [...tasks, newTask];
};
const markTaskAsDoneById = (tasks: Task[], taskId: number) => {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, done: true } : task,
  );
};

const getOnlyTodoTasks = (tasks: Task[]) => {
  return tasks.filter((task) => !task.done);
};

const todosAfterAdd = addTask(todos, {
  id: 4,
  title: 'Zrobić task 14',
  done: false,
});

console.log('---------------------------');
console.log('Zadania przed dodaniem: ', todos);
console.log('---------------------------');
console.log('Zadania po dodaniu: ', todosAfterAdd);
console.log('---------------------------');
console.log('Po zmianie na gotowe:', markTaskAsDoneById(todosAfterAdd, 3));
console.log('---------------------------');
console.log('Tylko zadania niewykonane: ', getOnlyTodoTasks(todosAfterAdd));
