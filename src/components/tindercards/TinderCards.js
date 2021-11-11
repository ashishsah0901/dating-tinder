import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './tindercards.css'

const TinderCards = () => {
    const [person, setPerson] = useState([
        {
            name: 'Selena Gomez',
            url: 'http://www.bikinissportsbarandgrill.com/wp-content/uploads/2019/04/Selena-Gomez-in-a-bikini-Spring-Breaker.jpg',
            key: 1
        },
        {
            name: 'Selena Gomez',
            url: 'http://www.bikinissportsbarandgrill.com/wp-content/uploads/2019/04/Sexy-Selena-Gomez-Bikini-Pictures.jpg',
            key: 2
        },
        {
            name: 'Selena Gomez',
            url: 'http://www.bikinissportsbarandgrill.com/wp-content/uploads/2019/04/Selena_Gomez-neked.jpg',
            key: 3
        },
        {
            name: 'Selena Gomez',
            url: 'http://www.bikinissportsbarandgrill.com/wp-content/uploads/2019/04/Selena_Gomez-nuked-1.jpg',
            key: 4
        },
        {
            name: 'Selena Gomez',
            url: 'http://www.bikinissportsbarandgrill.com/wp-content/uploads/2019/04/Sexy-Selena-Gomez-Bikini-Pictures-1.jpg',
            key: 5
        },
    ]);

    const swiped = (dir, name) => {
        console.log(dir + name)
    }

    const onOffScreen = (name) => {
        console.log(name);
    }

    return (
        <div className='tindercards'>
            <div className="tindercards_cardContainer">
                {person.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.key}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => onOffScreen(person.name)}
                    >
                        <div className='card' style={{ backgroundImage: `url(${person.url})` }}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
