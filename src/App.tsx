import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Two Way<br/> Data Binding</h1>
      <p>
        Edit the number in the input box by clicking on the Plus or Minus
        buttons or by directly editing the number inside the input.
      </p>
      <div className="input-container">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
    </>
  )
}

export default App
