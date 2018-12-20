class Contactos {

    constructor(){
        this.inputControls = document.querySelectorAll('.contactos__contol');
        this.events();
    }

    events(){
        let that = this;
        this.inputControls.forEach(function(control){
            that.changeState(control);

            control.addEventListener('focusout', function(){
                that.changeState(this);
            });
        });
    }

    changeState(control){
        if(control.value.length > 0) {
            control.classList.add('has-value');
        } else {
            control.classList.remove('has-value');
        }
    }
}

export default Contactos;