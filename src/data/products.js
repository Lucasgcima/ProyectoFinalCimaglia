const products = [
  {
    id: '1',
    title: 'Hotel Córdoba Plaza',
    description: 'Hotel céntrico con desayuno incluido',
    price: 12000,
    image: 'https://via.placeholder.com/150',
    category: 'cordoba',
  },
  {
    id: '2',
    title: 'Hostel Mendoza Sur',
    description: 'Hostel económico para mochileros',
    price: 4500,
    image: 'https://via.placeholder.com/150',
    category: 'mendoza',
  },
  {
    id: '3',
    title: 'Resort Bariloche',
    description: 'Complejo turístico frente al lago',
    price: 30000,
    image: 'https://via.placeholder.com/150',
    category: 'bariloche',
  },
  {
    id: '4',
    title: 'Hotel Córdoba Norte',
    description: 'Alojamiento con pileta y spa',
    price: 18000,
    image: 'https://via.placeholder.com/150',
    category: 'cordoba',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export default products;
