const request = require('request');

//========= BASIC =================/

//const mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2xvd2IweSIsImEiOiJjanhmcWFsMXUwdjJyM3htd3p2amc5ZGM1In0.QRbrNStzrDLIjzsuXvZFdw&limit=1'

// request({ url:  mapboxURL, json:true}, (error, res, data) => {
//     if(error) {
//         console.log('Unable to connect to geolocation service')
//     } else if(res.body.features.length === 0){
//         console.log('Unable to find location!' + res.statusCode);
//     } else {
//         const longitude = res.body.features[0].center[0];
//         const latitude = res.body.features[0].center[1];
//         console.log(longitude, latitude);
//     } 
// });

//===================================/

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2xvd2IweSIsImEiOiJjanhmcWFsMXUwdjJyM3htd3p2amc5ZGM1In0.QRbrNStzrDLIjzsuXvZFdw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to geolocation service', undefined);
        } else if(body.features.length === 0) {
            callback('Provide proper location to find!', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;

