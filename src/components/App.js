import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(name, link) {
    setSelectedCard({ name, link });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        submitBtnText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_content_name"
          type="text"
          id="user-name"
          name="name"
          minLength="2"
          maxLength="40"
          autoComplete="off"
          required="required"
          placeholder="Введите имя"
        />
        <span className="popup__error" id="user-name-error"></span>
        <input
          className="popup__input popup__input_content_job"
          type="text"
          id="about"
          name="about"
          minLength="2"
          maxLength="200"
          autoComplete="off"
          required="required"
          placeholder="Род деятельности"
        />
        <span className="popup__error" id="about-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="cards"
        submitBtnText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_content_card-name"
          type="text"
          id="name-card"
          name="name"
          minLength="2"
          maxLength="30"
          autoComplete="off"
          required="required"
          placeholder="Именование картинки"
        />
        <span className="popup__error" id="name-card-error"></span>
        <input
          className="popup__input popup__input_content_card-link"
          type="url"
          id="link"
          name="link"
          autoComplete="off"
          required="required"
          placeholder="Ссылка на картинку"
        />
        <span className="popup__error" id="link-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        submitBtnText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input"
          type="url"
          id="avatar"
          name="avatar"
          placeholder="Ссылка на картинку"
          autoComplete="off"
          required
        />
        <span className="popup__error" id="avatar-error"></span>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="remove" submitBtnText="Да"></PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
