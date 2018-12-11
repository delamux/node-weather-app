const axios = require('axios');

let getWeather = async (lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=541c1ede064ef2a818938a6ccceeda07`);

    return resp.data.main.temp;
};

module.exports = {
    getWeather
};