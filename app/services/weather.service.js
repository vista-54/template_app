;(function () {

    'use strict';

    angular.module('service.weather', [])
        .service('weather', weather);


    weather.$inject = ['http', 'url'];

    function weather(http, url) {


        const model = {};
        model.get = get;
        return model;

        function get() {
            return http.get(url.firsturl).then(function (res) {
                let result = [];
                let tmpArr = res.split("\n");
                tmpArr.splice(0, 7);//deleted first 7 items of array.
                tmpArr.forEach(function (element) {
                    let row = element.replace(/  +/g, ' ').replace(/^\s*/, '');
                    let arrOfRow = row.split(' ');
                    let tmpObject = {};
                    tmpObject.year = arrOfRow[0];
                    tmpObject.month = arrOfRow[1];
                    tmpObject.tmax = arrOfRow[2];
                    tmpObject.tmin = arrOfRow[3];
                    tmpObject.af = arrOfRow[4];
                    tmpObject.rain = arrOfRow[5];
                    tmpObject.sun = arrOfRow[6];
                    result.push(tmpObject);
                });
                return result;
            })
        }
    }
})();