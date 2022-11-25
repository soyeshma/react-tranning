import React from 'react'
import ReactDOM from 'react-dom/client'
import  './App.css'
import AnimeQuotes from './components/AnimeQuotes'
import Weather from './components/weather'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='App'>
    < Weather/>
    </div>
  
  </React.StrictMode>
)
