import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class Menu {

    constructor(){
        this.navigation = document.querySelector('.navigation');
        this.navigationList = document.querySelector('.navigation__float');
        this.navigationBtn = document.querySelector('.navigation__button');
        this.navigationToogle = document.querySelector('.navigation__checkbox');
        this.navigationLinks = document.querySelectorAll('.nav-link');
        this.navigationLogoMenu = document.querySelector('.logo--menu');
        this.headerHeight = document.querySelector('.header').scrollHeight;
        this.pageBody = document.querySelector('body');
        this.windowWidth = window.innerWidth;
        this.tabletWidth = 768;
        this.scrollState = 0;
        this.isMobile = false;
        this.navigationOpened = false;
        this.checkDevice();
        this.events();
        this.setSmoothScroll();
    }

    events(){
        window.addEventListener('scroll', this.showMenuAfterHeader.bind(this));
        window.addEventListener('resize', this.checkDevice.bind(this));
        document.addEventListener('DOMContentLoaded', this.showMenuAfterHeader.bind(this));
        

        this.navigationBtn.addEventListener('click', function(){
            if(this.navigationOpened) {
                this.navigationOpened = false;
                this.pageBody.classList.remove('navigation--opened');
            } else {
                this.navigationOpened = true;
                this.pageBody.classList.add('navigation--opened');
            }
        }.bind(this));

        this.navigationLogoMenu.addEventListener('click', function(){
            this.navigationToogle.checked = false;
        }.bind(this));
    }

    checkDevice(){
        this.windowWidth = window.innerWidth;
        if(this.windowWidth < this.tabletWidth) {
            this.isMobile = true;
        } else {
            this.isMobile = false;
            this.showMenuAfterHeader();
        }
    }

    showMenuAfterHeader(){
        if(!this.isMobile) {
            if(window.pageYOffset > this.headerHeight) {
                this.navigationBtn.classList.add('navigation__button--show');
            } else {
                this.navigationBtn.classList.remove('navigation__button--show');
            }
        }
    }

    setSmoothScroll(){
        var that = this;
        this.navigationLinks.forEach(function(link){
            link.addEventListener('click', function(e){
                that.navigationToogle.checked = false;
                e.preventDefault();
               
                // Activa o Smooth Scroll
                var it = this;
                $.smoothScroll({
                    scrollTarget: it.hash,
                    offset: -20
                });
            });
        });
    }
}

export default Menu; 