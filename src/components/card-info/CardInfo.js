import './CardInfo.css';
import CloseModal from "../service-components/CloseModal";
import {useState} from "react";
import Spinner from "../service-components/Spinner/Spinner";

const CardInfo = ({currentPerson, onCheckCurrentPerson}) => {
    if(!currentPerson) {
        return
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        onCheckCurrentPerson(null)
    }

    const content = <View currentPerson={currentPerson} onFormSubmit={onFormSubmit}/>;
    const loading = currentPerson ? null :  <Spinner/>;

    return (

        <div className='card-info__container'>

            <div className='card-info__modal'>
                <form action="#" className='card-info__form' onSubmit={(e) => onFormSubmit(e)}>
                    {/*pushing props to SVG just because SVG doesnt work with onClick, so the handler must be inside*/}
                    <CloseModal onCheckCurrentPerson={onCheckCurrentPerson}/>
                    {loading}
                    {content}
                </form>
            </div>
        </div>
    )
}

const View = ({currentPerson,onFormSubmit}) => {
    const {name, email, phone, username, website, id, address, company} = currentPerson;

    return (
        <>
            <div className='card-info__input-group'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder={name} disabled/>
            </div>
            <div className='card-info__input-group'>
                <label htmlFor="username">Username</label>
                <input type="text" id='username'  placeholder={username}  disabled/>
            </div>
            <div className='card-info__input-group'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder={email} disabled/>
            </div>
            <div className='card-info__input-group'>
                <label htmlFor="phone">Phone</label>
                <input type="text" id='Phone' placeholder={phone} disabled/>
            </div>
            <div className='card-info__input-group'>
                <label htmlFor="website">Website</label>
                <input type="text" id='website' placeholder={website}  disabled/>
            </div>
            <ul className='card-info__input-group-address' id='address-group'>
                <label htmlFor="address-group">Address:</label>
                <div className='card-info__input-group'>
                    <label htmlFor="street">Street</label>
                    <input type="text" id='street'  placeholder={address.street} disabled/>
                </div>
                <div className='card-info__input-group'>
                    <label htmlFor="name">Suite</label>
                    <input type="text" id='website' placeholder={address.suite} disabled/>
                </div>
                <div className='card-info__input-group'>
                    <label htmlFor="zipcode">ZipCode</label>
                    <input type="number" id='zipcode' placeholder={address.zipcode} disabled/>
                </div>
                <div className='card-info__input-group'>
                    <label htmlFor="city">City</label>
                    <input type="text" id='city' placeholder={address.city} disabled/>
                </div>
            </ul>
            <div className='card-info__input-group'>
                <label htmlFor="company">Company</label>
                <input type="text" id='company' placeholder={company.name} disabled/>
            </div>
            <button className='card-info__btn' onClick={(e) => onFormSubmit(e)}>Ok!</button>
        </>
    )
}

export default CardInfo;