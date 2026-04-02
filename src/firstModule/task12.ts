const contacts = [
  {
    name: 'Anna Nowak',
    phone: '500-100-200',
    city: 'Katowice',
    favorite: true,
  },
  {
    name: 'Piotr Lis',
    phone: '501-300-700',
    city: 'Sosnowiec',
    favorite: false, //?
  },
  { name: 'Ola Marek', phone: '502-400-900', city: 'Katowice', favorite: true },
];

const getContactByCity = (city: string) => {
  return contacts.filter((el) => el.city === city);
};

const getOnlyFavorites = () => {
  return contacts.filter((el) => el.favorite);
};

const getClearInfo = () => {
  return contacts.map((el) => `${el.name.split(' ')[0]} - ${el.phone}`);
};

const normalizeName = (name: string) => name.toLowerCase();
const searchByPartialName = (name: string) => {
  return contacts.filter((el) =>
    normalizeName(el.name).includes(normalizeName(name)),
  );
};

console.log(getContactByCity('Sosnowiec'));
console.log('----------------');
console.log(getOnlyFavorites());
console.log('----------------');
console.log(getClearInfo().join('\n'));
console.log('----------------');
console.log(searchByPartialName('mare'));
console.log(searchByPartialName('n'));
