import {Link, useParams, useLocation} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import FetchData from "../service-components/request/fetchData";
import Spinner from "../service-components/Spinner/Spinner";
import Error404 from "../service-components/404-error/Error404";
import './weatherCity.css'

const WeatherCity = () => {
    const [fiveDaysForecast, setFiveDaysForecast] = useState(null);
    const [currentCityWeather, setCurrentCityWeather] = useState(null);
    const [currentCity, setCurrentCity] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const cityId = useParams();
    const serviceComponent = new FetchData();

    useEffect(() => {
        getFiveDaysForecast(cityId.id);
        getCurrentCity(cityId.id);
        getCurrentCityWeather(cityId.id);
    }, [cityId]);

    const getCurrentCityWeather = (id) => {
        setLoading(true);
        serviceComponent._getOneHourForecast(id)
            .then(setCurrentCityWeather)
            .then(onDataLoaded)
            .catch(onError)
    }

    const getFiveDaysForecast = (id) => {
        setLoading(true);
        serviceComponent._getFiveDaysForecast(id)
            .then(setFiveDaysForecast)
            .then(onDataLoaded)
            .catch(onError)
    }

    const getCurrentCity = (id) => {
        setLoading(true);
        serviceComponent._getCityById(id)
            .then(setCurrentCity)
            .then(onDataLoaded)
            .catch(onError);
    }

    const onDataLoaded = () => {
        setLoading(false);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }


    const errorMessage = error ? <Error404/> : null;
    const loadingMessage = loading ? <Spinner/> : null;
    const content = !(loading || error || !currentCity || !fiveDaysForecast || !currentCityWeather) ? <View currentCity={currentCity}
                                                                                                            fiveDaysForecast={fiveDaysForecast}
                                                                                                            currentCityWeather={currentCityWeather}/> : null;
    return (
        <div  className='person-app_container container'>
            {content}
            {loadingMessage}
            {errorMessage}
        </div>
    )

}

const View = ({currentCity, fiveDaysForecast,currentCityWeather}) => {
    const { EnglishName, Country, AdministrativeArea, Region } = currentCity;
    const [{ IconPhrase, Temperature, WeatherIcon}] = currentCityWeather
    console.log(currentCityWeather)
    const forecast = fiveDaysForecast.DailyForecasts.map((item,i) => {
        let dayImage = item.Day.Icon;
        let nightImage = item.Night.Icon;
        let dayPathImage, nightPathImage;
        //getting day image path
        if(dayImage < 10) {
            dayPathImage = `/icons/0${dayImage}-s.png`
        } else {
            dayPathImage = `/icons/${dayImage}-s.png`
        }
        //getting night image path
        if(nightImage < 10) {
            nightPathImage = `/icons/0${nightImage}-s.png`
        } else {
            nightPathImage = `/icons/${nightImage}-s.png`
        }

        const day = item.Date.slice(8,10)
        const month = item.Date.slice(5,7)

        const tempMax = Math.round((item.Temperature.Maximum.Value - 32)/1.8);
        const tempMin = Math.round((item.Temperature.Minimum.Value - 32)/1.8);
        return (
                <li className='forecast_cards-card' key={i}>
                    <div className="forecast_cards-card--front side">
                        <div>
                            <h2>{`${day}.${month}`} - Day</h2>
                            <h3 className='card-phrase'>{item.Day.IconPhrase}</h3>
                        </div>
                        <img className='forecast-card-image' src={dayPathImage} alt="Day Weather Icon"/>
                        {(item.Day.HasPrecipitation) ? <h3 className='card-precipitation'>Precipitation: {item.Day.PrecipitationIntensity}</h3> : null}
                        <h3 className='card-temperature'> {tempMax}&#8451; / {tempMin} &#8451;</h3>
                    </div>
                    <div className="forecast_cards-card--back side">
                        <div>
                            <h2>{`${day}.${month}`} - Night</h2>
                            <h3 className='card-phrase'>{item.Night.IconPhrase}</h3>
                        </div>
                        <img className='forecast-card-image' src={nightPathImage} alt="Night Weather Icon"/>
                        {(item.Night.HasPrecipitation) ? <h3 className='card-precipitation'>Precipitation: {item.Night.PrecipitationIntensity}</h3> : null}
                        <h3 className='card-temperature'>{tempMax}&#8451; / {tempMin}&#8451;</h3>
                    </div>
                </li>
        )
    })

    let imagePath;
    if(WeatherIcon < 10) {
        imagePath = `/icons/0${WeatherIcon}-s.png`;
    } else {
        imagePath = `/icons/${WeatherIcon}-s.png`
    }
    return (
        <div>
            <div className='city-weather-card'>
                <h1>{EnglishName}</h1>
                <img className='city-weather-card-img' src={imagePath} alt="Cloudy"/>
                <h2>{Country.EnglishName} - {AdministrativeArea.EnglishName}</h2>
                <h3>{Region.EnglishName}</h3>
                <p className='city-weather-card-status'>{IconPhrase}</p>
                <p className='city-weather-card-temp'>{Math.round((Temperature.Value - 32)/1.8)}<span>&#8451;</span></p>
            </div>
            <ul className='forecast_cards-container' style={{'padding' : '0'}}>
                {forecast}
            </ul>
        </div>
    )
}

export default WeatherCity;