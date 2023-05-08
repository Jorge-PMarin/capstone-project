import { Link } from 'react-router-dom';
import HeroImg from '../assets/restaurantfood.jpg';

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__heading">Little Lemon</h1>
      <p className="hero__city">Chicago</p>
      <p className="hero__description">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <Link to="/" className="hero__reserve">
        Reserve a table
      </Link>
      <img src={HeroImg} alt="Restaurant food" className="hero__img" />
    </div>
  );
}

export default Hero;