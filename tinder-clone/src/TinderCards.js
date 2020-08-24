import React, { useState, useEffect } from 'react'
import db from './firebase'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

// useEffect : peace of code that runs on a condition



function TinderCards() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        db.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <div>
            {people.map(person => (
                <div className="tindercards__cardContainer">
                    <TinderCard
                        className="swipe"
                        key={person.names}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.names}</h3>
                        </div>
                    </TinderCard>
                </div>
            ))}
        </div>
    )
}

export default TinderCards
