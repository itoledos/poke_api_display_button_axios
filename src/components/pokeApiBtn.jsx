import React from 'react'
import {useEffect, useState} from 'react';

const PokeApiBtn = (props) => {
    const [people, setPeople] = useState([]);
    const [show, setShow] = useState(false);
 
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response =>response.json())
            .then(resp => {
                console.log(resp.results)
                return(setPeople(resp.results))})
    }, [show]);
 
    const showPoke = (e) => {
        e.preventDefault();
        setShow(!show);
        console.log(show);
    }

    const displayPoke = (props) =>{
        if(show) {
            return(
                <ul>
                    {
                        people.map((itm,idx)=>
                        <li key={idx}>{itm.name}</li>)
                    }
                </ul>
            )
        }
    }

    return (
        <div>
            <button onClick={showPoke}>Fetch Pokemon</button>
            <div>{displayPoke()}</div>
        </div>
    );
}
export default PokeApiBtn;

