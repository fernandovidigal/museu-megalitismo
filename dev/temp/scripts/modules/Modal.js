class Modal {

    constructor(){
        this.modal = document.querySelector('.modal');
        this.modalWrapper = document.querySelector('.modal__wrapper');
        this.modalContent = document.querySelector('.modal__content');
        this.modalFooter = document.querySelector('.modal__footer');
        this.pageBody = document.querySelector('body');
        this.closeBtn = document.querySelector('.modal-close');
        this.events();
    }

    events() {
        // Clic on the X
        this.closeBtn.addEventListener('click', this.closeModal.bind(this));

        // Pushes ESC Key
        document.addEventListener('keyup', this.keyPressHandler.bind(this));

        // Carregar na parte preta
        var that = this;
        this.modal.addEventListener('click', function(e){
            if(e.target.classList.contains('modal')){
                this.closeModal();
            }
        }.bind(this));
    }

    openModal() {
        this.modal.classList.add('modal-show');
        this.pageBody.classList.add('modal-open');
    }

    closeModal() {
        this.modal.classList.remove('modal-show');
        this.pageBody.classList.remove('modal-open');
        this.clearContent(this.modalContent);
        this.clearContent(this.modalFooter);
    }

    keyPressHandler(e) {
        if(e.keyCode == 27) {
            this.closeModal();
        }
    }

    loadPage(page) {
        this.showLoader();

        // Faz o pedido para carregar a página
        var xhttp = new XMLHttpRequest();
        var that = this;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                that.modalContent.innerHTML = this.responseText;
            }
        };
        xhttp.onerror = function(err){
            console.log(err);
        }
        xhttp.open("GET", "./data/postais/" + page + ".html", true);
        xhttp.send();
    }

    loadImage(image) {
        this.showLoader();
        this.clearContent(this.modalContent);

        var img = document.createElement("IMG");
        img.setAttribute("src", image);
        this.modalContent.appendChild(img);
    }

    setFooter(content){
        this.clearContent(this.modalFooter);
        this.modalFooter.appendChild(content);
    }

    showLoader(){
        // Criar o Loading spinner
        var loader = document.createElement('div');
        loader.setAttribute('class', 'loader');
        this.modalContent.appendChild(loader);
    }

    clearContent(area){
        area.innerHTML = "";
    }
}

export default Modal;