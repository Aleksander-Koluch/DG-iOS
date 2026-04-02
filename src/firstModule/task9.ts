type CartItem = {
  name: string;
  price: number;
  quantity: number;
};
const cart: CartItem[] = [
  { name: 'Chleb', price: 4.5, quantity: 2 },
  { name: 'Ser', price: 9.9, quantity: 1 },
  { name: 'Sok', price: 6.2, quantity: 3 },
];

const discountThreshold = 30;
const discountPercent = 10;

const formatPrice = (value: number) =>
  value.toFixed(2).replace('.', ',') + ' PLN';

const summarizeCart = (cartTable: CartItem[]) => {
  const itemsWithTotal = cartTable.map((item) => ({
    ...item,
    total: item.price * item.quantity,
  }));

  const descriptions = itemsWithTotal.map(
    (item) => `${item.quantity}x ${item.name}`,
  );

  const totalWithoutDiscount = itemsWithTotal.reduce(
    (acc, { total }) => sum + total,
    0,
  );

  const hasDiscount = totalWithoutDiscount > discountThreshold;
  const totalWithDiscount = hasDiscount
    ? totalWithoutDiscount * (1 - discountPercent / 100)
    : totalWithoutDiscount;

  return {
    items: descriptions.join(', '),
    totalWithoutDiscount: formatPrice(totalWithoutDiscount),
    totalWithDiscount: formatPrice(totalWithDiscount),
  };
};

console.log(summarizeCart(cart));
