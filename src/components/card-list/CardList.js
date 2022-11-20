import './cardlist.css'
import {useCallback, useEffect, useState} from "react";
import FetchData from "../service-components/request/fetchData";
import PersonalCard from "../card/PersonalCard";
import Spinner from "../service-components/Spinner/Spinner";
import Error404 from "../service-components/404-error/Error404";
import AddCardItem from "../card-add-item/AddCard";

const CardList = ({searchField, onCheckCurrentPerson,
                      changeNewPersonStatus,
                      newPerson, onFormReset, selectedStatus }) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState(() => {
        const savedList = localStorage.getItem('users');
        const parsedList = JSON.parse(savedList);
        return parsedList || []
    });
    const [filter, setFilter] = useState('');

    //on first loading fetching data
    useEffect(() => {
        if(list.length === 0) {
            onRequest();
        }
    }, []);

    //adding new person
    useEffect(() => {
      if(!newPerson) {
          return
      }
      addNewPerson(newPerson);
      onFormReset();
    },[newPerson])

    // on input change we set search field
    useEffect(() => {
        onFilterInputUpdate(searchField)
    },[searchField])

    //adding to local storage
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(list));
    },[list])

    //Services
    const serviceComponent = new FetchData();
    //-loading handler
    const onListLoading = () => {
        setLoading(true);
    }
    //-error handler
    const onError = () => {
        setError(true);
        setLoading(false)
    }
    //-loading-done handler
    const onListLoaded = (newList) => {
        setList([...list, ...newList]);
        setLoading(false);
    }

    //onRequesting data
    const onRequest = () => {
        onListLoading();
        serviceComponent._fetchData()
            .then(onListLoaded)
            .catch(onError)
    }

    //EXTRAS

    //Add to favourites
    const addToFavourites = (personId, prop) => {
        setList(list => list.map(item => {
            if(item.id === personId){
                return {...item, [prop] : !item[prop]}
            }
            return item;
        }))
    }

    //Add new person to list
    const addNewPerson = (person) => {
        setList([...list, person])
    }

    //Remove Person
    const removePerson = (personId) => {
        // setFavourite([...favourite, personId]);
        setList(list => list.filter(item => item.id !== personId))
    }

    //Filter Items by name
    const onFilterItems = (string, list) => {
        const regExp = new RegExp(string, 'ig');
        if(regExp.length === 0) {
            return list
        }
        return list.filter(item => {
            return item.name.match(regExp);
        })
    }

    const onFilterInputUpdate = (string) => {
        setFilter(string)
    }

    //Filter Items by Alphabet and Favourites

    const onSwitchUpdate = (list, filter) => {
        switch (filter) {
            case 'selected':
                return list.filter(person => {
                    return person.selected === true
                })
            default :
                return list
        }
    }

    const createContent = (items) => {
        const elements = items.map( person => {
                const { id } = person;

                return (
                    <PersonalCard key={id}
                                  removePerson={removePerson}
                                  person={person}
                                  onCheckCurrentPerson={onCheckCurrentPerson}
                                  addToFavourites={addToFavourites}
                    />
                )
        })
        const button = (list.length < 12) ? <AddCardItem changeNewPersonStatus={changeNewPersonStatus}/> : null;
        return (
            <div className='list__container'>
                {elements}
                {button}
            </div>
        )

    }


    const selectedFilterList = selectedStatus ? onSwitchUpdate(list, 'selected') : list;
    const filteredList = onFilterItems(filter, selectedFilterList);
    const finalList = createContent(filteredList);

    const err = error ? <Error404/> : null;
    const spinner = loading ? <Spinner/> : null;

    return (
        <div>
            {err}
            {spinner}
            {finalList}
        </div>
    )
}

export default CardList;