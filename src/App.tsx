import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllPosts from './AllPosts'

function App() {
  const [count, setCount] = useState(0)

  return (
   <AllPosts/>
  )
}

export default App
