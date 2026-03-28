const tasks = ['zajęcia', 'zakupy', 'trening'];

function createDayPlan(name: string, tasks: string[] = ['umycie samochodu']) {
  const joinedTasks = tasks.join(', ');

  const additionalMessage =
    tasks.length > 2 ? 'Gratulacje, ambitnie.' : 'Zrób coś jeszcze ok';

  return `Nazywasz się ${name} i Twój plan na dziś to: ${joinedTasks}. ${additionalMessage}`;
}

console.log(createDayPlan('Tadeusz Kubica', tasks));

console.log(createDayPlan('Tadeusz Kubica'));
