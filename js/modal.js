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

const openBtn = document.querySelector(".order__btn");
const closeBtn = document.querySelector(".order__popup-close");
const modalWindow = document.querySelector(".order__popup");

function toogleModal() {
    modalWindow.classList.toggle("active");
}

openBtn.addEventListener("click", toogleModal);
closeBtn.addEventListener("click", toogleModal);
