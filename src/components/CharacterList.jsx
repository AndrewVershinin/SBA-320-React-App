import React, { useEffect, useState } from 'react';
import { getAllCharacters } from '../services/api';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

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

    const loadMoreCharacters = () => {
        setPage(prevPage => prevPage + 1); // Increment page number
    }

    return (
        <div className='characters'>
            <h1>Character List</h1>
            <ul className='character-list'>
                {characters.map(character => (
                    <li key={character.id} className='character-item'>
                        <img
                            src={character.image}
                            alt={character.name}
                            className='character-image'
                        />
                        {character.name}
                    </li>
                ))}
            </ul>
            <button onClick={loadMoreCharacters}>Load more</button>
        </div>
    );
};

export default CharacterList;