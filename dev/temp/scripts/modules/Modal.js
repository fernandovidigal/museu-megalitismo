class Modal {

    constructor(){
        this.modal = document.querySelector('.modal');
        this.pageBody = document.querySelector('body');
        this.closeBtn = document.querySelector('.modal-close');
        this.events();
    }

    events() {
        // Clic on the X
        this.closeBtn.addEventListener('click', this.closeModal.bind(this));

        // Pushes ESC Key
        document.addEventListener('keyup', this.keyPressHandler.bind(this));
    }

    openModal() {
        this.modal.classList.add('modal-show');
        this.pageBody.classList.add('modal-open');
    }

    closeModal() {
        this.modal.classList.remove('modal-show');
        this.pageBody.classList.remove('modal-open');
    }

    keyPressHandler(e) {
        if(e.keyCode == 27) {
            this.closeModal();
        }
    }
}

export default Modal;