import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'

function App() {
  const [data, setData] = useState([])

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:3000/api')
    setData(response.data.fruits)
    console.log(response.data)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <main>
      <Navbar />
      <h1>Inventory App</h1>
      {data.map((fruit) => {
        return (
          <div key={fruit}>
            <p>{fruit}</p>
          </div>
        )
      })}
    </main>
  )
}

export default App
