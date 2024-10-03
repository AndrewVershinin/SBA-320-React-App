import React, { useState } from 'react';
import { getRandomCharacter } from '../services/api'

const calculatePoints = (character) => {
    let points = 0;

    // Status poins
    if (character.status === 'Alive') {
        points += 10;
    } else if (character.status === 'Dead') {
        points += 5;
    } else if (character.status === 'unknown') {
        points += 7;
    }

    // Episode points
    points += character.episode.length * 0.5;

    // Species points
    if (character.species === 'Human') {
        points += 5;
    } else if (character.species !== 'Human') {
        points += 7;
    }

    return points
};


const CharacterBattle = () => {
    const [userCharacter, setUserCharacter] = useState(null);
    const [opponentCharacter, setOpponentCharacter] = useState(null);
    const [userPoints, setUserPoints] = useState(0);
    const [opponentPoints, setOpponentPoints] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const startBattle = async () => {
        setIsAnimating(true);

        // Simulate flickering animation
        for (let i = 0; i < 20; i++) {
            const randomUserCharacter = await getRandomCharacter();
            const randomOpponentCharacter = await getRandomCharacter();
            setUserCharacter(randomUserCharacter);
            setOpponentCharacter(randomOpponentCharacter);

            // Flicker speed
            await new Promise(resolve => setTimeout(resolve, 50));
        }

        // After animation ends, select a character
        const finalUserCharacter = await getRandomCharacter()
        const finalOpponentCharacter = await getRandomCharacter();
        setUserCharacter(finalUserCharacter);
        setOpponentCharacter(finalOpponentCharacter);

        // And calculate points
        const userCharPoints = calculatePoints(finalUserCharacter);
        const opponentCharPoints = calculatePoints(finalOpponentCharacter);
        setUserPoints(userCharPoints);
        setOpponentPoints(opponentCharPoints);

        setIsAnimating(false);
    }

    return (
        <div className="battle-game">
            <h1>The Great Battle of the Rick and Morty universe</h1>
            <div className="character-slots">
                {/* User Character */}
                <div className="slot">
                    {userCharacter ? (
                        <div>
                            <img src={userCharacter.image} alt={userCharacter.name} />
                            <h3>{userCharacter.name}</h3>
                            <p>Status: {userCharacter.status}</p>
                            <p>Species: {userCharacter.species}</p>
                            <p>Episodes: {userCharacter.episode.length}</p>
                            <p>Points: {userPoints}</p>
                        </div>
                    ) : (
                        <div className="empty-slot">YOUR CHARACTER</div>
                    )}
                </div>

                {/* Opponent Character */}
                <div className="slot">
                    {opponentCharacter ? (
                        <div>
                            <img src={opponentCharacter.image} alt={opponentCharacter.name} />
                            <h3>{opponentCharacter.name}</h3>
                            <p>Status: {opponentCharacter.status}</p>
                            <p>Species: {opponentCharacter.species}</p>
                            <p>Episodes: {opponentCharacter.episode.length}</p>
                            <p>Points: {opponentPoints}</p>
                        </div>
                    ) : (
                        <div className="empty-slot">A COMPUTER CHARACTER</div>
                    )}
                </div>
            </div>
            <button onClick={startBattle} disabled={isAnimating}>
                {isAnimating ? "Battling..." : "Start Battle"}
            </button>

            {/* Display winner */}
            {!isAnimating && userCharacter && opponentCharacter && (
                <div className="battle-result">
                    <h2>Battle Result:</h2>
                    {userPoints > opponentPoints ? (
                        <p>Rick-gendary! You won and scored {userPoints} points!</p>
                    ) : opponentPoints > userPoints ? (
                        <p>Congrats on the epic fail, human! A robot wins with {opponentPoints} points!</p>
                    ) : (
                        <p>It's a draw! But you're still a loser!</p>
                    )}
                </div>
            )}
        </div>
    );

};

export default CharacterBattle;