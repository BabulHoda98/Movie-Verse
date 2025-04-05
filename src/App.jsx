import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home'
import MovieDetails from './pages/movieDetails'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/movies/:id' element={<MovieDetails/>}/>
    </Routes>
    </>
  )
}

export default App