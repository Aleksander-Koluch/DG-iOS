const user = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  city: 'Katowice',
  age: 21,
  fieldOfStudy: 'informatyka',
  typeOfTransport: 'samochodem',
};

console.log(`${user['firstName']} ${user['lastName']}`);
console.log(
  `Studiuje zaocznie w ${user['city']} na kierunku ${user['fieldOfStudy']}. Na studia dojeżdża ${user['typeOfTransport']}.`,
);
console.log(`Użytkownik jest pełnoletni, ma ${user['age']} lat`);
