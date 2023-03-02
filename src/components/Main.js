import { useEffect, useState } from 'react';
import { api } from '../utils/api.js';
import avatar from '../images/avatar.jpg';
import Card from './Card.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards([
          ...cards,
          ...cardsData
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile" aria-label="Описание профиля">
        <button className="profile__edit-image" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar ? userAvatar : avatar} alt="Аватарка" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-btn opacity-on-hover"
            type="button"
            aria-label="Редактировать профиль"
            onClick={onEditProfile}
          ></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          className="profile__add-btn opacity-on-hover"
          type="button"
          aria-label="Добавить картинки"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="cards" aria-label="Список карточек">
        <ul className="cards__container">{cards.map((card) => {
            return (
              <Card
                key={card._id}
                name={card.name}
                link={card.link}
                likes={card.likes}
                onCardClick={onCardClick}
              />
            );
          })}</ul>
      </section>
    </main>
  );
}

export default Main;
