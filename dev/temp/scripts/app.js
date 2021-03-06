import Swiper from 'swiper';
import Modal from './modules/Modal';
import Readmore from './modules/Readmore';
import Educacao from './modules/Educacao';
import Maps from './modules/Maps';
import GaleriaSlideShow from './modules/GaleriaSlideShow';
import Menu from './modules/Menu';
import Contactos from './modules/Contactos';

// Activa funcionalidades do Menu
var menu = new Menu();
var contactos = new Contactos();

var megalitismoSlider = new Swiper ('.postais-swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
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

var modal = new Modal();
var galeriaSlideshow = new GaleriaSlideShow(modal);

var galeriaImages = document.querySelectorAll('.galeria__image');

// SWIPER DA GALERIA
var galeriaSlider = new Swiper ('.galeria-swiper', {
    slidesPerView: 3,
    slidesPerColumn: 3,
    on: {
        click: function(e){
            //modal.openModal();
            //modal.loadImage(e.srcElement.getAttribute('src'));
            //console.log(this.clickedIndex);
            //console.log(galeriaImages[this.clickedIndex]);
            galeriaSlideshow.loadModal(this.clickedIndex);
        }
    }
});

// POSTAIS
var descricaoBtns = document.querySelectorAll('.btn-postais-descricao');

descricaoBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.stopPropagation();
        e.preventDefault();
        modal.openModal();
        modal.loadPage(btn.getAttribute('data-pagename'));
    });
});

// MENU ESCOLAS
var educacao = new Educacao();

var escolasMenuItems = document.querySelectorAll('.escolas-navigation__link');
escolasMenuItems.forEach(function(menuItem){
    menuItem.addEventListener('click', function(e){
        e.preventDefault();
        educacao.loadPage(menuItem.getAttribute('data-escolamenuitem'));
    });
});


// READ MORE BUTTONS HANDLE
var museuReadMoreBtn = new Readmore('museu');
var megalitismoReadMoreBtn = new Readmore('megalitismo');

// MAP - GOOGLE MAPS
window.addEventListener('load', function(){
    var map = new Maps(38.946956, -8.161269);
    map.animation = true;
});

