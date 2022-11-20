import {Button, Form, InputGroup} from "react-bootstrap";
import './weatherInput.css'
import {useEffect, useState} from "react";
import FetchData from "../service-components/request/fetchData";

const WeatherInput = ({onSearchUpdate}) => {
    const [value, setValue] = useState(() => {
        const localValue = localStorage.getItem('City');
        const parsedValue = JSON.parse(localValue);
        return parsedValue || ''
    });
    const [currentCities, setCurrentCities] = useState([]);
    const serviceComponent = new FetchData();
    const [error, setError] = useState(false);
    const [clazz, setClazz] = useState('');

    useEffect(()=> {
        onSearchUpdate(currentCities, error);
    }, [currentCities, error])

    useEffect(() => {
        if(value.length > 3) {
            localStorage.setItem('City', JSON.stringify(value));
        }
    }, [value])

    //On input change
    const onInputChange = (event) => {
        setValue(event.currentTarget.value)
    }

    const onError = () => {
        setError(true);
    }

    const onCitiesLoaded = (cities) => {
        setError(false);
        setCurrentCities(cities)
    }

    //on Button Click to make request
    const onInputSubmit = () => {
        if(value.length < 5) {
            setClazz('input-error')
            return
        }
        setClazz('');
        serviceComponent._getCitiesList(value)
            .then(onCitiesLoaded)
            .catch(onError);
    }

    return (
        <InputGroup className="mb-auto weather-input-group" >
            <Form.Control
                className= {`weather-input ${clazz}`}
                placeholder="Enter city"
                aria-label="Enter city"
                onChange={(e) => onInputChange(e)}
                aria-describedby="basic-addon2"
                value={value}
            />
            <Button className='weather-input-btn' variant="secondary" id="button-addon2" onClick={()=>onInputSubmit()}>
                Search
            </Button>
        </InputGroup>
    )
}

export default WeatherInput;