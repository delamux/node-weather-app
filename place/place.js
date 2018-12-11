const axios = require('axios');

let getPlace = async(address) => {
    let encodedUrl = encodeURI(address);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyBONODEIeAnRGok3zFBVsU2v_PCIR90B7Q`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la dirección ${ address }`)
    }
    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        address: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng,
    }
};


module.exports = {
    getPlace
};