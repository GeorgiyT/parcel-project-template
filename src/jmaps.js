 ymaps.ready(function () {

        var myMap = new ymaps.Map('map', {
            center: [41.8500, -87.6500],
            zoom: 9
        },
            {
                searchControlProvider: 'yandex#search'
            }),

            
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            });

        myMap.geoObjects.add(myPlacemark);

        var myGeocoder = ymaps.geocode("[[#24.adressminsk]]");

        myGeocoder.then(
            function (res) {
                myPlacemark.geometry.setCoordinates(res.geoObjects.get(0).geometry.getCoordinates());
                myMap.setCenter([res.geoObjects.get(0).geometry.getCoordinates()[0], res.geoObjects.get(0).geometry.getCoordinates()[1]], 9, {
                    checkZoomRange: true
                });

            },
           
        );
        

    })