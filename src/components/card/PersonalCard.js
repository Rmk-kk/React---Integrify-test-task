import {Card, Button} from "react-bootstrap";
import FavouriteStar from "../service-components/Favourite/FavouriteStar";
import Cross from "../service-components/removeItemCross/Cross";

const PersonalCard = ({person, onCheckCurrentPerson, addToFavourites, removePerson}) => {
    const { name, username, website, isFavourite, selected} = person;
    const clazz = selected ? 'person-selected' : '';
    return (
        <Card className={`card-item ${clazz}`}>
            <Cross removePerson={removePerson} id={person.id}/>
            <FavouriteStar addToFavourites={addToFavourites} id={person.id}/>
            <div className='imageContainer'>
                <div className="profile-image" style={{'background' : `grey` }}>
                </div>
                <span className='imageText'>{name.charAt(0)}</span>
            </div>
            <Card.Body>
                <Card.Title className='card-title'>{name}</Card.Title>
                <Card.Subtitle className='card-nickname'>@{username}</Card.Subtitle>
                <Card.Link href={website} className='card-phone'>{website}</Card.Link>
                <Button className='card-btn' variant="outline-secondary" onClick={() => onCheckCurrentPerson(person)}>More Details</Button>
            </Card.Body>
        </Card>
    )
}

export default PersonalCard