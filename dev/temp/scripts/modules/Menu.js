class Menu {

    constructor(){
        this.navigation = document.querySelector('.navigation');
        this.navigationList = document.querySelector('.navigation__float');
        this.navigationToggle = document.querySelector('.navigation__button');
        this.windowWidth = window.innerWidth;
        this.headerHeight = document.querySelector('.header').scrollHeight;
        this.tabletWidth = 768;
        this.scrollState = 0;
        this.navigationToggleState = 'closed';
        this.mobile = false;
        this.checkDevice();
        this.events();
    }

    events(){
        window.addEventListener('scroll', this.showMenuAfterHeader.bind(this));
        window.addEventListener('resize', this.checkDevice.bind(this));
    }

    checkDevice(){
        console.log('Resize');
        this.windowWidth = window.innerWidth;
        if(this.windowWidth < this.tabletWidth) {
            this.mobile = true;
        }
    }

    showMenuAfterHeader(){
        if(!this.mobile) {
            var scrollTopOffset = window.pageYOffset;
            console.log(this.navigationToggleState);
            if(scrollTopOffset > this.headerHeight) {
                this.navigationToggle.classList.add('navigation__button--show');
            } else {
                this.navigationToggle.classList.remove('navigation__button--show');
            }
        }
    }
}

export default Menu; 