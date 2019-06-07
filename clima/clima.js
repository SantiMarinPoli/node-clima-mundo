const axios = require("axios");


const getClima = async(lat, lng) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=55173e972a9eb87dca415183b1d1945d&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}