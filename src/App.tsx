import { useState } from 'react'
import siteLogo from '/Logo-FA.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={siteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Site web de Florent AUDAP</h1>
      <div className="card">
        <h3>Comptez jusqu'à autant que vous voulez</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
