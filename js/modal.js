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
const modal = document.querySelector(".order__popup");

openBtn.addEventListener('click',toggleModal);
closeBtn.addEventListener('click',toggleModal);

function toggleModal(){
    modal.classList.toggle("active");
}

window.addEventListener('click', e => {
    const target = e.target

    console.log(modal.className)

    if (!target.closest('.order__popup') && !target.closest('.order__btn') ) {
        modal.classList.remove('active')
    }
    console.log(modal.className)

});




