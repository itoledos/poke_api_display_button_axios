import React from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios';

const PokeApiBtn = (props) => {
    const [poke, setPoke] = useState([]);
    const [show, setShow] = useState(false);
 
    useEffect(() => {

        // AXIOS
        const obtainPoke = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
            setPoke(response.data.results)
            // return (setPeople(response.results))
            }
        obtainPoke();

        // FETCH
        // fetch('https://pokeapi.co/api/v2/pokemon/')
        //     .then(response =>response.json())
        //     .then(resp => {
        //         return(setPeople(resp.results))})

    }, [show]);
 
    const showPoke = (e) => {
        e.preventDefault();
        const actualState = !show;
        setShow(actualState);
        console.log(actualState);
    }

    const displayPoke = (props) =>{
        if(show) {
            return(
                <ul>
                    {
                        poke.map((itm,idx)=>
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

