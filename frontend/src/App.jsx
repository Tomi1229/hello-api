import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("API hiba:", err))
  }, [])

  return (
    <div>
      <h1>Item lista (FastAPI-ról)</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

