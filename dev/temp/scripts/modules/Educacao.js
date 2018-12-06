class Educacao {

    constructor(){
        this.escolasMenuTrigger = document.querySelector('.educacao__link');
        this.escolasMenu = document.querySelector('.escolas-navigation');
        this.escolaMenuCloseBtn = document.querySelector('.escolas-navigation__close-icon');
        this.educacaoContent = document.querySelector('.educacao__content');
        this.mainContent = this.educacaoContent.innerHTML;

        // Guarda o conteúdo da página inicial da Educação
        this.mainContent = document.querySelector('.educacao__content').innerHTML;

        // Events Handlers
        this.events();
    }

    events() {
        this.escolasMenuTrigger.addEventListener('click', function(e){
            e.preventDefault();
            this.openMenu();
        }.bind(this));

        this.escolaMenuCloseBtn.addEventListener('click', this.closeMenu.bind(this));

        var that = this;
        this.educacaoContent.addEventListener('click', function(e){
            if(e.target.classList.contains('educacao__actividades-back')) {
                e.preventDefault();
                this.innerHTML = that.mainContent;
            }
        });
    }

    openMenu() {
        this.escolasMenu.classList.add('escolas-navigation-show');
    }

    closeMenu() {
        this.escolasMenu.classList.remove('escolas-navigation-show');
    }

    loadPage(page) {

        var xhttp = new XMLHttpRequest();
        var that = this;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                that.educacaoContent.innerHTML = this.responseText;
                that.closeMenu();
            }
        };
        xhttp.onerror = function(err){
            console.log(err);
        }
        xhttp.open("GET", "./data/educacao/" + page + ".html", true);
        xhttp.send();
    }
}

export default Educacao;