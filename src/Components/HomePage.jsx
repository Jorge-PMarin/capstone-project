import Hero from './Hero';
import Card from './Card';

const dishes = [
  {
    name: 'Greek salad',
    imageUrl:
      'https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=679&q=80',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, a facilis perferendis voluptatibus minus culpa quo minima quasi aspernatur deserunt incidunt deleniti, laudantium iusto dolor qui distinctio, perspiciatis quibusdam nobis.',
    price: '$12.99',
    id: 1,
  },
  {
    name: 'Bruchetta',
    imageUrl:
      'https://images.unsplash.com/photo-1594978583693-8dfdfc93f052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, a facilis perferendis voluptatibus minus culpa quo minima quasi aspernatur deserunt incidunt deleniti, laudantium iusto dolor qui distinctio, perspiciatis quibusdam nobis.',
    price: '$19.00',
    id: 2,
  },
  {
    name: 'Lemon Dessert',
    imageUrl:
      'https://images.unsplash.com/photo-1528252941458-c1d19f902318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, a facilis perferendis voluptatibus minus culpa quo minima quasi aspernatur deserunt incidunt deleniti, laudantium iusto dolor qui distinctio, perspiciatis quibusdam nobis.',
    price: '$10.99',
    id: 3,
  },
];

function HomePage() {
  return (
    <main className="homepage">
      <Hero />
      <section className="homepage__cards">
        {dishes.map((dish) => (
          <Card
            name={dish.name}
            imageUrl={dish.imageUrl}
            description={dish.description}
            price={dish.price}
            key={dish.id}
          />
        ))}
      </section>
    </main>
  );
}

export default HomePage;
