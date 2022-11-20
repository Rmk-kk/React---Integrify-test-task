import {Container, InputGroup, Form, Button} from "react-bootstrap";
import WeatherInput from "../weather-input/WeatherInput";
import CitiesList from "../weather-app-cities/CitiesList";
import {useState} from "react";


const WeatherApp = () => {
    const [currentSearch, setCurrentSearch] = useState([]);
    const [errorStatus, setErrorStatus] = useState(false);

    const onSearchUpdate = (array, error = false) => {
        setCurrentSearch(array);
        setErrorStatus(error);
    }

    return (
        <Container className='person-app_container'>
            <WeatherInput onSearchUpdate={onSearchUpdate}/>
            <CitiesList currentSearch={currentSearch} errorStatus = {errorStatus}/>
        </Container>

    )
}

export default WeatherApp