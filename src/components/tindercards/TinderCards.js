import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import './tindercards.css'
import axios from '../../axios/axios'

const TinderCards = () => {
    const [person, setPerson] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get('/tinder/cards');
            setPerson(req.data);
        };

        fetchData();
    }, []);

    const swiped = () => { }

    const onOffScreen = () => { }

    return (
        <div className='tindercards'>
            <div className="tindercards_cardContainer">
                {person.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person._id}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => onOffScreen(person.name)}
                    >
                        <div className='card' style={{ backgroundImage: `url(${person.imageUrl})` }}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
