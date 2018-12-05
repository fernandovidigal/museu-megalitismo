class Educacao {

    constructor(){
        this.escolasMenuTrigger = document.querySelector('.educacao__link');
        this.escolasMenu = document.querySelector('.escolas-navigation');
        this.escolaMenuCloseBtn = document.querySelector('.escolas-navigation__close-icon');
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
        this.escolasMenu.classList.add('escolas-navigation-show');
    }

    closeMenu() {
        this.escolasMenu.classList.remove('escolas-navigation-show');
    }
}

export default Educacao;