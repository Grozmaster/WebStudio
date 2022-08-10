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
        modal.classList.remove('active');

    }

    if (!target.closest('.popup') && !target.closest('.mobile__menu') ) { //закрыть окно при клике за пределами окна
        modalMenu.classList.remove('active')

    }


    let colorArray = document.getElementsByClassName('mobile__menu');//меняю цвет иконки в зависимости от имени класса
    if (modalMenu.className.includes('active')){
        colorArray[0].style.filter = "invert(50%) sepia(18%) saturate(2507%) hue-rotate(168deg) brightness(99%) contrast(97%)";
    }else colorArray[0].style.filter = "none";


    if (modal.className.includes('active')){
        on();

    }else off();

});


const openMenu = document.querySelector('.mobile__menu');
// const closeMenu = document.querySelector('.close__popup');
const modalMenu = document.querySelector('.popup');

openMenu.addEventListener('click',toggleMenu);
// closeMenu.addEventListener('click',toggleMenu);


function toggleMenu(){
    modalMenu.classList.toggle('active');
}


function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

