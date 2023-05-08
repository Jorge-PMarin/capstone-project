function Card({ name, imageUrl, description, price }) {
  return (
    <article className="card">
      <img src={imageUrl} alt="" className="card__img" />
      <div className="card__body">
        <div className="card__heading__container">
          <h2 className="card__heading">{name}</h2>
          <span className="card__price__top">{price}</span>
        </div>
        <p className="card__description">{description}</p>
        <span className="card__price__bottom">{price}</span>
      </div>
    </article>
  );
}

export default Card;
