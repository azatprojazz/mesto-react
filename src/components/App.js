// Импорт React и хуков
import { useState, useEffect } from 'react';
// Импорт утилит API
import { api } from '../utils/api.js';
// Импорт контекста
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
// Импорт компонентов
import AddPlacePopup from './AddPlacePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import Footer from './Footer.js';
import Header from './Header.js';
import ImagePopup from './ImagePopup.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  // Состояния для попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  // Состояние для выбранной карточки
  const [selectedCard, setSelectedCard] = useState({});
  // Состояние для текущего пользователя
  const [currentUser, setCurrentUser] = useState({});
  // Состояние для карточек
  const [cards, setCards] = useState([]);

  // Получение данных пользователя и карточек при монтировании компонента
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards([...cards, ...cardsData]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Обработка обновления данных пользователя
  function handleUpdateUser({ name, about }) {
    api
      .editUserInfo({ name, about })
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Обработка обновления аватара пользователя
  function handleUpdateAvatar({ avatar }) {
    api
      .setNewAvatar({ avatar })
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Обработка лайка и дизлайка карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .addLikeCard(card._id, !isLiked)
      .then((newCard) => {
        setCards(cards.map((card) => (card._id === newCard._id ? newCard : card)));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Обработка добавления новой карточки
  function handleAddPlaceSubmit({ name, link }) {
    api
      .addNewCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Обработка удаления карточки
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((prevCards) => prevCards.filter((cards) => cards._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Обработчики открытия попапов
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  // Обработчик открытия попапа с изображением карточки
  function handleCardClick(name, link) {
    setSelectedCard({
      isOpen: true,
      name,
      link,
    });
  }

  // Закрытие попапов по клику на оверлей
  function closePopupsByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  // Закрытие всех попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({
      ...selectedCard,
      isOpen: false,
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
        </div>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          onOverlay={closePopupsByOverlay}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          onOverlay={closePopupsByOverlay}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          onOverlay={closePopupsByOverlay}
        />

        <PopupWithForm
          title="Вы уверены?"
          name="remove"
          submitBtnText="Да"
          onOverlay={closePopupsByOverlay}
        ></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} onOverlay={closePopupsByOverlay} />
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
