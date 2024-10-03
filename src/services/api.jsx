import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

// Function to get all character
export const getAllCharacters = async (page = 1) => {
    try {
        const response = await axios.get(`${API_URL}/character?page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};

// Function to get character by ID
export const getCharacterById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/character/${id}`)
        return res.data;
    } catch (error) {
        console.error('Error fetching character id:', error);
        throw error;
    }
}

// Function to get random caracter
export const getRandomCharacter = async () => {
    try {
      const randomId = Math.floor(Math.random() * 671) + 1;  // There are 671 characters in the Rick and Morty API
      const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching character:', error);
    }
  };