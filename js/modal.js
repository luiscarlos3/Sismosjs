let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".boton")[0];
let modal = document.querySelectorAll(".modal")[0];
let ModalContainer = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e) {
    e.preventDefault()
    ModalContainer.style.opacity = "1";
    ModalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});
cerrar.addEventListener("click", function() {
    timeModal();
});
window.addEventListener("click", function(e) {
    /*console.log(e.target); */
    if (e.target == ModalContainer) {
        timeModal();
    }
});
const timeModal = () => {
    modal.classList.toggle("modal-close");
    setTimeout(function() {
        ModalContainer.style.opacity = "0";
        ModalContainer.style.visibility = "hidden";
    }, 850);
}