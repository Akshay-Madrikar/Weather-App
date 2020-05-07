const request = require('request');
const ACCESS_KEY = require('./weatherStackKey');

//====================== BASIC =====================/
// const darkskyURL = 'http://api.weatherstack.com/current?access_key=2fc2748c17dd8c80dfad9b0fd852b537&query=37.8267,-122.4233';
// call-back function in request has 3 params:
// 1. error - for low-level errors like no network connection
// 2. response - it gives us status, error and data with body
//      2.1. status - gives status code
//      2.2. error - handling high level errors i.e no location provided
//      2.3  data - response that comes when request is completed
// 3. data - sames as 2.3 but more specific about body of response data

// request({ url: darkskyURL, json: true }, (error, res, data) => {
//     if(error) {
//         console.log('Unable to connect to weather service');
//     }else if(res.body.error) {
//         console.log('Unable to find location!' + res.statusCode);
//     }else {
//         console.log(`It is currently ${res.body.current.temperature} degrees out. It feels like ${res.body.current.feelslike} degrees out.`);
//     }
// });

//========================================================/

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key='+ ACCESS_KEY +'&query='+ latitude +',' + longitude;

    // request({ url: url, json: true }, (error, response) => {
    //     if(error) {
    //         callback('Unable to connect to weather service', undefined);
    //     } else if (response.body.error) {
    //         callback('Unable to find location!', undefined);
    //     } else {
    //         callback(undefined, `It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
    //     }
    // });

    //---------- After destructing reponse object, we can write like below: --------------------
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, `It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. Thers is a ${body.current.precip}% chance of rain.`)
        }
    });
}

module.exports = forecast;