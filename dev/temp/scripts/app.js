import Swiper from 'swiper';
import Modal from './modules/Modal';
import Readmore from './modules/Readmore';
import Educacao from './modules/Educacao';

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

// POSTAIS
var descricaoBtns = document.querySelectorAll('.btn-postais-descricao');

descricaoBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.stopPropagation();
        e.preventDefault();
        var modal = new Modal();
        modal.openModal();
        modal.loadPage(btn.getAttribute('data-pagename'));
    });
});

// MENU ESCOLAS
var educacao = new Educacao();


// READ MORE BUTTONS HANDLE
var museuReadMoreBtn = new Readmore('museu');
var megalitismoReadMoreBtn = new Readmore('megalitismo');

(function(){
    
    var uluru = {lat: 38.946870, lng: -8.161086};
    var map = new google.maps.Map(document.querySelector('.contactos__mapa'), {
        zoom: 16,
        center: uluru,
        styles: [
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            }
        ],
        scrollwheel: false,
        mapTypeControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM,
            style: google.maps.ZoomControlStyle.SMALL
        },
        streetViewControl: false,
        //scaleControl: false,
        fullscreenControl: false
    });
    map.setCenter({lat: 38.946870, lng: -8.161086});
    var marker = new google.maps.Marker({
      position: uluru,
      icon:'/assets/images/mapMarker.png',
      map: map,
      animation: google.maps.Animation.DROP
    });

})();

//initMap();

