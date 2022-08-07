//
// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-open]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//     };
//
//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);
//
//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
//
//
//
//   })();

const openBtn = document.querySelector(".order__btn"); //класс кнопки открытия окна
const closeBtn = document.querySelector(".order__popup-close");//класс кнопки закрытия окна
const modal = document.querySelector(".order__popup");// класс модального окна

openBtn.addEventListener('click',toggleModal);
closeBtn.addEventListener('click',toggleModal);

function toggleModal(){                          //функция для изменения класса окна,добавляет или удаляет второй класс 'active'
    modal.classList.toggle("active");
}

window.addEventListener('click', e => { //последний клик по экрану браузера
    const target = e.target

    if (!target.closest('.order__popup') && !target.closest('.order__btn') ) { //закрыть окно при клике за пределами окна
        modal.classList.remove('active')
    }

});


const openMenu = document.querySelector('.mobile__menu');
const closeMenu = document.querySelector('.close__popup');
const modalMenu = document.querySelector('.popup');

openMenu.addEventListener('click',toggleMenu);
closeMenu.addEventListener('click',toggleMenu);


function toggleMenu(){
    modalMenu.classList.toggle('active');
}

