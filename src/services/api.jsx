import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

// Function to get all character
export const getAllCharacters = async () => {
    try {
        const res = await axios.get(`${API_URL}/character`);
        return res.data;
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
        const randomId = Math.floor(Math.random() * 826) + 1; // 826 is total character count
        const res = await axios.get(`${API_URL}/character/${randomId}`)
    } catch (error) {
        console.error('Error fetching character id:', error);
        throw error;
    }
}