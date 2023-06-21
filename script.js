let popupOpenButton = document.querySelector('.profile__icon');
let popup = document.querySelector('.overlay');
let page = document.querySelector('.page');

let formElement = document.querySelector('.popup__form');

let nameInput = formElement.querySelector('.popup__name-input');
let jobInput = formElement.querySelector('.popup__job-input');
let nameProfileElement = document.querySelector('.profile__title');
let jobProfileElement = document.querySelector('.profile__subtitle');

popupOpenButton.addEventListener('click', function openPopup() {
  popup.classList.add('overlay_opened');
  page.classList.add('page_no-scroll');
  nameInput.value = nameProfileElement.textContent;
  jobInput.value = jobProfileElement.textContent;
});

let popupCloseButton = document.querySelector('.popup__close-button');

popupCloseButton.addEventListener('click', function closePopup() {
  popup.classList.remove('overlay_opened');
  page.classList.remove('page_no-scroll');
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  popup.classList.remove('overlay_opened');
  page.classList.remove('page_no-scroll');

  nameProfileElement.textContent = nameInput.value;
  jobProfileElement.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);
