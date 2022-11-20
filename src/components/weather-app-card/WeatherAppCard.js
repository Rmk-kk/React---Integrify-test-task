import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import './weatherAppCard.css';
import {useEffect, useState} from "react";
import FetchData from "../service-components/request/fetchData";
import Spinner from "../service-components/Spinner/Spinner";
import Error404 from "../service-components/404-error/Error404";

const WeatherAppCard = ({city}) => {
    const [cityWeather, setCityWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const serviceComponent = new FetchData();
    const { Key } = city;

    useEffect(() => {
        getCityWeather(Key)
    },[city])

    const getCityWeather = (id) => {
        setLoading(true);
        serviceComponent._getOneHourForecast(id)
            .then(onWeatherLoaded)
            .catch(error => console.log(error))
    }

    const onWeatherLoaded = (weather) => {
        setLoading(false);
        setCityWeather(weather);
    }

    const content = !(loading || error || !cityWeather || !city) ? <View city={city} cityWeather={cityWeather}/> : null;
    const errorMessage = error ? <Error404/> : null;
    const loadingMessage = loading ? <Spinner/> : null;

    return (
        <>
            {content}
            {errorMessage}
            {loadingMessage}
        </>
    )
}

const View = ({city, cityWeather}) => {
    const { EnglishName, Country, AdministrativeArea, Key, Region} = city;
    const [{ DateTime, IconPhrase, Temperature, WeatherIcon }] = cityWeather;
    let path;
    if(WeatherIcon < 10) {
        path = `/icons/0${WeatherIcon}-s.png`
    } else {
        path = `/icons/${WeatherIcon}-s.png`
    }
    return (
        <li className='weather-city__card'>
            <div className="card--text">
                <h2>{EnglishName} - {Country.ID}</h2>
                <h4>{AdministrativeArea.EnglishName}</h4>
            </div>
            <div className='card--info'>
                <div className='card-temp'>{Math.round((Temperature.Value - 32)/1.8)}<span>&#8451;</span></div>
                <img className='card--img' src={path} alt="Image"/>
            </div>
            <p className='weather-city__card-text'>{IconPhrase}</p>
            <Link to={`/weather/${Key}`} state={city}>
                <Button variant="outline-warning" className='weather-city__card-btn' size='lg'>See More</Button>
            </Link>
        </li>
    )
}
export default WeatherAppCard