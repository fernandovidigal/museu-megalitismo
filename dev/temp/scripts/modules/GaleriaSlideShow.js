class GaleriaSlideShow {

    constructor(modal){
        this.modal = modal;
        this.galeriaImages = document.querySelectorAll('.galeria__image');
    }

    events(){
        this.modal.modalFooter.addEventListener('click', function(e){
            // BackControl
            if(e.target.classList.contains('galeria__modal-controls__back')){
                this.swapImage(-1);
            }

            if(e.target.classList.contains('galeria__modal-controls__next')){
                this.swapImage(1);
            }
        }.bind(this));
    }

    swapImage(direction){
        var imagesNum = this.galeriaImages.length - 1;
        this.activeImageIndex = this.activeImageIndex + direction;

        if(this.activeImageIndex < 0) {
            this.activeImageIndex = imagesNum;
        }
        if(this.activeImageIndex > imagesNum) {
            this.activeImageIndex = 0;
        }

        this.modal.loadImage(this.galeriaImages[this.activeImageIndex].getAttribute('src'));
    }

    createControls(){
        var controlsWrapper = document.createElement('div');
        controlsWrapper.classList.add('galeria__modal-controls');

        var backBtn = document.createElement('img');
        backBtn.setAttribute('src', 'assets/images/icons/arrow-back.svg');
        backBtn.setAttribute('alt', 'Imagem Anterior');
        backBtn.classList.add('galeria__modal-controls__back');

        var nextBtn = document.createElement('img');
        nextBtn.setAttribute('src', 'assets/images/icons/arrow-forward.svg');
        nextBtn.setAttribute('alt', 'Imagem Seguinte');
        nextBtn.classList.add('galeria__modal-controls__next');

        controlsWrapper.appendChild(backBtn);
        controlsWrapper.appendChild(nextBtn);

        return controlsWrapper;
    }

    loadModal(index){
        this.modal.openModal();
        var image = this.galeriaImages[index].getAttribute('src');
        this.modal.loadImage(image);
        this.modal.setFooter(this.createControls());
        this.activeImageIndex = index;
        this.events()
    }
}

export default GaleriaSlideShow;