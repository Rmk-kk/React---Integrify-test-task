import './person-app.css'
import {Container} from "react-bootstrap";
import InputField from "../input-field/InputField";
import CardList from "../card-list/CardList";
import CardInfo from "../card-info/CardInfo";
import React, {useEffect, useState} from "react";
import AddPersonForm from "../person-app-add-form/AddPersonForm";
import Switch from "../service-components/switches/Switch";

const PersonApp = () => {
    const [searchField, setSearchField] = useState('');
    const [currentPerson, setCurrentPerson] = useState(null);
    const [addNew, setAddNew] = useState(false);
    const [newPerson, setNewPerson] = useState(null);
    const [selected, setSelected] = useState(false);

    const onSearchFieldUpdate = (value) => {
        setSearchField(value);
    }

    const onCheckCurrentPerson = (person) => {
        setCurrentPerson(person);
    }

    //Add New Person status
    const changeNewPersonStatus = () => {
        setAddNew(!addNew);
    }

    //Add new person object
    const onFormUpdate = (person) => {
        setNewPerson(person);
    }

    //Reset new person

    const onFormReset = () => {
        setNewPerson(null);
    }

    //FILTERS A-Z + FAVOURITES

    const onSelectedFilter = () => {
        setSelected(!selected);
    }


    return (
        <>
            <Container className='person-app_container'>
                <InputField onSearchFieldUpdate={onSearchFieldUpdate}
                            onSelectedFilter = {onSelectedFilter}
                />
                <CardList
                    searchField = {searchField}
                    newPerson = {newPerson}
                    onCheckCurrentPerson={onCheckCurrentPerson}
                    changeNewPersonStatus={changeNewPersonStatus}
                    onFormReset={onFormReset}
                    selectedStatus={selected}
                />
            </Container>
            <CardInfo currentPerson={currentPerson} onCheckCurrentPerson={onCheckCurrentPerson}/>
            <AddPersonForm addNew={addNew} changeNewPersonStatus={changeNewPersonStatus} onFormUpdate={onFormUpdate}/>
        </>
    )
}

export default PersonApp