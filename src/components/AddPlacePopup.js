import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';

// Компонент для попапа добавления нового места
function AddPlacePopup({ isOpen, onClose, onAddPlace, onOverlay }) {
  // Состояние для хранения значений полей ввода
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  // Очистка полей ввода при открытии попапа
  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  // Обработчики изменения полей ввода
  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  // Обработчик отправки формы
  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name,
      link,
    });
    // Очистка полей ввода после отправки формы
    setName('');
    setLink('');
  }

  // Рендеринг попапа с формой добавления нового места
  return (
    <PopupWithForm
      title="Новое место"
      name="cards"
      submitBtnText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onOverlay={onOverlay}
    >
      <input
        className="popup__input popup__input_content_card-name"
        value={name}
        onChange={handleChangeName}
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
        value={link}
        onChange={handleChangeLink}
        type="url"
        id="link"
        name="link"
        autoComplete="off"
        required="required"
        placeholder="Ссылка на картинку"
      />
      <span className="popup__error" id="link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
