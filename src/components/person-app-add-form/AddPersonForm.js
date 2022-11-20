import {useState} from "react";
import './cardAddForm.css';
import nextId from "react-id-generator"
import CloseModal from "../service-components/CloseModal";
import CloseAddForm from "../service-components/closeAddForm/CloseAddForm";

const AddPersonForm = ({addNew, changeNewPersonStatus, onFormUpdate}) => {
    if(!addNew) {
        return
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newForm = new FormData(event.target);
        onFormUpdate({
            name : newForm.get("name"),
            id : nextId(),
            username : newForm.get("username"),
            email : newForm.get("email"),
            phone : newForm.get("phone"),
            website : newForm.get("website"),
            address: {
                street : newForm.get("street"),
                suite : newForm.get("suite"),
                zipcode : newForm.get("zipcode"),
                city: newForm.get("city"),
            },
            company : newForm.get("company"),
        });
        changeNewPersonStatus();
    }

    return (
        <div className='card-info__container'>
            <div className='card-info__modal'>
                <form action="#" className='card-info__form card-add__form' onSubmit={(e) => onFormSubmit(e)}>
                    <CloseAddForm changeNewPersonStatus={changeNewPersonStatus}/>
                    <div className='card-info__input-group'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder='Name' required/>
                    </div>
                    <div className='card-info__input-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder='Username' required/>
                    </div>
                    <div className='card-info__input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email"  name="email" placeholder='Email'/>
                    </div>
                    <div className='card-info__input-group'>
                        <label htmlFor="phone">Phone</label>
                        <input type="text"  name="Phone" placeholder='Phone'/>
                    </div>
                    <div className='card-info__input-group'>
                        <label htmlFor="website">Website</label>
                        <input type="text" name="website" placeholder='Website' required/>
                    </div>
                    <ul className='card-info__input-group-address' id='address-group'>
                        <label htmlFor="address-group">Address:</label>
                        <div className='card-info__input-group'>
                            <label htmlFor="street">Street</label>
                            <input type="text"  name="street" placeholder='Address'/>
                        </div>
                        <div className='card-info__input-group'>
                            <label htmlFor="name">Suite</label>
                            <input type="text" name="website" placeholder='Suite'/>
                        </div>
                        <div className='card-info__input-group'>
                            <label htmlFor="zipcode">ZipCode</label>
                            <input type="number" name="zipcode" placeholder='Postal Code'/>
                        </div>
                        <div className='card-info__input-group'>
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" placeholder='City'/>
                        </div>
                    </ul>
                    <div className='card-info__input-group'>
                        <label htmlFor="company">Company</label>
                        <input type="text" id='company' name="company" placeholder='Company Name'/>
                    </div>
                    <button className='card-info__btn' type='submit'>Ok!</button>
                </form>
            </div>
        </div>
    )
}

export default AddPersonForm;