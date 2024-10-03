import React, { useEffect, useState } from 'react';
import { getAllCharacters } from '../services/api';
import FavoriteCharacters from './FavoriteCharacters';

const CharacterList = ({ favorites, toggleFavorite }) => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1); // Add state for characters loading
    const [selectedCharacter, setSelectedCharacter] = useState(null); // State for selected character

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getAllCharacters(page);
                setCharacters(prevCharacters => [...prevCharacters, ...data.results]); // Append new characters
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        }

        fetchCharacters();
    }, [page]);

    // Function to check if a character is already in favorites
    const isFavorite = (character) => favorites.some(fav => fav.id === character.id);

    const loadMoreCharacters = () => {
        setPage(prevPage => prevPage + 1); // Increment page number
    }
    

    return (
        <div className='characters'>
            <h1>Character List</h1>
            <div className='box'>
                <ul className='character-list'>
                    {characters.map(character => (
                        <li
                            key={character.id}
                            className='character-item'
                            onClick={() => setSelectedCharacter(character)} // Set selected character on click
                        >
                            <img
                                src={character.image}
                                alt={character.name}
                                className='character-image'
                            />
                            {character.name}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent the click event from bubbling up
                                    toggleFavorite(character);
                                }}
                                className={isFavorite(character) ? 'liked' : ''}
                            >
                                {isFavorite(character) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                                {isFavorite(character) ? '' : ''}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={loadMoreCharacters}>Load more</button>
            {selectedCharacter && (
                <div className="modal-overlay" onClick={() => setSelectedCharacter(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={() => setSelectedCharacter(null)}>&times;</span>
                        <h2>{selectedCharacter.name}</h2>
                        <img src={selectedCharacter.image} alt={selectedCharacter.name} />
                        <h5>Status: {selectedCharacter.status}</h5>
                        <h5>Species: {selectedCharacter.species}</h5>
                        <h5>Origin: {selectedCharacter.origin.name}</h5>
                        <h5>Gender: {selectedCharacter.gender}</h5>
                        <h5>Episodes Appeared In: {selectedCharacter.episode.length}</h5>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CharacterList;