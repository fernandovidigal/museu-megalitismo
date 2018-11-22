import Swiper from 'swiper';

var megalitismoSlider = new Swiper ('.postais-swiper', {
    loop: true,
    on: {
        click: function(){
            var activeSlider = megalitismoSlider.slides[megalitismoSlider.activeIndex];
            activeSlider.querySelector('.postais__figure > .postais__figure-title').classList.toggle('postais__figure-title--show');
            activeSlider.querySelector('.postais__info').classList.toggle('postais__info--show');
        },
        slideChangeTransitionEnd: function(){
            if(megalitismoSlider) {
                var previousSlider = megalitismoSlider.slides[megalitismoSlider.previousIndex];
                var previousSliderTitle = previousSlider.querySelector('.postais__figure > .postais__figure-title');
                var previousSliderInfo = previousSlider.querySelector('.postais__info');

                if(!previousSliderTitle.classList.contains('postais__figure-title--show')) {
                    previousSliderTitle.classList.toggle('postais__figure-title--show');
                }

                if(previousSliderInfo.classList.contains('postais__info--show')) {
                    previousSliderInfo.classList.toggle('postais__info--show');
                }
            }
        }
    }
});


var galeriaSlider = new Swiper ('.galeria-swiper', {
    slidesPerView: 3,
    slidesPerColumn: 3,
    on: {
        click: function(){
            alert("Olá Mundo");
        }
    }
});

// Menu Escolas
var escolasMenuTrigger = document.querySelectorAll('.educacao__link')[0];
var escolasMenu = document.getElementsByClassName('escolas')[0];
var escolaMenuCloseBtn = document.getElementsByClassName('escolas__close-icon')[0];

escolasMenuTrigger.addEventListener('click', function(e){
    e.preventDefault();
    escolasMenu.classList.toggle('escolas-show');
});

escolaMenuCloseBtn.addEventListener('click', function(){
    escolasMenu.classList.toggle('escolas-show');
});

// READ MORE BUTTONS
var museuReadMoreBtn = {
    element: document.querySelector('.museu__read-more'),
    textExpanContainer: document.querySelector('.museu__complete-content'),
    openState: false
}

var megalitismoReadMoreBtn = {
    element: document.querySelector('.megalitismo__read-more'),
    textExpanContainer: document.querySelector('.megalitismo__complete-content'),
    openState: false
}

readMoreExpand(museuReadMoreBtn);
readMoreExpand(megalitismoReadMoreBtn);


function readMoreExpand(readMoreBtn){
    readMoreBtn.element.addEventListener('click', function(e){
        e.preventDefault();
        if(readMoreBtn.openState) {
            readMoreBtn.textExpanContainer.style.height = '0';
            readMoreBtn.openState = false;
            readMoreBtn.element.innerHTML = "LER MAIS"; 
        } else {
            readMoreBtn.textExpanContainer.style.height = readMoreBtn.textExpanContainer.scrollHeight+'px';
            readMoreBtn.openState = true;
            readMoreBtn.element.innerHTML = "LER MENOS";
        }
    });
}