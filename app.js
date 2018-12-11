const place = require('./place/place');
const weather = require('./weather/wheater');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el tiempo',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
   try {
       let coors = await place.getPlace(direccion);
       let temp = await weather.getWeather(coors.lat, coors.lng);

       return `El clima en ${ direccion } es de ${ temp }`;
   } catch (e) {
       return e;
   }
};

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));

