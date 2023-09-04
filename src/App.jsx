import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import HomePage from './components/HomePage'

function App() {
  const [articles, setArticles] = useState([])

  return (
    <main className="homePage">
      <Header />
      <HomePage />

    </main>
  )
}

export default App
