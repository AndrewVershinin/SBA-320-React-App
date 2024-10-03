import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import FavoriteCharacters from './components/FavoriteCharacters';
import CharacterBattle from './components/CharacterBattle';
import './App.css'


function App() {

  const [currentPage, setCurrentPage] = useState('list'); // Default page
  const [favorites, setFavorites] = useState([]); // State for storing favorites

  // Function to add/remove character to/from favorites
  const toggleFavorite = (character) => {
    if (favorites.some(fav => fav.id === character.id)) {
      setFavorites(favorites.filter(fav => fav.id !== character.id)); // Remove from favorites
    } else {
      setFavorites([...favorites, character]); // Add to favorites
    }
  };

  const renderComponent = () => {
    switch (currentPage) {
      case 'list':
        return <CharacterList favorites={favorites} toggleFavorite={toggleFavorite} />;
      case 'Favorite':
        return <FavoriteCharacters favorites={favorites} toggleFavorite={toggleFavorite} />;
      case 'battle':
        return <CharacterBattle />;
      default:
        return <CharacterList />;
    }
  };

  return (
    <div className="app">
      <nav className='nav'>
        <button onClick={() => setCurrentPage('list')}>Character List</button>
        <button onClick={() => setCurrentPage('Favorite')}>Favorites</button>
        <button onClick={() => setCurrentPage('battle')}>Battle</button>
      </nav>
      {renderComponent()}
    </div>
  );
}

export default App
