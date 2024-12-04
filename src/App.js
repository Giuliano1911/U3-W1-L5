import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import Settings from './components/Settings'
import Profile from './components/Profile'
import Error from './components/Error'
import MovieDetails from './components/MovieDetails'

import { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <MyNav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={<MovieDetails />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </BrowserRouter>
    )
  }
}

export default App
