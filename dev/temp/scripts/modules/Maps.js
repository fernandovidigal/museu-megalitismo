class Maps {


    constructor(lat,lng){
        this.mapPlaceholder = document.querySelector('.contactos__mapa');
        this.centerMap = {lat: lat, lng: lng};
        this.animation = false;
        this.initMap();
    }

    initMap(){
        var map = new google.maps.Map(document.querySelector('.contactos__mapa'), {
            zoom: 16,
            center: this.centerMap,
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
            fullscreenControl: false
        });
    
        this.setMarkers(map);
    }

    setMarkers(map) {
        var image = {
          url: 'assets/images/mapMarker@2x.png',
          size: new google.maps.Size(176, 125),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(88, 102)
        };
    
        var marker = new google.maps.Marker({
            position: this.centerMap,
            map: map,
            icon: image,
        });

        var that = this;
        marker.addListener('click', function(){
            console.log(this);
            if(that.animation) {
                that.bounceAnimation.bind(this);
            }
        });
    }

    bounceAnimation(){
        console.log("aqui3");
        if (this.getAnimation() !== null) {
            this.setAnimation(null);
        } else {
            this.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
}

export default Maps;