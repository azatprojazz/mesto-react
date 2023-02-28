
function App() {
  return (
    <div className="body">
      <div className="page">
        <header className="header">
          <img className="logo" src="<%=require('./images/header-logo.svg')%>" alt="Логотип Россия" />
        </header>

        <main className="content">
          <section className="profile" aria-label="Описание профиля">
            <button className="profile__edit-image">
              <img className="profile__avatar" src="<%=require('./images/avatar.jpg')%>" alt="Аватарка" />
            </button>
            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <button
                className="profile__edit-btn opacity-on-hover"
                type="button"
                aria-label="Редактировать профиль"
              ></button>
              <p className="profile__job"></p>
            </div>
            <button className="profile__add-btn opacity-on-hover" type="button" aria-label="Добавить картинки"></button>
          </section>

          <section className="cards" aria-label="Список карточек">
            <ul className="cards__container"></ul>
          </section>
        </main>

        <footer className="footer">
          <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
        </footer>
      </div>

      <div className="popup popup_type_profile">
        <div className="popup__container">
          <button className="popup__close-btn opacity-on-hover" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="form" novalidate>
            <input
              className="popup__input popup__input_content_name"
              type="text"
              id="user-name"
              name="name"
              minlength="2"
              maxlength="40"
              autocomplete="off"
              required="required"
              placeholder="Введите имя"
            />
            <span className="popup__error" id="user-name-error"></span>
            <input
              className="popup__input popup__input_content_job"
              type="text"
              id="about"
              name="about"
              minlength="2"
              maxlength="200"
              autocomplete="off"
              required="required"
              placeholder="Род деятельности"
            />
            <span className="popup__error" id="about-error"></span>
            <button className="popup__save-btn opacity-on-hover" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_cards">
        <div className="popup__container">
          <button className="popup__close-btn opacity-on-hover" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="form" novalidate>
            <input
              className="popup__input popup__input_content_card-name"
              type="text"
              id="name-card"
              name="name"
              minlength="2"
              maxlength="30"
              autocomplete="off"
              required="required"
              placeholder="Именование картинки"
            />
            <span className="popup__error" id="name-card-error"></span>
            <input
              className="popup__input popup__input_content_card-link"
              type="url"
              id="link"
              name="link"
              autocomplete="off"
              required="required"
              placeholder="Ссылка на картинку"
            />
            <span className="popup__error" id="link-error"></span>
            <button className="popup__save-btn opacity-on-hover" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_view-card">
        <div className="popup__view-container">
          <button className="popup__close-btn opacity-on-hover" type="button" aria-label="Закрыть"></button>
          <img className="popup__image" src="#" alt="#" />
          <p className="popup__caption"></p>
        </div>
      </div>

      <div className="popup popup_avatar">
        <div className="popup__container popup__container-avatar">
          <button className="popup__close-btn" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="form-avatar" novalidate>
            <input
              className="popup__input"
              type="url"
              id="avatar"
              name="avatar"
              placeholder="Ссылка на картинку"
              autocomplete="off"
              required
            />
            <span className="popup__error" id="avatar-error"></span>
            <button className="popup__save-btn" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_remove">
        <div className="popup__container popup__container-remove">
          <button className="popup__close-btn" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title popup__title-remove">Вы уверены?</h2>
          <form className="popup__form">
            <button className="popup__save-btn popup__confirm-btn" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>

      <template className="card-template">
        <li className="card">
          <button className="card__delete-btn opacity-on-hover" type="button" aria-label="Удалить"></button>
          <img className="card__image" />
          <div className="card__info">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button className="card__like opacity-on-hover" type="button" aria-label="Лайк"></button>
              <span className="card__like-count"></span>
            </div>
          </div>
        </li>
      </template>
    </div>
  )
}

export default App
