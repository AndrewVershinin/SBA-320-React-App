import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CaracterDetail from './components/CaracterDetail';
import FavoriteCharacters from './components/FavoriteCharacters';
import CharacterBattle from './components/CharacterBattle';
import './App.css'

function App() {


  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<CharacterList />} />
          <Route path='/character/:id' element={<CaracterDetail />} />
          <Route path='/favorites' element={<FavoriteCharacters />} />
          <Route path="/battle" element={<CharacterBattle />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
