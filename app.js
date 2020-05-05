const request = require('request');

const darkskyURL = 'http://api.weatherstack.com/current?access_key=2fc2748c17dd8c80dfad9b0fd852b537&query=37.8267,-122.4233';

const mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2xvd2IweSIsImEiOiJjanhmcWFsMXUwdjJyM3htd3p2amc5ZGM1In0.QRbrNStzrDLIjzsuXvZFdw&limit=1'

request({ url: darkskyURL, json: true }, (req,res) => {
    console.log(`It is currently ${res.body.current.temperature} degrees out. It feels like ${res.body.current.feelslike} degrees out.`);
});

request({ url:  mapboxURL, json:true}, (req,res) => {
    const longitude = res.body.features[0].center[0];
    const latitude = res.body.features[0].center[1];
    
    console.log(longitude, latitude);
})