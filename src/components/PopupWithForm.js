function PopupWithForm({ title, name, children, submitBtnText, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          className="popup__close-btn opacity-on-hover"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} noValidate>
          {children}
          <button className="popup__save-btn opacity-on-hover" type="submit">
            {submitBtnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
