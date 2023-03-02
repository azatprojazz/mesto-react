function Card({ name, link, likes, onCardClick }) {
  function handleClick() {
    onCardClick(name, link);
  }

  return (
    <li className="card">
      <button
        className="card__delete-btn opacity-on-hover"
        type="button"
        aria-label="Удалить"
      ></button>
      <img className="card__image" src={link} alt={name} onClick={handleClick} />
      <div className="card__info">
        <h2 className="card__title">{name}</h2>
        <div className="card__like-container">
          <button className="card__like opacity-on-hover" type="button" aria-label="Лайк"></button>
          <span className="card__like-count">{likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
