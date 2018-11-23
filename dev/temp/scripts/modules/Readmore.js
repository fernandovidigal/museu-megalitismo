class Readmore {

    constructor(section) {
        this.readMoreBtn = document.querySelector('.' + section + '__read-more');
        this.textContainer = document.querySelector('.' + section + '__complete-content');
        this.open = false;
        this.events();
    }

    events() {
        this.readMoreBtn.addEventListener('click', function(e){
            e.preventDefault();

            if(this.open) {
                // Contract Text container
                this.contractTextContainer();
            } else {
                // Expand Text container
                this.expandTextContainer();
            }
        }.bind(this));
    }

    expandTextContainer() {
        this.textContainer.style.height = this.textContainer.scrollHeight + 'px';
        this.readMoreBtn.innerHTML = 'LER MENOS';
        this.open = true;
    }

    contractTextContainer() {
        this.textContainer.style.height = '0';
        this.readMoreBtn.innerHTML = 'LER MAIS';
        this.open = false; 
    }
}

export default Readmore;