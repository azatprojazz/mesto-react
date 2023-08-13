function PopupWithForm({
  title,
  name,
  children,
  submitBtnText,
  isOpen,
  onClose,
  onSubmit,
  onOverlay,
}) {
  // Компонент PopupWithForm возвращает JSX-разметку попапа с формой
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} onClick={onOverlay}>
      <div className="popup__container">
        <button
          className="popup__close-btn opacity-on-hover"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          {children} {/* Вставка дочерних элементов (полей формы) */}
          <button className="popup__save-btn opacity-on-hover" type="submit">
            {submitBtnText || 'Сохранить'} {/* Текст кнопки сохранения, по умолчанию "Сохранить" */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
