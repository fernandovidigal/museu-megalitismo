class Educacao {

    constructor(){
        this.escolasMenuTrigger = document.querySelector('.educacao__link');
        this.escolasMenu = document.querySelector('.escolas');
        this.escolaMenuCloseBtn = document.querySelector('.escolas__close-icon');
        this.events();
    }

    events() {
        this.escolasMenuTrigger.addEventListener('click', function(e){
            e.preventDefault();
            this.openMenu();
        }.bind(this));

        this.escolaMenuCloseBtn.addEventListener('click', this.closeMenu.bind(this));
    }

    openMenu() {
        this.escolasMenu.classList.add('escolas-show');
    }

    closeMenu() {
        this.escolasMenu.classList.remove('escolas-show');
    }
}

export default Educacao;