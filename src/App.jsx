import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1>Calculadora</h1>
        <div>
          <input id='numero1' type="number"/> 
          <input id='numero2' type="number"/>
        </div>

        <button onclick="divisao()">Divisao</button>
        <button onclick="soma()">Soma</button>
        <button onclick="subtracao()">Subtração</button>
        <button onclick="multiplicacao()">Multiplicação</button>

        
    </>
  )
}

export default App
