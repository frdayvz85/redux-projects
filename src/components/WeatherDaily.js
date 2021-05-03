import React from 'react'

const WeatherDaily = ({ weather }) => {

    const sun = 'https://media.istockphoto.com/vectors/cute-flat-sun-icon-vector-id1124567572?k=6&m=1124567572&s=612x612&w=0&h=FFU7e1Tb4LI6e7f6xU-uJZoGRSLF3koVNXHzDKSDX9g='
    const winter = 'https://nation.com.pk/print_images/medium/2012-09-18/fair-partly-cloudy-weather-forecast-for-city-1347913851-6804.jpg'

    if (!weather) {
        return <p>Please, Allow to location and learn Weather.</p>
    }

    return (
        <div className="weather-card">
            <div className="header">
                <h3 className="country-name">{weather.name},  {weather.sys.country}</h3>
                <img className="w-type" src={weather.main.temp > 5 ? sun : winter} alt={weather.name} />
            </div>

            <h4 className="temp-type">{weather.weather.map((data) => data.description).join(", ")}</h4>
            <h4 className="temp">{weather.main.temp} °C</h4>
            <h4>{new Date(weather.dt * 1000).toLocaleDateString()}</h4>
        </div>
    )
}

export default WeatherDaily
