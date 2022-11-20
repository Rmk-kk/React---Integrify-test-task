import {useEffect, useState} from "react";
import './CitiesList.css'


import WeatherAppCard from "../weather-app-card/WeatherAppCard";
import Error404 from "../service-components/404-error/Error404";

const CitiesList = ({currentSearch, errorStatus}) => {
    const [cities, setCities] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        onCitiesUpdate(currentSearch);
        onErrorUpdate(errorStatus);
    },[currentSearch,errorStatus]);


    const onCitiesUpdate = (list) => {
        setCities(list);
    };

    const onErrorUpdate = (status) => {
        setError(status);
    };

    const elements = cities.map(city => {
        return <WeatherAppCard city={city} key={city.Key}/>
    })

    const errorMessage = error ? <Error404/> : null;
    const content = error ? null : elements;

    return (
        <>
            {errorMessage}
            <ul className='weather-city__list'>
                {content}
            </ul>
        </>

    )
}


export default CitiesList;