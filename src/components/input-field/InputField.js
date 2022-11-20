import {Form, InputGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import Switch from "../service-components/switches/Switch";
import './inputField.css'

const InputField = ({onSearchFieldUpdate, onSwitchAlphabet, onSelectedFilter}) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
        onSearchFieldUpdate(search);
    },[search])

    return (
        <div className='input-container'>
            <InputGroup className="search-input">
                <InputGroup.Text className='weather-input' id="inputGroup-sizing-default">
                    Search
                </InputGroup.Text>
                <Form.Control
                    placeholder="Enter name"
                    style={{'fontSize' : '2rem'}}
                    aria-label="Enter name"
                    onChange={(e) => setSearch(e.currentTarget.value)}
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <Switch onSelectedFilter = {onSelectedFilter}
                    onSwitchAlphabet = {onSwitchAlphabet}/>
        </div>

    )
}

export default InputField