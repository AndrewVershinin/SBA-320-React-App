import React from 'react';

const FavoriteCharacters = ({ favorites, toggleFavorite }) => {
    return (
        <div className='favorite-characters'>
            <h1>Your Favorite Characters</h1>
            {favorites.length === 0 ? (
                <p>You don't love anyone!</p>
            ) : (<ul className='favorite-character-list'>
                {favorites.map(character => (
                    <li key={character.id} className='favorite-character-item'>
                        <img
                            src={character.image}
                            alt={character.name}
                            className='favorite-character-image'
                        />
                        {character.name}
                        <button onClick={() => toggleFavorite(character)}>
                            Remove from Favorites
                        </button>
                    </li>
                ))}
            </ul>)}
            
        </div>
    );
};

export default FavoriteCharacters;